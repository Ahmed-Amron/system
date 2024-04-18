const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const humanizeDuration = require('humanize-duration');

module.exports = {
  name: 'timeout',
  category: "mod",
  description: 'Timeout user from typing or joining voice channel or react to messages',
  options: [
    {
      name: 'user',
      description: 'User to timeout.',
      type: 6,
      required: true,
    },
    {
      name: 'time',
      description: 'Time for user to timeout. example: (1m, 1d, 1mo).',
      type: 3,
      required: true,
      choices: [
        {
          name: "1 minute",
          value: "1m"
        },
		{
		  name: "5 minute",
		  value: "5m"
		},
		{
		  name: "10 minute",
		  value: "10m"
		},
		{
		 name: "1 hour",
		 value: "1h"
		},
        {
          name: "1 day",
          value: "1d"
        },
        {
          name: "1 week",
          value: "1 week"
        }
      ]
    }
  ],
  permissions: 'MODERATE_MEMBERS',
  async run(client, interaction, args) {
    const member = interaction.options.getMember('user');
    const time = interaction.options.getString('time');
    if (!interaction.member.permissions.has('MANAGE_MESSAGES')) {
      return interaction.editReply({ content: 'You do not have permissions to use this command' });
    }
    await member.disableCommunicationUntil(Date.now() + ms(time), `By: ${interaction.member.tag}`).catch(console.error);
    const reply = await interaction.editReply({
      content: `:shushing_face: ${member.user.username} has timedout for **for ${humanizeDuration(ms(time), { round: true })}.**`,
    });

    const kk = new MessageEmbed()
      .setTimestamp()
      .setColor("BLACK")
      .setDescription(`
        **Powerful System**
        Your punishment has been updated in ${interaction.guild.name}
        **Action**
        Timeout
        **Duration**
        ${humanizeDuration(ms(time), { round: true })}
      `, true);
    await member.send({ embeds: [kk], ephemeral: true });
  },
};
