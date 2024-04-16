const { MessageEmbed } = require("discord.js")
const { QuickDB } = require("quick.db");
const db = new QuickDB();;
const { prefix, owner } = require("../../config.js");
module.exports = {
  name: "image-wlc",
  description: "تحديد صوره الترحيب",
  aliases: [""],
  usage: `{prefix}image-wlc \`[image]\``,
  examples: `{prefix}image-wlc`,
  
category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  type: "welcome",
  run: async (client, message, args) => {

    var _0xcfb6=["\x61\x64\x64\x5F","\x69\x64","\x61\x75\x74\x68\x6F\x72","\x5F\x75\x73\x65\x72\x73","\x67\x65\x74","\x52\x45\x44","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\u274C\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x50\x72\x6F\x76\x69\x64\x65\x20\x4D\x65\x20\x61\x64\x64\x20\x4F\x72\x20\x64\x65\x6C\x65\x74\x65\x2A\x2A","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x61\x64\x64","\x66\x69\x72\x73\x74","\x61\x74\x74\x61\x63\x68\x6D\x65\x6E\x74\x73","\x75\x72\x6C","\x41\x64\x64\x20\x69\x6D\x61\x67\x65\x20\x77\x65\x6C\x63\x6F\x6D\x65","\x69\x6D\x67\x5F","\x67\x75\x69\x6C\x64","\x5F\x77\x6C\x63","\x73\x65\x74","\x44\x6F\x6E\x65\x20\x61\x64\x64\x20\x69\x6D\x61\x67\x65\x20\x77\x65\x6C\x63\x6F\x6D\x65","\x64\x65\x6C\x65\x74\x65","\x44\x6F\x6E\x65\x20\x64\x65\x6C\x65\x74\x65\x20\x69\x6D\x61\x67\x65\x20\x77\x65\x6C\x63\x6F\x6D\x65"];let check= await db[_0xcfb6[4]](`${_0xcfb6[0]}${message[_0xcfb6[2]][_0xcfb6[1]]}${_0xcfb6[3]}`);let dogeguild=args[0];if(!dogeguild){return message[_0xcfb6[10]][_0xcfb6[9]]({embeds:[ new MessageEmbed()[_0xcfb6[8]](`${_0xcfb6[7]}`)[_0xcfb6[6]](_0xcfb6[5])]})};if(dogeguild== _0xcfb6[11]){const img=message[_0xcfb6[13]][_0xcfb6[12]]()?message[_0xcfb6[13]][_0xcfb6[12]]()[_0xcfb6[14]]:args[1];if(!img){return message[_0xcfb6[10]][_0xcfb6[9]](_0xcfb6[15])}; await db[_0xcfb6[19]](`${_0xcfb6[16]}${message[_0xcfb6[17]][_0xcfb6[1]]}${_0xcfb6[18]}`,img);return message[_0xcfb6[10]][_0xcfb6[9]](`${_0xcfb6[20]}`)}else {if(dogeguild== _0xcfb6[21]){ await db[_0xcfb6[21]](`${_0xcfb6[16]}${message[_0xcfb6[17]][_0xcfb6[1]]}${_0xcfb6[18]}`);return message[_0xcfb6[10]][_0xcfb6[9]](`${_0xcfb6[22]}`)}}
  }
}