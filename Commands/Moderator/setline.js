const dyb = require("pro.db");
const {owners } = require(`${process.cwd()}/config`);
module.exports = {
  name: "setline",
  description: "To set image room",
  usage: "!set-image <image>",
  run: async (client, message, args) => {






        const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command setline = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);
const isOwner = owners.includes(message.author.id);

if (!isAuthorAllowed && message.author.id !== db && !isOwner) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react(`❌`);
}






    
      //  if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply(`**😕 - You don't have permission**`);
    const imageUrl = args[0];
    if (!imageUrl) {
      return message.reply({content : `**يرجى ارفاق رابط الخط .**`});
    }
    
    // Validate URL
    const validUrl = require('valid-url');
    if (!validUrl.isUri(imageUrl)) {
      return message.reply('Invalid URL provided!');
    }
    
    dyb.set(`Line`,  imageUrl );
      message.channel.send({content : `✅ -**تم تعين الخط .**\n${imageUrl}`})
    .catch(err => console.log(err));
  }
};