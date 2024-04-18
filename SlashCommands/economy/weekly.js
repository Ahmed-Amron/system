const { MessageEmbed } = require("discord.js");
const mongoose = require("mongoose");
const Balance = require('../../models/balanceModel');

module.exports = {
    name: "weekly",
    category: "economy",
    description: "get weekly money",
    options: [],
run: async (client, interaction, args) => {
    const user = interaction.member;
    const timeout = 604800000;
    const amount = Math.floor(Math.random() * 1000);

    try {
        await mongoose.connect(process.env.mongoose, { useNewUrlParser: true, useUnifiedTopology: true });

        let balance = await Balance.findOne({ _id: user.id });

        if (!balance) {
            balance = new Balance({
                _id: user.id,
                money: 0,
                weekly: null,
            });
            await balance.save();
        }

        const weekly = balance.weekly;

        if (weekly !== null && Date.now() - weekly < timeout) {
            const remainingTime = timeout - (Date.now() - weekly);
            const remainingHours = Math.floor(remainingTime / (60 * 60 * 1000));
            const remainingMinutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
            const remainingSeconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
            const timeString = `${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;

            const timeEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You can collect your weekly again in ${timeString}.`);
            interaction.editReply({ embeds: [timeEmbed] });
        } else {
            const moneyEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You've collected your ${amount} from weekly.`);
            interaction.editReply({ embeds: [moneyEmbed] });

            const newMoney = balance.money + amount;
            await Balance.updateOne({ _id: user.id }, { $set: { weekly: Date.now(), money: newMoney } });

            setTimeout(async () => {
                await Balance.updateOne({ _id: user.id }, { $set: { weekly: null } });
            }, timeout);
        }
    } catch (err) {
        console.error(err);
    }
}
}

