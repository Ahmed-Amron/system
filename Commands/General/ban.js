const { MessageEmbed } = require(`discord.js`);
module.exports = {
  name: `ban`,
  aliases: [`باند`, `برا`, `حظر`],
  run: async (client, message) => {


         const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command ban = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('BAN_MEMBERS')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react(`❌`);
}

   let user;
 let reason = message.content.split(' ').slice(2).join(" ") || 'No reason provided';;
if(message.mentions.users.size > 0){
  user = message.mentions.members.first()
} else {
  const userId = message.content.split(' ')[1]
  if(userId){
    user = await client.users.fetch(userId).catch(() => null)
  }
if(!user) {
    return message.reply(`**يرجى ارفاق منشن العضو او الايدي .**`);
  }
}
     if (user.id === message.author.id) return message.react(`❌`);
     if (user.id === client.user.id) return message.react(`❌`)
    if (!user.bannable) return message.reply(`**لا استطيع حظر العضو .**`);
    message.guild.members.ban(user, {reason: `By ${message.author}, ${reason}`}).then(() =>  message.react(`✅`))
   

  }
}