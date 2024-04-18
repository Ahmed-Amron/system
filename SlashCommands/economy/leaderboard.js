const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Balance = require('../../models/balanceModel');

// Replace the connection string, database name, and collection name with your own
const dbName = 'economy';
const collectionName = 'balances';

const balanceSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  money: {
    type: Number,
    required: true,
    default: 0
  }
});


module.exports = {
  name: "leaderboard",
  category: 'economy',
  description: 'who the rich ?',
  options: [],
  run: async (client, interaction, args) => {
    try {
      await mongoose.connect(process.env.mongoose);

      const balances = await Balance.find({ money: { $gt: 0 } })
        .sort({ money: -1 })
        .limit(10);

      if (balances.length === 0) {
        const noEmbed = new MessageEmbed()
          .setAuthor(interaction.member.displayName, interaction.author.displayAvatarURL())
          .setColor("RANDOM")
          .setFooter("What do you think to get your daily?");

        interaction.editReply({ embeds: [noEmbed] });
        return;
      }

      const finalLb = await Promise.all(balances.map(async (balance, index) => {
        const user = await client.users.fetch(balance._id);
        const name = user ? user.username : balance._id;
        return `**${index + 1}. ${name}** - ${balance.money} :dollar:`;
      }));

      const embed = new MessageEmbed()
        .setTitle(`Leaderboard Of ${interaction.guild.name}`)
        .setColor("RANDOM")
        .setDescription(finalLb.join('\n'))
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        .setTimestamp();

      interaction.editReply({ embeds: [embed] });
    } catch (err) {
      console.error(err);
    } 
  }
};
