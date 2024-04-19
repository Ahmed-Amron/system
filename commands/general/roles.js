const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "roles",
  aliases: ["info"],
  description: "'Get a list of server roles and member counts",
  usage: ["!roles"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {

  var _0xf2d6=["\x60\x60\x60\x0A","","\x6E\x61\x6D\x65","\x6D\x61\x70","\x63\x61\x63\x68\x65","\x72\x6F\x6C\x65\x73","\x67\x75\x69\x6C\x64","\x6C\x65\x6E\x67\x74\x68","\x6D\x61\x78","\x72\x65\x64\x75\x63\x65","\x72\x65\x70\x65\x61\x74","\x20","\x20\x3A\x20","\x73\x69\x7A\x65","\x6D\x65\x6D\x62\x65\x72\x73","\x20\x6D\x65\x6D\x62\x65\x72\x73\x5C\x6E","\x66\x6F\x72\x45\x61\x63\x68","\x60\x60\x60","\x72\x65\x70\x6C\x79"];let roles=_0xf2d6[0];let names=message[_0xf2d6[6]][_0xf2d6[5]][_0xf2d6[4]][_0xf2d6[3]]((_0x7abax3)=>{return `${_0xf2d6[1]}${_0x7abax3[_0xf2d6[2]]}${_0xf2d6[1]}`});let longest=names[_0xf2d6[9]]((_0x7abax5,_0x7abax6)=>{return Math[_0xf2d6[8]](_0x7abax5,_0x7abax6[_0xf2d6[7]])},0);message[_0xf2d6[6]][_0xf2d6[5]][_0xf2d6[4]][_0xf2d6[16]]((_0x7abax3)=>{roles+= `${_0xf2d6[1]}${_0x7abax3[_0xf2d6[2]]}${_0xf2d6[1]}${_0xf2d6[11][_0xf2d6[10]](longest- _0x7abax3[_0xf2d6[2]][_0xf2d6[7]])}${_0xf2d6[12]}${_0x7abax3[_0xf2d6[14]][_0xf2d6[13]]}${_0xf2d6[15]}`});roles+= _0xf2d6[17];message[_0xf2d6[18]]({content:roles})
  }
}