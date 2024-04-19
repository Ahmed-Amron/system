const Discord = require("discord.js")
const ms = require('ms')
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "timeout",
  aliases: ["تايم"],
  description: "timeout a member",
  usage: ["!timeout @user"],
  run: async (client, message, args, config) => {


         const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command timeout = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('MUTE_MEMBERS')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react(`❌`);
}

    
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!args[0]) return message.reply({ content: `**يرجى ارفاق منشن العضو او الايدي .**` }).catch((err) => {
      console.log(`**لم أتمكن من الرد على الرسالة:**` + err.message)
    })

    if (!member) return message.reply({ content: `**لا يمكنني اعطاء ميوت لهاذا العضو .**` }).catch((err) => {
      console.log(`**لم أتمكن من الرد على الرسالة:**` + err.message)
    })

    if (member.id === message.author.id) return message.reply({ content: `**لا يمكنك اعطاء ميوت لنفسك .**` }).catch((err) => {
      console.log(`**لم أتمكن من الرد على الرسالة:**` + err.message)
    })

    if (message.member.roles.highest.position < member.roles.highest.position) return message.reply({ content: `:rolling_eyes: **You can't timeout ${member.user.username} have higher role than you**` }).catch((err) => {
      console.log(`**لم أتمكن من الرد على الرسالة:**` + err.message)
    })

  
    if (!args[1]) return message.reply({ content: `**يرجي تحديد وقت الميوت .**` })
    if (!args[1].endsWith('s')) {
        if (!args[1].endsWith('m')) {
          if (!args[1].endsWith('h')) {
            if (!args[1].endsWith('d')) {
              if (!args[1].endsWith('w')) {
                return message.reply({ content: `** يجب أن ينتهي الوقت بـ .** \`s / m / h / d / w\` ` })
              }
            }
          }
        
      }
    }
    member.timeout(ms(args[1]), `done by: ${message.member.nickname} , ${message.author.id}`)
      .then(() => {
        message.reply({ content: `**✅ تم إسكات ${member.user.username} من السيرفر! 🤐**` })
      })
  },
};

