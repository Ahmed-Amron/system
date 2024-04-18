const { MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
  name: "bot",
  category: "general",
  description: "Shows Bot Profile.",
  run: async (client, interaction, args) => {
    const botembed = new MessageEmbed()
    .setAuthor(client.user.username , client.user.avatarURL({ dynamic:true }))
    .addField(`:robot: client name : ` , `${client.user.username}`)
    .addField(`:hash: client tag : ` , `${client.user.discriminator}`)
    .addField(`:ping_pong: client ping : ` , `${client.ws.ping}`)
    .addField(`:ping_pong: servers : ` , `${client.guilds.cache.size}`)
    await interaction.editReply({ ember: [botembed] })


  }
}
