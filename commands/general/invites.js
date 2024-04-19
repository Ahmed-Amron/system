const Discord = require("discord.js" )
const { MessageEmbed } = require("discord.js");
const {prefix} = require("../../config.js")

module.exports = {
  name: "invites",
  aliases: [""],
  description: "show the list of invites",
  usage: ["!invites"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [5],
  ownerOnly: false,
  run: async (client, message, args, config) => {
// let user = message.mentions.users.first() || message.author;
   
 var _0xe888=["\x66\x69\x72\x73\x74","\x6D\x65\x6D\x62\x65\x72\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x20","\x73\x70\x6C\x69\x74","\x63\x6F\x6E\x74\x65\x6E\x74","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64","\x6D\x65\x6D\x62\x65\x72","\x64\x69\x73\x63\x6F\x72\x64\x2D\x69\x6E\x76\x69\x74\x65\x72","\x67\x65\x74\x4D\x65\x6D\x62\x65\x72\x49\x6E\x76\x69\x74\x65\x73","\x2A\x2A","\x20\x68\x61\x73\x20","\x63\x6F\x75\x6E\x74","\x20\x69\x6E\x76\x69\x74\x65\x28\x73\x29\x2E\x2A\x2A","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x23\x32\x46\x33\x31\x33\x36","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C"];let user=message[_0xe888[2]][_0xe888[1]][_0xe888[0]]()|| message[_0xe888[8]][_0xe888[1]][_0xe888[7]][_0xe888[6]](message[_0xe888[5]][_0xe888[4]](_0xe888[3])[1])|| message[_0xe888[9]];var {inviteTracker}=require(_0xe888[10]);var invite= await inviteTracker[_0xe888[11]](user);const embed= new Discord.MessageEmbed()[_0xe888[18]](_0xe888[17])[_0xe888[16]](`${_0xe888[12]}${user}${_0xe888[13]}${invite[_0xe888[14]]}${_0xe888[15]}`);message[_0xe888[20]][_0xe888[19]]({embeds:[embed]})
  }
}