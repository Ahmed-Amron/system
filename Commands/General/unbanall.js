const { MessageEmbed } = require(`discord.js`);
module.exports = {
    name: `unbanall`,
    run: async (client, message) => {

              const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command unbanall = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('BAN_MEMBERS')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return;
}

    //    if (!message.member.permissions.has("BAN_MEMBERS")) return;
        if (!message.guild.me.permissions.has("BAN_MEMBERS")) return;
        let bans = await message.guild.bans.fetch()
        if (!bans.size) return message.reply({ content: `**لا توجد اعضاء محظورة .**` })
        bans.forEach(ban => message.guild.members.unban(ban.user))
        message.reply({ content: `**انتظر من فضلك ...**` }).then(m => {
            setTimeout(() => {
                m.reply({ content: `> **تم بنجاح فك الحظر من \`${bans.size}\` عضو!**` })
                m.delete()
            }, 4000)
        })

    }
}

