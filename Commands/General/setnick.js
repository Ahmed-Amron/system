module.exports = {
    name: 'setnick', // هنا اسم الامر
  aliases: ["لقب","na"],
    run : (client, message, args) => {


              const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command unbanall = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('MANAGE_NICKNAMES')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react('❌')
}


      
    const member = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]);
    const name = message.content.split(" ").slice(2).join(" ")

 // if (!message.member.permissions.has("MANAGE_NICKNAMES")) {
    //  return message.react('❌')
  //  }
    if (!member) return message.react('❌')
    if (!name) return message.react('❌')

    member.setNickname(name).then(() => {
      message.react('✅')
    }).catch(() => { message.react('❌') })

    }
}
