module.exports = {
    name: 'say', // هنا اسم الامر
    run : (client, message, args) => {
        



              const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command say = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('ADMINISTRATOR')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
     return message.react('❌');
}
      

      
  if (message.author.bot) return;
  if (!message.channel.guild) return;
   // if (!message.member.permissions.has("ADMINISTRATOR")) {
  //    return message.reply("** 😕 You don't have permissions **");
//    }
    if (!message.guild.me.permissions.has('ADMINISTRATOR')) {
      return message.reply(`**لا استطيع إرسال الرساله .**`);
    } 
    let aergs = message.content.split(' ').slice(2).join(' ')
    let argss = message.content.split(' ')
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(argss[1])
    let attach = message.attachments.first()
    if (!channel) return message.reply('**يرجى ارفاق منشن الشات او الايدي .**');
    if (!aergs) return message.reply('**يرجي ارسال الرساله .**');
    message.delete()
    if (!attach) {
      channel.send({ content: `${aergs}` });
    } else {
      channel.send({ content: `${aergs}`, files: [attach] });
    }

    }
}