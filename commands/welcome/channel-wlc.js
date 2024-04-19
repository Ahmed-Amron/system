const { MessageEmbed } = require("discord.js")
const { QuickDB } = require("quick.db");
const db = new QuickDB();;
const { prefix, owner } = require("../../config.js");
module.exports = {
    name: "channel-wlc",
    description: "تحديد الشات الترحيب",
    aliases: [""],
    usage: `{prefix}channel-wlc \`[#chat , ID]\``,
    examples: `{prefix}channel-wlc`,
    
    
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
    type: "welcome",
    run: async (client, message, args) => {

      var _0x27b0=["\x66\x69\x72\x73\x74","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64","\x3E\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x4D\x65\x6E\x74\x69\x6F\x6E\x20\x74\x68\x65\x20\x63\x68\x61\x6E\x6E\x65\x6C\x20\x66\x69\x72\x73\x74\x2A\x2A","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x63\x68\x61\x6E\x6E\x65\x6C\x5F","\x69\x64","\x5F\x77\x6C\x63","\x73\x65\x74","\x74\x6F\x67\x67\x5F","","\u2705\x20\x2A\x2A\x43\x68\x61\x6E\x6E\x65\x6C\x20\x69\x73\x20\x73\x65\x74\x75\x70\x20\x61\x73\x20","\x2A\x2A"];let channel=message[_0x27b0[2]][_0x27b0[1]][_0x27b0[0]]()|| message[_0x27b0[5]][_0x27b0[1]][_0x27b0[4]][_0x27b0[3]](args[0]);if(!channel){return message[_0x27b0[8]][_0x27b0[7]](`${_0x27b0[6]}`)}; await db[_0x27b0[12]](`${_0x27b0[9]}${message[_0x27b0[5]][_0x27b0[10]]}${_0x27b0[11]}`,channel[_0x27b0[10]]); await db[_0x27b0[12]](`${_0x27b0[13]}${message[_0x27b0[5]][_0x27b0[10]]}${_0x27b0[14]}`,true);message[_0x27b0[8]][_0x27b0[7]](`${_0x27b0[15]}${channel}${_0x27b0[16]}`)
    }
}