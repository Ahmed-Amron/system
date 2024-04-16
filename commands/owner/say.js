const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "say",
  aliases: [""],
  description: "sends a message to the target channel",
  usage: ["!say"],
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  run: async (client, message, args, config) => {

  
var _0xeac4=["\x66\x69\x72\x73\x74","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64","\x20","\x6A\x6F\x69\x6E","\x73\x6C\x69\x63\x65","\x49\x20\x43\x6F\x75\x6C\x64\x6E\x27\x74\x20\x52\x65\x70\x6C\x79\x20\x54\x6F\x20\x54\x68\x65\x20\x4D\x65\x73\x73\x61\x67\x65\x3A\x20","\x6D\x65\x73\x73\x61\x67\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x6D\x65\x6E\x74\x69\x6F\x6E\x20\x61\x20\x63\x68\x61\x6E\x6E\x65\x6C\x2A\x2A","\x72\x65\x70\x6C\x79","\x61\x74\x74\x61\x63\x68\x6D\x65\x6E\x74\x73","\x64\x65\x6C\x65\x74\x65","\x74\x68\x65\x6E","","\x70\x72\x6F\x78\x79\x55\x52\x4C","\x73\x65\x6E\x64"];let channel=message[_0xeac4[2]][_0xeac4[1]][_0xeac4[0]]()|| message[_0xeac4[5]][_0xeac4[1]][_0xeac4[4]][_0xeac4[3]](args[0]);const msg=args[_0xeac4[8]](1)[_0xeac4[7]](_0xeac4[6]);if(!channel){message[_0xeac4[14]]({content:`${_0xeac4[13]}`})[_0xeac4[12]]((_0x74fcx3)=>{console[_0xeac4[11]](`${_0xeac4[9]}`+ _0x74fcx3[_0xeac4[10]])})};if(channel){let image=message[_0xeac4[15]][_0xeac4[0]]();if(image){channel[_0xeac4[20]]({content:`${_0xeac4[18]}${msg}${_0xeac4[18]}`,files:[image[_0xeac4[19]]]})[_0xeac4[17]](()=>{message[_0xeac4[16]]()})[_0xeac4[12]]((_0x74fcx3)=>{console[_0xeac4[11]](`${_0xeac4[9]}`+ _0x74fcx3[_0xeac4[10]])})};if(!image){channel[_0xeac4[20]](`${_0xeac4[18]}${msg}${_0xeac4[18]}`)[_0xeac4[17]](()=>{message[_0xeac4[16]]()})[_0xeac4[12]]((_0x74fcx3)=>{console[_0xeac4[11]](`${_0xeac4[9]}`+ _0x74fcx3[_0xeac4[10]])})}}
  }
}