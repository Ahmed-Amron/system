const Discord = require("discord.js" )
const { MessageEmbed } = require("discord.js");
const {prefix} = require("../../config.js")

module.exports = {
  name: "top-invites",
  aliases: [""],
  description: "show the list of invites",
  usage: ["!top-invites"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [5],
  ownerOnly: false,
  run: async (client, message, args, config) => {

var _0x9495=["\x64\x69\x73\x63\x6F\x72\x64\x2D\x69\x6E\x76\x69\x74\x65\x72","\x67\x75\x69\x6C\x64","\x67\x65\x74\x54\x6F\x70\x49\x6E\x76\x69\x74\x65\x73","\x0A","\x6A\x6F\x69\x6E","\x5C\x60\x23","\x5C\x60\x2D\x20\x2A\x2A","\x74\x61\x67","\x75\x73\x65\x72","\x2A\x2A\x20\x68\x61\x73\x20\x5F\x5F","\x63\x6F\x75\x6E\x74","\x5F\x5F","\x6D\x61\x70","\x2A\x2A","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x23\x32\x46\x33\x31\x33\x36","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C"];var {inviteTracker}=require(_0x9495[0]);var top= await inviteTracker[_0x9495[2]](message[_0x9495[1]]);var x=top[_0x9495[12]]((_0xe5ffx3,_0xe5ffx4)=>{return `${_0x9495[5]}${_0xe5ffx4+ 1}${_0x9495[6]}${_0xe5ffx3[_0x9495[8]][_0x9495[7]]}${_0x9495[9]}${_0xe5ffx3[_0x9495[10]]}${_0x9495[11]}`})[_0x9495[4]](_0x9495[3]);const embed= new Discord.MessageEmbed()[_0x9495[16]](_0x9495[15])[_0x9495[14]](`${_0x9495[13]}${x}${_0x9495[13]}`);message[_0x9495[18]][_0x9495[17]]({embeds:[embed]})
  }
}