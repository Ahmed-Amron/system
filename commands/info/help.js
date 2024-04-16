const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
  name: "help",
  aliases: [""],
  description: "help bot",
  usage: ["!help"],
  category: "info",
    botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (safaa, message, args, config) => {
const db2 = require("pro.db")

	const db3 =  db2.get("prefix")
const prefix = `${config.prefix}` && db3

    let button = new Discord.MessageActionRow()
let Helefl = new Discord.MessageEmbed()
.setColor('AQUA')
.setTitle(`it's order me.`)

    .setDescription(  `> **admin :**\n \`${prefix}ban\` - حظر العضو من السيرفر. \n \`${prefix}unban\` - فك حظر العضو من السيرفر. \n \`${prefix}unban-all\` -  فك حظر جميع الاعضاء من السيرفر. \n \`${prefix}kick\` - لطرد العضو من السيرفر. \n \`${prefix}lock\` - لاغلاق الشات. \n \`${prefix}unlock\` - لفتح الشات. \n \`${prefix}role\` - لاعطاء عضو رتبه او ازالتها. \n \`${prefix}clear\` - لمسح رسائل الشات. \n \`${prefix}listbans\` - لاظهار جميع الاعضاء المحظورين. \n \`${prefix}hide\` - لاخفاء الشات. \n \`${prefix}show\` - لاظهار الشات. \n \`${prefix}mute\` - لاسكات العضو في الشات. \n \`${prefix}unmute\` -  لفك اسكات العضو في الشات. \n \`${prefix}timeout\` - لاعطاء تايم اوت للعضو. \n \`${prefix}hide-all\` - لاخفاء جميع الرومات. \n \`${prefix}vkick\` -  طرد عضو من الروم الصوتي. \n \`${prefix}role-all\` -  اعطاء رول للجميع. \n \`${prefix}setnick\` -  لتغيير اسم احد فالسيرفر. \n \`${prefix}move\` -  لسحب الاعضاء الى الروم. \n \`${prefix}show-all\` لاظهار جميع الرومات. \n \`${prefix}rooms\` - لاظهار الاعضاء يلي برومات صوتيه. \n \`${prefix}vmute\` - لاعطاء ميوت صوتي. \n \`${prefix}vunmute\` - لفك الميوت الصوتي. \n \`${prefix}check\` - لاظهار الموجودين بالرتبة. \n \`${prefix}role-info\` - لاظهار جميع معلومات الرتبة. \n\n > **general :** \n \`${prefix}avatar\` - لاظهار افتار العضو. \n \`${prefix}avatar server\` - لاظهار افتار السيرفر. \n \`${prefix}banner\` - لاظهار بنر العضو. \n \`${prefix}roles\` - لاظهار جميع رولات السيرفر. \n \`${prefix}server\` - لاظهار معلومات السيرفر. \n \`${prefix}user\` - لاظهار معلومات المستخدم. \n \`${prefix}color\` - لاختيار لون. \n \`${prefix}colors\` - لاظهار قائمة الالوان. \n \`${prefix}invites\` - لاظهار عدد الدعوات. \n \`${prefix}top-invites\` - لاظهار قائمة عدد الدعوات. \n \`${prefix}link\` - لارسال رابط السيرفر. \n\n > **owner :** \n \`${prefix}setavatar\` - لتغيير صورة البوت. \n \`${prefix}setprefix\` - لتغيير بريفكس البوت. \n \`${prefix}setname\` - لتغيير اسم البوت. \n \`${prefix}setgame\` - لتغيير حالة البوت. \n \`${prefix}embed\` - لارسال رسالة على شكل امبد. \n \`${prefix}say\` - لارسال رسالة الى شات معين. \n \`${prefix}image\` - لارسال صوره في الشات. \n\n > **protection :** \n \`${prefix}anti-bot\` - لتفعيل والغاء حمايه البوتات. \n \`${prefix}anti-link\` - لتفعيل والغاء حماية الروابط.\n \`${prefix}anti-word\` - لتفعيل والغاء حماية السب فالشات. \n \`${prefix}show-bot\` - لاظهار بوتات السيرفر. \n\n > **welcome :** \n \`${prefix}channel-wlc\` - تحديد شات الترحيب.\n \`${prefix}image-wlc\` - تحديد صورة الترحيب.\n \`${prefix}message-wlc\` - تحديد رسالة الترحيب.\n \`${prefix}toggle-wlc\` - تشغيل وايقاف الترحيب.\n \`${prefix}setting wlc\` - اظهار جميع اعدادات الترحيب.\n \`${prefix}test\` - لتجربه احداثيات الترحيب. \n\n > **music :** \n \`${prefix}play\` - لتشغيل الاغاني. \n \`${prefix}repeat\` - لتكرار نفس الاغنية. \n \`${prefix}pause\` - لتوقيف الاغنية بشكل مؤقت. \n \`${prefix}resume\` - لاستئناف الاغنيه المتوقفة. \n \`${prefix}queue\` - عرض قائمة الاغاني لي قيد التشغيل. \n \`${prefix}nowplaying\` - لعرض الاغنيه لي شغالة حاليا. \n \`${prefix}volume\` - للتحكم في زيادة او نقصان الصوت. \n \`${prefix}skip\` - لتخطي الاغنية الحالية. \n \`${prefix}stop\` - لايقاف الاغنيه الحالية / مسح قائمة الاغاني بالكامل.
    
    `)
  
 // .addField(`\`${prefix}setname\` `, `change name bot.`,true)
    //.addField(`\`${prefix}setavatar\``, `change avatar bot`,true)
   //   .addField(`\`${prefix}say\``, `sends a message to the target channel`,true)
      message.author.send({embeds:[Helefl]}).then(eem =>{
        message.react("✅").catch(err =>{
          message.react('❌')
        })
      })
      }
    }