const mongoose = require('mongoose');
const { MessageEmbed } = require('discord.js');
const Balance = require('../../models/balanceModel');
const config = require('../../config')

// Replace the connection string, database name, and collection name with your own
const dbName = 'economy';
const collectionName = 'balances';

const balanceSchema = new mongoose.Schema({
  _id: String,
  money: Number,
});


module.exports = {
  name: 'removemoney',
  category: 'economy',
  description: 'Remove money from a user',
  options: [
    {
      name: 'user',
      description: 'User to remove money',
      type: 6,
      required: true,
    },
    {
      name: 'input',
      description: 'Amount to be removed',
      type: 3,
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    let owners = config.None
    const user = interaction.options.getMember('user');
    const input = interaction.options.getString('input');

    if (!owners.includes(interaction.user.id)) return await interaction.editReply("helpppppppppppp please helppppppppppppp");

    if (user.user.bot) return interaction.editReply({ content: `You can't use this command with a bot.` });

    if (isNaN(input)) return interaction.editReply({ content: "Enter a valid amount." });

    if (input.startsWith('-') || input.startsWith('/') || input.startsWith('*') || input.startsWith('+'))
      return interaction.editReply({ content: `${input} is not a valid number.` });

    try {
      await mongoose.connect(process.env.mongoose);

      // Check if the user has enough money to remove
      let userBalance = await Balance.findOne({ _id: user.id });
      if (!userBalance || userBalance.money < input) {
        return interaction.editReply({
          content: `User ${user} does not have enough coins to remove ${input}.`,
          ephemeral: true,
        });
      }

      await Balance.findOneAndUpdate({ _id: user.id }, { $inc: { money: -parseInt(input) } }, { upsert: true });

      let bal = await Balance.findOne({ _id: user.id });

      let moneyEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Success:`)
        .setDescription(`User: ${user},\nAmount: ${input},\nNew balance: ${bal.money}.`);
      interaction.editReply({ embeds: [moneyEmbed] });
    } catch (err) {
      console.error(err);
    } 
  },
};
