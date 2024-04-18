const { Message, MessageEmbed } = require('discord.js')
const ms = require('ms')
const humanizeDuration = require('humanize-duration');


module.exports = {
    name: 'mute',
    category: "mod",
    description: 'Mutes a member from sending messages.',
    options: [
        {
            name: 'user',
            description: 'The user to mute.',
            type: 6,
            required: true,
        },
        {
            name: 'time',
            description: 'The duration of the mute. Example: 1m, 1d, 1mo.',
            type: 3,
            required: true,
        },
        {
            name: "reason",
            description: "The reason for the mute.",
            type: 3,
            required: false
        },
    ],
    /**
     * @param {Message} message
     */
    run: async (client, interaction, args) => {
        const user = interaction.options.getMember('user')
        const time = interaction.options.getString('time')
        const reason = interaction.options.getString('reason')
        if (!interaction.member.permissions.has('MANAGE_MESSAGES')) return interaction.editReply('You do not have permissions to use this command.')
        if (!user) return interaction.editReply({ content: "Member not found." })

        let role = interaction.guild.roles.cache.find(role => role.name.toLowerCase() === 'Muted')
        if (!role) {
            try {
                role = await interaction.guild.roles.create({
                    name: 'Muted',
                    permissions: []
                });
                interaction.guild.channels.cache.forEach(async (channel, id) => {
                    await channel.permissionOverwrites.edit(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
                interaction.editReply({ content: "Muted role has been created." })
            } catch (error) {
                console.log(error)
                return interaction.editReply({ content: "Failed to create muted role." })
            }
        }

        if (user.roles.cache.has(role.id)) return interaction.editReply(`${user.displayName} is already muted.`)
        await user.roles.add(role)

        interaction.editReply({ content: `${user.displayName} is now muted for ${humanizeDuration(ms(time), { round: true })}.` })
        setTimeout(() => {
            user.roles.remove(role)
        }, ms(time))

        if (reason) {
            const embed = new MessageEmbed()
                .setTimestamp()
                .setColor("BLACK")
                .setTitle(`Powerful System`)
                .setDescription(`Your punishment has been updated in ${interaction.guild.name}\n\n**Action:** Muted\n**Reason:** ${reason}`)
            try {
                await user.send({ embeds: [embed] })
            } catch (error) {
                console.log(`Failed to send DM to ${user.displayName}: ${error}`)
            }
        }
    }
}
