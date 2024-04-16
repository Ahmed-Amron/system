const { prefix, owner } = require("../../config.js");
const { MessageEmbed } = require("discord.js")
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
    name: "show-bot",
    description: "اظهار بوتات السيرفر",
  aliases:["bots"],
   usage: `{prefix}bots`,
  examples:`{prefix}bots`,
   type: "protection",
  ownerOnly: true ,
    run: async (client, message) => {
    var _0x6da5=["\x61\x64\x64\x5F","\x69\x64","\x61\x75\x74\x68\x6F\x72","\x5F\x75\x73\x65\x72\x73","\x67\x65\x74","\x62\x6F\x74","\x75\x73\x65\x72","\x3C\x40","\x3E","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x63\x61\x63\x68\x65","\x6D\x65\x6D\x62\x65\x72\x73","\x67\x75\x69\x6C\x64","","\x20\x2C\x20","\x6A\x6F\x69\x6E","\x72\x65\x70\x6C\x79"];let check= await db[_0x6da5[4]](`${_0x6da5[0]}${message[_0x6da5[2]][_0x6da5[1]]}${_0x6da5[3]}`);var list_all=[];message[_0x6da5[13]][_0x6da5[12]][_0x6da5[11]][_0x6da5[10]]((_0x575cx3)=>{if(!_0x575cx3[_0x6da5[6]][_0x6da5[5]]){return};list_all[_0x6da5[9]](`${_0x6da5[7]}${_0x575cx3[_0x6da5[6]][_0x6da5[1]]}${_0x6da5[8]}`)});message[_0x6da5[17]]({content:`${_0x6da5[14]}${list_all[_0x6da5[16]](_0x6da5[15])}${_0x6da5[14]}`,allowedMentions:{repliedUser:false,parse:[]}})
    }
}