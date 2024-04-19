const { MessageEmbed } = require(`discord.js`);
const ms = require(`ms`)
const Data = require("pro.db")
module.exports = {
    name: `سجن`,
    aliases : [ `prison`],
    run: async (client, message) => {
        const permission = message.member.permissions.has("MUTE_MEMBERS");
        if (!permission) {
            return message.react('❌')
        }
        let args = message.content.split(" ").slice(2).join(" ");
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
        var time = args[2]
        if (!time) time = '24h'
        const guilds = message.guild.me.permissions.has("MANAGE_ROLES");
        if (!member) return message.react('❌')
        if (member.id === message.member.id)
            return message.react('❌')
        if (message.member.roles.highest.position < member.roles.highest.position)
            return message.react('❌')
        if (!guilds) return message.react('❌')
        let muteRole = message.guild.roles.cache.find((role) => role.name == "Prisoned");
        if (!muteRole) {
            message.guild.roles.create({
                name: "Prisoned",
            }).then((createRole) => {
                message.guild.channels.cache.filter((c) => c.type == "GUILD_TEXT").forEach(c => {
                    c.permissionOverwrites.edit(createRole, { SEND_MESSAGES: false, VIEW_CHANNEL: false })
                })
                message.react('❌')
            })
        } else {
            message.guild.members.cache.get(member.id)?.roles.add(muteRole);
            message.react('✅')
            Data.set(`MutedMember_${member.id}`, 'True'), ms(time)
        }

    }
}