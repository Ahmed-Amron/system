const { MessageActionRow, MessageSelectMenu } = require("discord.js");
//const Data = require(`pro.db`)
const ms = require(`ms`)
module.exports = {
  name: "mute",
  aliases: ["mute", "اسكات", "اسكت"],
  description: "A simple ping command.",
  category: "Informations",
  example: ["ping"],
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   */
  run: async (client, Message) => {

    const Pro = require(`pro.db`)
    const Data = require(`pro.db`)
             const db = Pro.get(`Allow - Command mute = [ ${Message.guild.id} ]`)
   const allowedRole = Message.guild.roles.cache.get(db);
     const isAuthorAllowed = Message.member.roles.cache.has(allowedRole?.id);

     if (!isAuthorAllowed && Message.author.id !== db  && !Message.member.permissions.has('MANAGE_CHANNELS')) {
        // إجراءات للتصرف عندما لا يتحقق الشرط
       return Message.react('❌');
     }


    // if (!Message.member.permissions.has("MUTE_MEMBERS")) return
    const MemberID = Message.mentions.members.first() || Message.guild.members.cache.get(Message.content.split(` `)[1])
    if (!MemberID) return Message.reply(`**يرجى ارفاق منشن العضو او الايدي .**`)
    const Menu = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId(`Mute`).setPlaceholder(`الاسباب`).setOptions({ label: `فذف`, description: `1h`, value: `kzf` }, { label: `ازعاج`, description: `10m`, value: `az3ag` }, { label: `سب`, description: `30m`, value: `sb` }, { label: `تسبب بمشاكل`, description: `15m`, value: `m4akl` }, { label: `الغاء`, value: `el8a` },))
    Message.reply({ content: `يرجي تحديد سبب العقوبه. \n** * ${MemberID}**`, components: [Menu] })
    client.on(`interactionCreate`, async function (interaction) {

      if (!interaction.isSelectMenu()) return;
      if (interaction.customId === `Mute`) {
        if (interaction.values[0] === `kzf`) {
          if (MemberID.id === Message.member.id) return Message.react('❌')
          if (Message.member.roles.highest.position < MemberID.roles.highest.position) return Message.react(':x:')
          let muteRole = Message.guild.roles.cache.find((role) => role.name == "Muted");
          if (!muteRole) {
            Message.guild.roles.create({
              name: "Muted",
            }).then((createRole) => {
              Message.guild.channels.cache.filter((c) => c.type == "GUILD_TEXT").forEach(c => {
                c.permissionOverwrites.edit(createRole, { SEND_MESSAGES: false, ADD_REACTIONS: false })
              })
              Message.react('❌')
            })
          } else {
            await  Message.react('✅')
            await  MemberID.roles.add(muteRole);
            Data.set(`Muted_Member_${MemberID.id}`, 'True'), ms(`1h`)
            
           await interaction.message.delete()
          }
        } else if (interaction.values[0] === `az3ag`) {
          if (MemberID.id === Message.member.id) return Message.react('❌')
          if (Message.member.roles.highest.position < MemberID.roles.highest.position) return Message.react(':x:')
          let muteRole = Message.guild.roles.cache.find((role) => role.name == "Muted");
          if (!muteRole) {
            Message.guild.roles.create({
              name: "Muted",
            }).then((createRole) => {
              Message.guild.channels.cache.filter((c) => c.type == "GUILD_TEXT").forEach(c => {
                c.permissionOverwrites.edit(createRole, { SEND_MESSAGES: false, ADD_REACTIONS: false })
              })
              Message.react('❌')
            })
          } else {
           await Message.react('✅')
           await MemberID.roles.add(muteRole);
            Data.set(`Muted_Member_${MemberID.id}`, 'True'), ms(`10m`)
          await interaction.message.delete()
          }
        } else if (interaction.values[0] === `sb`) {
          if (MemberID.id === Message.member.id) return Message.react('❌')
          if (Message.member.roles.highest.position < MemberID.roles.highest.position) return Message.react(':x:')
          let muteRole = Message.guild.roles.cache.find((role) => role.name == "Muted");
          if (!muteRole) {
            Message.guild.roles.create({
              name: "Muted",
            }).then((createRole) => {
              Message.guild.channels.cache.filter((c) => c.type == "GUILD_TEXT").forEach(c => {
                c.permissionOverwrites.edit(createRole, { SEND_MESSAGES: false, ADD_REACTIONS: false })
              })
              Message.react('❌')
            })
          } else {
            await Message.react(`✅`)
            await MemberID.roles.add(muteRole);
            Data.set(`Muted_Member_${MemberID.id}`, 'True'), ms(`30m`)
            
           await interaction.message.delete()
          }
        } else if (interaction.values[0] === `m4akl`) {
          if (MemberID.id === Message.member.id) return Message.react('❌')
          if (Message.member.roles.highest.position < MemberID.roles.highest.position) return Message.react(':x:')
          let muteRole = Message.guild.roles.cache.find((role) => role.name == "Muted");
          if (!muteRole) {
            Message.guild.roles.create({
              name: "Muted",
            }).then((createRole) => {
              Message.guild.channels.cache.filter((c) => c.type == "GUILD_TEXT").forEach(c => {
                c.permissionOverwrites.edit(createRole, { SEND_MESSAGES: false, ADD_REACTIONS: false })
              })
              Message.react('❌')
            })
          } else {
            await Message.react('✅')
            await MemberID.roles.add(muteRole);
            Data.set(`Muted_Member_${MemberID.id}`, 'True'), ms(`30m`)
            
           await interaction.message.delete()
          }
        } else if (interaction.values[0] === `el8a`) {
          
         await interaction.message.delete()
        }
      }
    })
  }
}
