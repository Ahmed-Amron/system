const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "user",
  aliases: ["u"],
  description: "user the account",
  usage: ["!user"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {


 var _0x8869=["\x66\x69\x72\x73\x74","\x6D\x65\x6D\x62\x65\x72\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x20","\x73\x70\x6C\x69\x74","\x63\x6F\x6E\x74\x65\x6E\x74","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64","\x6D\x65\x6D\x62\x65\x72","\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73","\x6D\x6F\x6D\x65\x6E\x74","","\x74\x61\x67","\x75\x73\x65\x72","\x61\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x4A\x6F\x69\x6E\x65\x64\x20\x44\x69\x73\x63\x6F\x72\x64\x20\x3A","\x2A\x2A\x3C\x74\x3A","\x63\x72\x65\x61\x74\x65\x64\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x66\x6C\x6F\x6F\x72","\x3A\x52\x3E\x2A\x2A","\x4A\x6F\x69\x6E\x65\x64\x20\x53\x65\x72\x76\x65\x72\x20\x3A","\x6A\x6F\x69\x6E\x65\x64\x41\x74","\x73\x65\x74\x46\x69\x65\x6C\x64\x73","\x62\x6C\x61\x63\x6B","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x72\x65\x70\x6C\x79"];let user=message[_0x8869[2]][_0x8869[1]][_0x8869[0]]()|| message[_0x8869[8]][_0x8869[1]][_0x8869[7]][_0x8869[6]](message[_0x8869[5]][_0x8869[4]](_0x8869[3])[1])|| message[_0x8869[9]];const {MessageEmbed}=require(_0x8869[10]);const moment=require(_0x8869[11]);let Embed= new MessageEmbed()[_0x8869[27]](_0x8869[26])[_0x8869[25]]({name:_0x8869[18],value:`${_0x8869[19]}${Math[_0x8869[21]](user[_0x8869[14]][_0x8869[20]]/ 1000)}${_0x8869[22]}`,inline:true},{name:_0x8869[23],value:`${_0x8869[19]}${Math[_0x8869[21]](user[_0x8869[24]]/ 1000)}${_0x8869[22]}`,inline:true})[_0x8869[17]](user[_0x8869[14]][_0x8869[15]]({dynamic:true}))[_0x8869[16]](`${_0x8869[12]}${user[_0x8869[14]][_0x8869[13]]}${_0x8869[12]}`,user[_0x8869[14]][_0x8869[15]]({dynamic:true}));message[_0x8869[28]]({embeds:[Embed],allowedMentions:[{repliedUser:false}]})
  }
}