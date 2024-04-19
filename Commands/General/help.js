const Discord = require("discord.js")
const db = require(`pro.db`)
const { MessageEmbed } = require("discord.js")
const {prefix } = require(`${process.cwd()}/config`);
const { MessageSelectMenu } = require("discord.js");
module.exports = {
    name: 'help', // هنا اسم الامر
    run : (client, message, args) => {
                          const Color = db.get(`Guild_Color = ${message.guild.id}`) || message.guild.me.displayHexColor || `#000000`
            if (!Color) return;
     


    const guild = message.guild;

    let replyembed = new Discord.MessageEmbed()
      .setColor(`${Color || message.guild.me.displayHexColor || `#000000`}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`**اوامر البوت :
يمكنك الان عرض قائمة الاوامر المناسبه لك
بادئه البوت : ${prefix}
الاوامر : 100**
[الإنتقال إلي الدعم الفنِي](https://discord.gg/7lm)`)
    .setTimestamp()
    const row = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('help')
          .setPlaceholder('عرض الاوامر')
          .addOptions([
            {
              label: 'الاوامر العامة',
              value: '1help_option',
            },
            {
              label: 'اوامر الادارة',
              value: '2help_option',
            },
            {
              label: 'اوامر الرولات',
              value: '9help_option',
            },
            {
              label: 'اوامر الحماية',
              value: '4help_option',
            },
            {
              label: 'اوامر السجلات',
              value: '5help_option',
            },
            {
              label: 'اوامر الاعدادات',
              value: '6help_option',
            },
            {
              label: 'اوامر مالك البوت',
              value: '7help_option',
            },
             {
              label: 'حذف قائمة المساعدة',
              value: '8help_option',
            },
            
          ]),

      );


    message.reply({
      embeds: [replyembed], components: [row]
    }).catch(console.error).then(message => setTimeout(() => {

      const row = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageSelectMenu()
            .setCustomId('help')
            .setPlaceholder('عرض الاوامر')
            .setDisabled(true)
            .addOptions([
             {
              label: 'الاوامر العامة',
              value: '1help_option',
            },
            {
              label: 'اوامر الادارة',
              value: '2help_option',
            },
            {
              label: 'اوامر الرولات',
              value: '9help_option',
            },
            {
              label: 'اوامر الرولات',
              value: '4help_option',
            },
            {
              label: 'اوامر الترحيب',
              value: '5help_option',
            },
            {
              label: 'اوامر الاعدادات',
              value: '6help_option',
            },
            {
              label: 'اوامر مالك البوت',
              value: '7help_option',
            },
             {
              label: 'حذف قائمة المساعدة',
              value: '8help_option',
            },

            ]),
        );
      message.edit({ embeds: [replyembed], components: [row]})

    }, 200000)).catch(console.error);


  



    }
}

