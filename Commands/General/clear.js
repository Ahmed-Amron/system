module.exports = {
    name: 'clear', // هنا اسم الامر
  aliases: ["مسح",],
    run : (client, message, args) => {

               const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command clear = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('MANAGE_MASSAGE')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react(`❌`);
}

      
    message.delete({ timeout: 0 })
    if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
    if (!message.guild.me.permissions.has('MANAGE_MASSAGE')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
    let a12rgs = message.content.split(" ").slice(1)
    let messagecount = parseInt(a12rgs);
    if (a12rgs > 100) return message.channel.send({
      content: `\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``}).then(messages => messages.delete(5000))
    if (!messagecount) messagecount = '100';
    message.channel.messages.fetch({ limit: 100 }).then(e => {
      message.channel.send('Deleting messages.').then(function(e) {
        setTimeout(function() {
          message.channel.bulkDelete(messagecount).then(msgs => {
            let msgsize = msgs.size
            message.channel.send({
              content: `\`\`\`js
${msgsize} messages cleared
\`\`\``}).then(messages => {
                setTimeout(() => {
                  messages.delete()
                }, 4000)
              })
          }).catch(err => 0)
        }, 600)
      })
    })

 }   
}
