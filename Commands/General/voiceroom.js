const fs = require("fs")
const moment = require("moment");
const ms = 'ms';
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "rooms",
  description: "اظهار الاعضاء يلي بروم الصوتي",
run: async (client, message,args) => {

  
         const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command rooms = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('BAN_MEMBERS')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react(`❌`);
}
   


var Rbot = await message.guild.members.cache.filter(c => c.user.bot && c.voice.channel);
var Ruser = await message.guild.members.cache.filter(c => !c.user.bot && c.voice.channel);

var Msg = "";
if (Ruser && Ruser.size > 0) {
  Msg += `${Ruser.map(a => a).join(",")}`
}

if(Rbot && Rbot.size > 0){
  Msg += `\n${Rbot.map(a => a).join(",\n")}`
}
if(Msg.length > 0){

message.channel.send({content: `${Msg}`})


}else{
message.reply(`** لا يوجد اعضاء بالرومات الصوتيه .**`);
}
}
}