const {owners } = require(`${process.cwd()}/config`);
module.exports = {
    name: 'setavatar', // هنا اسم الامر
    run : (client, message, args) => {
        
     

        const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command setavatar = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);
const isOwner = owners.includes(message.author.id);

if (!isAuthorAllowed && message.author.id !== db && !isOwner) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react(`❌`);
}

      
  let a6rgs = message.content.split(" ");
   //   if (!owners.includes(message.author.id)) return;
  let avatar = a6rgs.slice(1).join(" ");
 {
  if (!avatar)
  return message.reply(
  `⛔️ **يرجى ارفاق الصوره او الرابط .**`
  );
  client.user.setAvatar(`${avatar}`);
   message.react(`✅`)
  }
      
    }
}
