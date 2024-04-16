const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const { prefix } = require("../../config.js")

module.exports = {
  name: "unban-all",
  aliases: ["unban all"],
  description: "to untie band from everyone",
  usage: ["!unban all"],
  category: "admin",
  botPermission: ["BAN_MEMBERS"],
  authorPermission: ["BAN_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {


        var _0x48f1=["\x66\x65\x74\x63\x68","\x62\x61\x6E\x73","\x67\x75\x69\x6C\x64","\x73\x69\x7A\x65","\uD83D\uDE44\x20\x2A\x2A\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x68\x61\x73\x20\x6E\x6F\x20\x62\x61\x6E\x73\x2A\x2A","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x75\x73\x65\x72","\x75\x6E\x62\x61\x6E","\x6D\x65\x6D\x62\x65\x72\x73","\x66\x6F\x72\x45\x61\x63\x68","\u2705\x20\x2A\x2A\x44\x6F\x6E\x65\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x6C\x79\x20\x75\x6E\x62\x61\x6E\x20\x66\x72\x6F\x6D\x20\x5C\x60","\x5C\x60\x20\x6D\x65\x6D\x62\x65\x72\x73\x21\x2A\x2A","\x72\x65\x70\x6C\x79","\x64\x65\x6C\x65\x74\x65","\x74\x68\x65\x6E","\x2A\x2A\x50\x6C\x65\x73\x65\x20\x77\x61\x69\x74\x2E\x2E\x2E\x2A\x2A"];let bans= await message[_0x48f1[2]][_0x48f1[1]][_0x48f1[0]]();if(!bans[_0x48f1[3]]){return message[_0x48f1[6]][_0x48f1[5]]({content:`${_0x48f1[4]}`})};bans[_0x48f1[10]]((_0x6eaex2)=>{return message[_0x48f1[2]][_0x48f1[9]][_0x48f1[8]](_0x6eaex2[_0x48f1[7]])});message[_0x48f1[13]]({content:`${_0x48f1[16]}`})[_0x48f1[15]]((_0x6eaex3)=>{setTimeout(()=>{_0x6eaex3[_0x48f1[13]]({content:`${_0x48f1[11]}${bans[_0x48f1[3]]}${_0x48f1[12]}`});_0x6eaex3[_0x48f1[14]]()},4000)})
  }
}