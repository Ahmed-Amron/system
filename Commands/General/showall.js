module.exports = {
    name: 'showall', // هنا اسم الامر
    run : (client, message, args) => {



              const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command showall = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('MANAGE_CHANNELS')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react('❌');
}

  
    if(message.author.bot || !message.guild) return;
  //   if(!message.member.permissions.has('MANAGE_CHANNELS')) 
  // return message.react('❌');
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.permissionOverwrites.create(everyone, {VIEW_CHANNEL: true}).then(() => {
      });
    })
    message.react('✅')
    

    }
}
