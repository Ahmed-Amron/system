module.exports = {
    name: 'moveme', // هنا اسم الامر
  aliases: ["ودني",],
    run : (client, message, args) => {




              const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command moveme = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('MOVE_MEMBERS')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react('❌');
}
      
      
  const a10rgs = message.content.split(' ');
  const command = a10rgs[0];
//    if (!message.member.permissions.has('MOVE_MEMBERS')) { return message.react('❌'); }
    const author = message.member;
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.find(member => member.id === author.id);
    if (!mentionedMember) { return message.react('❌'); }
    const authorVoiceChannel = author.voice.channel;
    const mentionedMemberVoiceChannel = mentionedMember.voice.channel;
    if (!mentionedMemberVoiceChannel || authorVoiceChannel === mentionedMemberVoiceChannel) { return message.reply('**يرجى ارفاق منشن العضو .**'); }
    author.voice.setChannel(mentionedMemberVoiceChannel);
    return message.react('✅');

 }   
}
