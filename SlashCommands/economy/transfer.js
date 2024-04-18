const Discord = require("discord.js");
const Captcha = require("@haileybot/captcha-generator"); //npm i @haileybot/captcha-generator
const ms = require("ms");
const mongoose = require('mongoose');
const Balance = require('../../models/balanceModel');
const config = require('../../config')
module.exports = {
  name: "transfer",
  category: "economy",
  description: "transfer money for a user",
  options: [
    {
      name: 'user',
      description: 'User to add moeny',
      type: 6,
      required: true,
    },
    {
      name: 'amount',
      description: 'amount to transfer',
      type: 3,
      required: true,
    },
    {
      name: "reason",
      description: "The reason of this kick",
      type: 3,
      required: false,
    },
  ],
  run: async (client, interaction, args) => {
    const user = interaction.options.getMember('user');
    const input = interaction.options.getString('amount');
    const reason = interaction.options.getString('reason') || "No reason provided ";
    var tax = Math.floor(input - (input * (5.3 / 100)));
    if (user.user.bot) return interaction.editReply({ content: `You can't use this command with bot.` });

    await mongoose.connect(process.env.mongoose, { useNewUrlParser: true, useUnifiedTopology: true });

    const balance = await Balance.findOne({ _id: interaction.user.id })
    let embed4 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`:Cross: You don't have that much money`);
    if (balance.money < input) {
      return interaction.editReply({ embeds: [embed4] })
    }


    let error = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`you can't trasfer coins to your self`);
    if (user.id === interaction.user.id) {
      return interaction.editReply({ embeds: [error] })
    }

    let captcha = new Captcha();
    const attachment = new Discord.MessageAttachment(
      captcha.PNGStream,
      "captcha.jpeg"
    );
    interaction.editReply({content: `> **${interaction.user.username}, Transfer Fees: \`${tax}\`, Amount: \`${input}\`**
Type These Numbers To Confirm:`,
        files: [attachment],
      })
      .then((m) => {
    const filter = m => interaction.user.id === m.author.id;
        interaction.channel.awaitMessages({ filter, max: 1, time: 20000, errors: ["time"] })
          .then(async (collected) => {
            if (collected.first().content === captcha.value) {
              collected.first().delete
              interaction.channel.send({content : `> ${interaction.user.username}, Done Transfer \`${tax}\` To <@!${user.user.id}>` });
              user.send({content : 
                `Transfer Receipt \`\`\`You Have Received ${tax} From User ${user.user.username}; (ID (${user.user.id})\`\`\``});
              m.delete();
              await Balance.updateOne({ _id: user.id }, { $inc: { money: parseInt(tax) } }, { upsert: true });
              await Balance.updateOne({ _id: interaction.user.id }, { $inc: { money: -parseInt(tax) } }, { upsert: true });

            }
          })


      })
  }
}
