const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Balance = require('../../models/balanceModel');


module.exports = {
  name: "profile",
  category: "general",

  description: "Shows Yours or someone Proile card.",
  options: [
    {
      name: 'user',
      description: 'the targeted user',
      type: 6
    }
  ],
  run: async (client, interaction, args) => {
    const user = interaction.options.getMember('user') || interaction.member;
    try {
      mongoose.connect(process.env.mongoose, { useNewUrlParser: true, useUnifiedTopology: true })
      let balance = await Balance.findOne({ _id: user.id });
      if (!interaction.guild.members.cache.get(user.id)) return interaction.channel.send("User is not in this server.")
      if (user.user.bot) return;
      const row1 = new MessageActionRow().addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setURL(`https://discord.com/users/${user.user.id}`)
          .setEmoji('827619892277674025')
          .setLabel('Profile Link'))
      const profileembed = new MessageEmbed()
        .setAuthor(user.user.username + "'s profile", user.user.avatarURL({ dynamic: true }))
        .addField(`:bust_in_silhouette: **Username**`, `${user.user.username}`)
        .addField(`:hash: **Tag**`, `#${user.user.discriminator}`)
        .addField("**Joined Discord :**", `** <t:${parseInt(user.user.createdAt / 1000)}:R> **`, true)
        .addField("**Joined Server :**", `** <t:${parseInt(user.joinedAt / 1000)}:R> **`, true)
        .addField(`:coin: **Money**`, `${balance.money}`)
        // .addField(`:book: **Bio**` , `${newInfo}`)
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
      interaction.editReply({ embeds: [profileembed], components: [row1] })
    } catch (err) {
      console.error(err);
    }
  }
}
