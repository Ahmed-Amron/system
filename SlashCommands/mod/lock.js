const { Discord , MessageEmbed} = require('discord.js')
module.exports = {
  name: "lock",
  category: "mod",
  description: "locks the current or selected text channels",
  options: [],
run : async (client, interaction, args) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.editReply({content : `Permissions denied : permission required ``MANAGE_CHANNELS`` `});
interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
SEND_MESSAGES: false
      })
      .then(() => {
 interaction.editReply({ content : `:lock: ${interaction.channel.name} has been locked`})
});
}
}
