const Discord = require(`discord.js`);
module.exports = {
    name: `msg`,
    run: async (client, interaction) => {



              const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command send = [ ${interaction.guild.id} ]`)
const allowedRole = interaction.guild.roles.cache.get(db);
const isAuthorAllowed = interaction.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && interaction.author.id !== db  && !interaction.member.permissions.has('ADMINISTRATOR')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return;
}

      
            const Args = interaction.content.split(' ');
         //   if (!interaction.member.permissions.has(`ADMINISTRATOR`)) return;
            let user = interaction.mentions.members.first() || interaction.guild.members.cache.get(Args[1])
            if(!user)return interaction.reply(`**يرجى ارفاق منشن العضو او الايدي ومن ثم الكلام .**`)
            if(user.user.bot) return await interaction.react(`❎`)
            let Message = interaction.content.split(" ").slice(2).join(' ')
            if(!Message) return await interaction.react(`❎`)
            await user.send({ content : `${Message}`});
            await interaction.react(`✅`)
        
    }
}