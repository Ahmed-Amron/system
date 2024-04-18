const { MessageEmbed } = require("discord.js");
const mongoose = require("mongoose");
const Balance = require('../../models/balanceModel');

module.exports = {
    name: "daily",
    category: "economy",
    description: "get daily money",
    options: [],
    run: async (client, interaction, args) => {
        const user = interaction.member;
        const timeout = 86400000;
        const amount = Math.floor(Math.random() * 1000);

        try {
            await mongoose.connect(process.env.mongoose, { useNewUrlParser: true, useUnifiedTopology: true });

            let balance = await Balance.findOne({ _id: user.id });

            if (!balance) {
                balance = new Balance({
                    _id: user.id,
                    money: 0,
                    daily: null,
                });
                await balance.save();
            }

            const daily = balance.daily;

            if (daily !== null && Date.now() - daily < timeout) {
                const remainingTime = timeout - (Date.now() - daily);
                const remainingHours = Math.floor(remainingTime / (60 * 60 * 1000));
                const remainingMinutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
                const remainingSeconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
                const timeString = `${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;

                const timeEmbed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`You can collect your daily again in ${timeString}.`);
                interaction.editReply({ embeds: [timeEmbed] });
            } else {
                const moneyEmbed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`You've collected your ${amount} from daily.`);
                interaction.editReply({ embeds: [moneyEmbed] });

                const newMoney = (balance.money || 0) + amount;
                await Balance.updateOne({ _id: user.id }, { $set: { daily: Date.now(), money: newMoney } });

                setTimeout(async () => {
                    await Balance.updateOne({ _id: user.id }, { $set: { daily: null } });
                }, timeout);
            }
        } catch (err) {
            console.error(err);
        }
    }
};
