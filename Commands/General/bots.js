const { MessageEmbed } = require("discord.js")
const db = require(`pro.db`)
module.exports = {
    name: 'bots', // هنا اسم الامر
    run : (client, message, args) => {
     
        const Data = db.get(`Allow - Command bots = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(Data);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== Data  && !message.member.permissions.has('ADMINISTRATOR')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react('❌');
}
      
      
                          const Color = db.get(`Guild_Color = ${message.guild.id}`) || message.guild.me.displayHexColor || `#000000`
            if (!Color) return;

      
    let arr = new Array();
    let esp = message.guild.members.cache.filter(e => e.user.bot);
    esp.forEach(member => arr.push(`${member}`))
    let embed = new MessageEmbed()
      .setTitle(`${message.guild.name} bots`)
      .setDescription(`${arr.join(`\n`)}`)
      .setTimestamp()
      .setColor(`${Color || message.guild.me.displayHexColor || `#000000`}`)
    message.channel.send({ embeds: [embed] });
 
    }
}