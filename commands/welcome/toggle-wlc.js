const { MessageEmbed } = require("discord.js")
const { QuickDB } = require("quick.db");
const db = new QuickDB();;
const { prefix, owner } = require("../../config.js");
module.exports = {
  name: "toggle-wlc",
  description: "تشغيل وايقاف الترحيب",
  aliases: ["tog"],
  usage: `{prefix}toggle`,
  examples: `{prefix}toggle`,
  
category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  type: "welcome",
  run: async (client, message, args) => {

    
    var _0xef37=["\x74\x6F\x67\x67\x5F","\x69\x64","\x67\x75\x69\x6C\x64","","\x67\x65\x74","\x3E\x20\x57\x65\x6C\x63\x6F\x6D\x65\x20\x4D\x6F\x6F\x64\x20\x3A\x20","\x60\x43\x6C\x6F\x73\x65\x64\x60","\x60\x41\x63\x74\x69\x76\x61\x74\x65\x64\x60","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x73\x65\x74"];let on= await db[_0xef37[4]](`${_0xef37[0]}${message[_0xef37[2]][_0xef37[1]]}${_0xef37[3]}`);message[_0xef37[9]][_0xef37[8]](`${_0xef37[5]}${on?_0xef37[6]:_0xef37[7]}${_0xef37[3]}`); await db[_0xef37[10]](`${_0xef37[0]}${message[_0xef37[2]][_0xef37[1]]}${_0xef37[3]}`,on?false:true)
  }
}