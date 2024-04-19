const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "lock", // الأسم
  aliases: ["قفل",""], // امر الأحتياط
  description: "lock chat", // دسكربشن تاع الأمر
  usage: ["!lock"], // كيف تستخدمه
  category: "admin", // مثلا هو في الأدمن او في الجينرال او الأنفو
  botPermission: ["MANAGE_CHANNELS"], // صلاحيات لـ بوت
  authorPermission: ["MANAGE_CHANNELS"], // صلاحيات المستخدم
  cooldowns: [], // كم لازم يستنى ليغير الأمر
  ownerOnly: false, // ذا الامر كان للأونر او لا لو كان ل الاونر سوي true
  run: async (client, message, args, config) => {

    
        var _0x8276=["\x6E\x61\x6D\x65","\x40\x65\x76\x65\x72\x79\x6F\x6E\x65","\x66\x69\x6E\x64","\x63\x61\x63\x68\x65","\x72\x6F\x6C\x65\x73","\x67\x75\x69\x6C\x64","\x69\x20\x63\x6F\x75\x6C\x64\x6E\x27\x74\x20\x72\x65\x70\x6C\x79\x20\x74\x6F\x20\x74\x68\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x3A\x20","\x6D\x65\x73\x73\x61\x67\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x2A\x2A\x3A\x6C\x6F\x63\x6B\x3A\x20\x20","\x63\x68\x61\x6E\x6E\x65\x6C","\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x6C\x6F\x6F\x6B\x65\x64\x2E\x2A\x2A\x20","\x72\x65\x70\x6C\x79","\x74\x68\x65\x6E","\x65\x64\x69\x74","\x70\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x4F\x76\x65\x72\x77\x72\x69\x74\x65\x73"];let everyone=message[_0x8276[5]][_0x8276[4]][_0x8276[3]][_0x8276[2]]((_0xc54ax2)=>{return _0xc54ax2[_0x8276[0]]=== _0x8276[1]});message[_0x8276[11]][_0x8276[16]][_0x8276[15]](everyone,{SEND_MESSAGES:false})[_0x8276[14]](()=>{message[_0x8276[13]]({content:`${_0x8276[10]}${message[_0x8276[11]]}${_0x8276[12]}`,ephemeral:true})[_0x8276[9]]((_0xc54ax3)=>{console[_0x8276[8]](`${_0x8276[6]}`+ _0xc54ax3[_0x8276[7]])})})

           }
}