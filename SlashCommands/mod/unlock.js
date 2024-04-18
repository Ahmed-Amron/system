const { Discord , MessageEmbed} = require('discord.js')
module.exports = {
  name: "unlock",
  category: "mod",
  description: "unLocks the current or selected text channels",
  options: [],
run : async (client, interaction, args) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.editReply({content : `Permissions denied : permission required ``MANAGE_CHANNELS`` `});
interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
SEND_MESSAGES: true
      })
      .then(() => {
      interaction.editReply({ content : `:unlock: ${interaction.channel.name} has been unlocked`})
});
}
}
