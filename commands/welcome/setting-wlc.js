const { Discord, MessageEmbed } = require("discord.js");
const { prefix } = require("../../config.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
    name: "setting",
    description: "جميع الاعدادات",
    aliases: [],
    usage: `{prefix}setting`,
    examples: `{prefix}setting`,
    
    category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
    type: "ownerShip",
    run: async (client, message, args) => {

       var _0x9548=["\x77\x6C\x63","\x74\x6F\x67\x67\x5F","\x69\x64","\x67\x75\x69\x6C\x64","","\x67\x65\x74","\x4F\x6E","\x4F\x66\x66","\x6D\x65\x73\x73\x61\x67\x65\x77\x5F","\x57\x65\x6C\x63\x6F\x6D\x65\x20\x5B\x75\x73\x65\x72\x6E\x61\x6D\x65\x5D\x2C\x20\x69\x6E\x76\x69\x74\x65\x3A\x20\x5B\x69\x6E\x76\x69\x74\x65\x72\x5D","\x63\x68\x61\x6E\x6E\x65\x6C\x5F","\x5F\x77\x6C\x63","\x4E\x6F\x6E\x65","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x57\x65\x6C\x63\x6F\x6D\x65\x20\x4D\x65\x73\x73\x61\x67\x65","\x61\x64\x64\x46\x69\x65\x6C\x64","\x57\x65\x6C\x63\x6F\x6D\x65\x20\x43\x68\x61\x6E\x6E\x65\x6C","\x20\x7C\x20\x3C\x23","\x3E","\x57\x65\x6C\x63\x6F\x6D\x65\x20\x4D\x6F\x64\x65","\x5C\x60","\x70\x6E\x67","\x69\x63\x6F\x6E\x55\x52\x4C","\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x64\x69\x73\x70\x6C\x61\x79\x48\x65\x78\x43\x6F\x6C\x6F\x72","\x6D\x65","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x53\x65\x74\x74\x69\x6E\x67\x73\x20\x77\x65\x6C\x63\x6F\x6D\x65","\x73\x65\x74\x54\x69\x74\x6C\x65","\x72\x65\x70\x6C\x79"];if(!args[0]){return};if(args[0]== _0x9548[0]){let on= await db[_0x9548[5]](`${_0x9548[1]}${message[_0x9548[3]][_0x9548[2]]}${_0x9548[4]}`);if(on=== null){on= false};if(on== true){on= _0x9548[6]};if(on== false){on= _0x9548[7]};let msg=( await db[_0x9548[5]](`${_0x9548[8]}${message[_0x9548[3]][_0x9548[2]]}${_0x9548[4]}`))|| _0x9548[9];let ch=( await db[_0x9548[5]](`${_0x9548[10]}${message[_0x9548[3]][_0x9548[2]]}${_0x9548[11]}`))|| _0x9548[12];const settings= new MessageEmbed()[_0x9548[28]](_0x9548[27])[_0x9548[26]](message[_0x9548[3]][_0x9548[25]][_0x9548[24]])[_0x9548[23]](message[_0x9548[3]][_0x9548[22]]({dynamic:true,format:_0x9548[21]}))[_0x9548[15]](_0x9548[19],`${_0x9548[20]}${on}${_0x9548[20]}`)[_0x9548[15]](_0x9548[16],`${_0x9548[4]}${ch}${_0x9548[17]}${ch}${_0x9548[18]}`)[_0x9548[15]](_0x9548[14],msg)[_0x9548[13]](); await message[_0x9548[29]]({embeds:[settings]})}
    }
}