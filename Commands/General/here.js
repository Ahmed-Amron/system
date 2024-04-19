module.exports = {
    name: 'here', // هنا اسم الامر
  aliases: ["هير",],
    run : (client, message, args) => {
        

         const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command here = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('MANAGE_ROLES')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react(`❌`)
}


      
    if(!message.guild || message.author.bot) return
  let command = message.content.toLowerCase().split(" ")[0];
  let userID = message.content.split(' ').slice(1).join(' ')
   const user = message.mentions.members.first() || client.users.cache.get(userID)
    let picrole = message.guild.roles.cache.find(n => n.name === 'here')
    if (!user) return message.react(`❌`)
    reason = `<@!${message.author.id}>`
    if (user.roles.cache.get(picrole.id)) {
      user.roles.remove(picrole, reason).then(() => {
        return message.react(`✅`);
      })
    } else {
      user.roles.add(picrole, reason).then(() => {
        return message.react(`✅`)
      })
    }



    }
}
