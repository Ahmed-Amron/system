const Pro = require(`pro.db`)
const db = require(`pro.db`)
const { MessageEmbed } = require(`discord.js`)
const {owners } = require(`${process.cwd()}/config`);
module.exports = {
    name: `allow`,
    aliases: ["سماح"],
    run: async function (client, message) {


                          const Color = db.get(`Guild_Color = ${message.guild.id}`) || message.guild.me.displayHexColor || `#000000`
            if (!Color) return;
      
        if (!owners.includes(message.author.id)) return message.react(`❌`);
        const Args = message.content.split(` `)
        if (!Args[1]) return message.reply({ content :  `**يرجى ارفاق منشن او ايدي العضو او رول .**`})
      
        const Embed = new MessageEmbed()
        const Roles = message.guild.roles.cache.find((role) => role.id === Args[2]) || message.mentions.roles.first();
        if (Roles) {
            Pro.set(`Allow - Command ${Args[1]} = [ ${message.guild.id} ]`, Roles.id)
            Embed.setDescription(`تم منح ${Roles} صلاحية **${Args[1]}**`)
            Embed.setColor(`${Color || message.guild.me.displayHexColor || `#000000`}`)
            message.reply({ embeds: [Embed] })
        }
        const Member = message.guild.members.cache.find((role) => role.id === Args[2]) || message.mentions.members.first();
        if (Member) {
            Pro.set(`Allow - Command ${Args[1]} = [ ${message.guild.id} ]`, Member.id)
            Embed.setDescription(`تم منح ${Member} صلاحية **${Args[1]}**`)
            Embed.setColor(`${Color || message.guild.me.displayHexColor || `#000000`}`)
            message.reply({ embeds: [Embed] })
        }
    }
}