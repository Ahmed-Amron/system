const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "avatar",
  aliases: ["a"],
  description: "Displays your avatar or someone else's avatar",
  usage: ["!help"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [10],
  ownerOnly: false,
  run: async (client, message, args, config) => {


      
       
     var _0x657e=["\x52\x65\x71\x75\x65\x73\x74\x65\x64\x20\x42\x79\x20","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x61\x75\x74\x68\x6F\x72","","\x61\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x41\x76\x61\x74\x61\x72\x20\x4C\x69\x6E\x6B","\x73\x65\x74\x54\x69\x74\x6C\x65","\x64\x69\x73\x70\x6C\x61\x79\x48\x65\x78\x43\x6F\x6C\x6F\x72","\x6D\x65\x6D\x62\x65\x72","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x72\x76\x65\x72","\x70\x6E\x67","\x69\x63\x6F\x6E\x55\x52\x4C","\x67\x75\x69\x6C\x64","\x73\x65\x74\x55\x52\x4C","\x73\x65\x74\x49\x6D\x61\x67\x65","\x66\x69\x72\x73\x74","\x75\x73\x65\x72\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x63\x61\x74\x63\x68","\x66\x65\x74\x63\x68","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x6D\x65\x6E\x74\x69\x6F\x6E\x20\x61\x20\x75\x73\x65\x72\x20\x6F\x72\x20\x70\x72\x6F\x76\x69\x64\x65\x20\x61\x20\x76\x61\x6C\x69\x64\x20\x49\x44\x2A\x2A","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x41\x76\x61\x74\x61\x72\x20\x4C\x69\x6E\x6B\x20","\x74\x61\x67","\x72\x65\x70\x6C\x79"];const embed= new MessageEmbed()[_0x657e[10]](message[_0x657e[9]][_0x657e[8]])[_0x657e[7]](_0x657e[6])[_0x657e[5]]({text:`${_0x657e[0]}${message[_0x657e[2]][_0x657e[1]]}${_0x657e[3]}`,iconURL:`${_0x657e[3]}${message[_0x657e[2]][_0x657e[4]]({dynamic:true,size:1024})}${_0x657e[3]}`});if(args[0]){if(args[0]=== _0x657e[11]){embed[_0x657e[15]](message[_0x657e[14]][_0x657e[13]]({dynamic:true,size:1024,default:_0x657e[12]}));embed[_0x657e[16]](message[_0x657e[14]][_0x657e[13]]({dynamic:true,size:1024,default:_0x657e[12]}))}else {const user=message[_0x657e[19]][_0x657e[18]][_0x657e[17]]()||  await client[_0x657e[18]][_0x657e[21]](args[0])[_0x657e[20]](()=>{});if(!user){return message[_0x657e[24]][_0x657e[23]](_0x657e[22])};embed[_0x657e[7]](`${_0x657e[25]}${user[_0x657e[26]]}${_0x657e[3]}`);embed[_0x657e[15]](user[_0x657e[4]]({dynamic:true,size:1024,default:_0x657e[12]}));embed[_0x657e[16]](user[_0x657e[4]]({dynamic:true,size:1024,default:_0x657e[12]}))}}else {embed[_0x657e[15]](message[_0x657e[2]][_0x657e[4]]({dynamic:true,size:1024,default:_0x657e[12]}));embed[_0x657e[16]](message[_0x657e[2]][_0x657e[4]]({dynamic:true,size:1024,default:_0x657e[12]}))};message[_0x657e[27]]({embeds:[embed]})
  }
}