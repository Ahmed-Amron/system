const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Balance = require('../../models/balanceModel');

// Replace the connection string, database name, and collection name with your own

const dbName = 'economy';
const collectionName = 'balances';

module.exports = {
  name: 'balance',
  category: "economy",
  description: 'Shows your balance.',
  options: [
    {
      name: 'user',
      description: 'User to get balance for',
      type: 6,
    },
  ],
  run: async (client, interaction, args) => {
    const user = interaction.options.getMember('user') || interaction.member;
    if (user.user.bot) return interaction.editReply({ content: `You can't use this command with bot.` });

    try {
      await mongoose.connect(process.env.mongoose, { useNewUrlParser: true, useUnifiedTopology: true });

      let balance = await Balance.findOne({ _id: user.id });

      if (balance === null) {
        balance = new Balance({
          _id: user.id,
          money: 0,
          bank: 0,
        });
        await balance.save();
      }

      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${user.user.username}'s Balance\n\nPocket: \`\`${balance.money}\`\``);
      interaction.editReply({ embeds: [embed] });
    } catch (err) {
      console.error(err);
    }
  },
};
