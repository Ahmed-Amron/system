const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express App')
});

app.listen(3000, () => {
  console.log('Server Started');
});

process.on("uncaughtException" , error => {
return;
})

process.on("unhandledRejection" , error => {
return;
})

process.on("rejectionHandled", error => {
return;
});

require('events').EventEmitter.defaultMaxListeners = 9999999; // احذر لا تلعب في الكود ده

const Discord = require("discord.js");
const axios = require("axios");
const figlet = require ("figlet");
const moment = require("moment");
const probot = require("probot-tax");
const ms = require('ms');
const db = require('quick.db');
const DailyMs = require('parse-ms');
const client = new Discord.Client ({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});
  
// ==========================================================================

// تعديل مهم
const prefix = ""; // حط البريفيكس اللي انت عايزه

const owner = ["","","","","",]; // اي دي الاونر

// تعديل مهم التقديم
let channel2 = '' // الروم الي راح يروح لها الرفض والقبول
let roleprem = '' // ايدي الرتبة الي تقدر تسعمل امر الرفض والقبول
let roleaccept = '' // الرتبة الي راح ياخدها الشخص اول ما ينقبل
let applyroom = '' // ايدي الروم الي هيروح فيها التقديمكات

// ==========================================================================

// تعديل مهم
// Code Ready
client.on('ready', () => {
console.log(`[Logged in as] ${client.user.tag}`);
console.log(`[ID Bot] ${client.user.id}`);
console.log(`[Guilds Bot] ${client.guilds.cache.size}`);
client.user.setActivity(`System Premium`, { type: 'PLAYING', url: `https://twitch.tv/#` }) // حط الحاله اللي انت عايز
client.user.setStatus("online"); // هنا لو عايز تغير تعيين الحاله مثال
});

// ==========================================================================
// PLAYING   1
// LISTENING 2
// WATCHING  3
// COMPETING 4
// ==========================================================================
// online    1
// idle      2
// dnd       3
// ==========================================================================

// Code Help
client.on('messageCreate', async message => {
        if (message.content.startsWith(prefix + 'help')) {
                const page = new Discord.MessageEmbed()
                        .setAuthor({name: message.author.tag,iconURL: 
                         message.author.avatarURL({dynamic:true})})
                        .setTimestamp()
                        .setColor(`RANDOM`)
                        .setTitle(`${client.user.username}`)
                        .setFooter({ text: `Requested By ${message.author.tag}` , iconURL:
                        message.author.displayAvatarURL({dynamic:true})})
                        .setThumbnail(client.user.displayAvatarURL()).setDescription(`
🏠丨**This Message**
👑丨**Owner Commands**
💰丨**Credits Commands**
🌎丨**General Commands**
📝丨**Apply Commands**
👮丨**Admin Commands**
⚙️丨**Protection Commands**
			`);
                const page1 = new Discord.MessageEmbed()
                        .setAuthor({name: message.author.tag,iconURL: 
                         message.author.avatarURL({dynamic:true})})
                        .setTimestamp()
                        .setColor(`RANDOM`)
                        .setTitle(`${client.user.username}`)
                        .setFooter({ text: `Requested By ${message.author.tag}` , iconURL:
                        message.author.displayAvatarURL({dynamic:true})})
                        .setThumbnail(client.user.displayAvatarURL()).setDescription(`
 **__Owner__**
1 ${prefix}reaction-roles \`رياكشن رول\`
2 ${prefix}dmuser \`بيبعث رساله لاحد في الخاص\`
3 ${prefix}spin \`عجله حظ\`
1/6
     `);

                const page2 = new Discord.MessageEmbed()
                        .setAuthor({name: message.author.tag,iconURL: 
                         message.author.avatarURL({dynamic:true})})
                        .setTimestamp()
                        .setColor(`RANDOM`)
                        .setTitle(`${client.user.username}`)
                        .setFooter({ text: `Requested By ${message.author.tag}` , iconURL:
                        message.author.displayAvatarURL({dynamic:true})})
                        .setThumbnail(client.user.displayAvatarURL()).setDescription(`
 **__Credits__**
1 ${prefix}credits \`تشوف الكريدت بتاعتك او بتاعه احد\`
2 ${prefix}pay \`تحويل لحد كريدت\`
3 ${prefix}daily \`الحصول على راتبك اليومي\`
4 ${prefix}remove-credits \`تسحب من احد كريدت\`
5 ${prefix}add-credits \`تضيف من احد كريدت\`
2/6
			`);
                const page3 = new Discord.MessageEmbed()
                        .setAuthor({name: message.author.tag,iconURL: 
                         message.author.avatarURL({dynamic:true})})
                        .setTimestamp()
                        .setColor(`RANDOM`)
                        .setTitle(`${client.user.username}`)
                        .setFooter({ text: `Requested By ${message.author.tag}` , iconURL:
                         message.author.displayAvatarURL({dynamic:true})})
                        .setThumbnail(client.user.displayAvatarURL()).setDescription(`
 **__General__**
1 ${prefix}avatar \`يجيب لك الافاتار بتاعك\`
2 ${prefix}avatar server \`يجيب افاتار السيرفر بس من دون تحميل\`
3 ${prefix}user \`معلومات عنك انت\`
4 ${prefix}banner \`يجيب لك بنر احد\`
5 ${prefix}top-credits \`يخليك تشوف توب 10 على الكريدت\`
6 ${prefix}tax \`يحسب لك ضريبه بروبوت\`
7 ${prefix}ping \`يوريك بنج البوت\`
8 ${prefix}invite \`يجيب لك انفايت للبوت بتاعك\`
9 ${prefix}fedback \`تقييم شخص\`
10 ${prefix}developer \`يوريك معلومات عن مطور البوت\`
11 ${prefix}info-emoji \`معلومات عن الايموجي\`
12 ${prefix}uptime \`يوريك البوت شغال من امتى\`
13 ${prefix}tag \`يخلي لك شكل الحروف حلوه\`
14 ${prefix}channel-info \`معلومات عن الروم\`
15 ${prefix}vote \`يعمل لك تصويت\`
3/6
			`);

                const page4 = new Discord.MessageEmbed()
                        .setAuthor({name: message.author.tag,iconURL: 
                         message.author.avatarURL({dynamic:true})})
                        .setTimestamp()
                        .setColor(`RANDOM`)
                        .setTitle(`${client.user.username}`)
                        .setFooter({ text: `Requested By ${message.author.tag}` , iconURL:
                         message.author.displayAvatarURL({dynamic:true})})
                        .setThumbnail(client.user.displayAvatarURL()).setDescription(`
 **__Apply__**
1 ${prefix}apply \`للتقديم\`
2 ${prefix}accept \`لقبول شخص\`
3 ${prefix}unaccept \`لرفض شخص\`
4 ${prefix}system-apply-on \`لفتحه التقديم\`
5 ${prefix}system-apply-off \`لقفل التقديم\`
4/6
			`);

                const page5 = new Discord.MessageEmbed()
                        .setAuthor({name: message.author.tag,iconURL: 
                         message.author.avatarURL({dynamic:true})})
                        .setTimestamp()
                        .setColor(`RANDOM`)
                        .setTitle(`${client.user.username}`)
                        .setFooter({ text: `Requested By ${message.author.tag}` , iconURL:
                         message.author.displayAvatarURL({dynamic:true})})
                        .setThumbnail(client.user.displayAvatarURL()).setDescription(`
 **__Admin__**
1 ${prefix}say \`بيخلي البوت يكتب\`
2 ${prefix}addemoji \`اضافه ايموجي للسيرفر\`
3 ${prefix}ban \`يدي بان\`
4 ${prefix}unban \`يفك البان\`
5 ${prefix}all-unban \`إلغاء حظر الكل\`
6 ${prefix}kick \`يعطي طرد\`
7 ${prefix}mute \`يعطي ميوت\`
8 ${prefix}unmute \`يفك الميوت\`
9 ${prefix}clear \`يمسح رسائل\`
10 ${prefix}hide \`يخلي الروم خاص\`
11 ${prefix}show \`يخلي الروم يشوفها الجميع\`
12 ${prefix}lock \`قفل الروم او فتح الروم\`
13 ${prefix}timeout \`يعطي تايم اوت\`
14 ${prefix}role \`يدي احد رتبه\`
15 ${prefix}role removed \`ازاله رتبه من احد\`
16 ${prefix}hide-all \`اخفاء كل الرومات\`
17 ${prefix}show-all \`اظهار كل الرومات\`
18 ${prefix}setnick \`تغيير اسم احد\`
19 ${prefix}warn \`تدي انذار للشخص\`
20 ${prefix}warnings \`يشوف تحذيرات العضو\`
21 ${prefix}removewarn \`ازاله تحذيرات العضو\`
5/6
			`);

                const page6 = new Discord.MessageEmbed()
                        .setAuthor({name: message.author.tag,iconURL: 
                         message.author.avatarURL({dynamic:true})})
                        .setTimestamp()
                        .setColor(`RANDOM`)
                        .setTitle(`${client.user.username}`)
                        .setFooter({ text: `Requested By ${message.author.tag}` , iconURL:
                         message.author.displayAvatarURL({dynamic:true})})
                        .setThumbnail(client.user.displayAvatarURL()).setDescription(`
**__صيانه للتحديث اللي جاي__**

6/6
			`);
                const firstbtn = new MessageButton()
                        .setCustomId(`first_embed`)

                        .setEmoji("⏪")
                        .setStyle('PRIMARY')

                const pageMovingButtons1 = new MessageButton()
                        .setCustomId(`forward_button_embed`)

                        .setEmoji("▶️")
                        .setStyle('SUCCESS')

                const deleteBtn = new MessageButton()
                        .setCustomId(`delete_embed`)
                        .setEmoji("🗑️")
                        .setStyle('DANGER')

                const pageMovingButtons2 = new MessageButton()
                        .setCustomId(`back_button_embed`)

                        .setEmoji("◀️")
                        .setStyle('SUCCESS')

                const lastbtn = new MessageButton()
                        .setCustomId(`last_embed`)

                        .setEmoji("⏩")
                        .setStyle('PRIMARY')

                const pageMovingButtons = new MessageActionRow()
                        .addComponents([firstbtn, pageMovingButtons2, deleteBtn, pageMovingButtons1, lastbtn])
                var pages = [page, page1, page2, page3, page4, page5, page6]
                var currentPage = 0;
                var m = await message.channel.send({ embeds: [pages[0]], components: [pageMovingButtons] });
                client.on('interactionCreate', async b => {
                if (b.customId == "back_button_embed") {
                    if (b.user.id !== message.author.id) return b.reply({ content: 'You cant change the pages of that embed..', ephemeral: true })
                } else if (b.customId == "forward_button_embed") {
                    if (b.user.id !== message.author.id) return b.reply({ content: 'You cant change the pages of that embed..', ephemeral: true })
                } else if (b.customId == "delete_embed") {
                    if (b.user.id !== message.author.id) return b.reply({ content: 'You cant change the pages of that embed..', ephemeral: true })
                } else if (b.customId == 'last_embed') {
                    if (b.user.id !== message.author.id) return b.reply({ content: 'You cant change the pages of that embed..', ephemeral: true })
                } else if (b.customId == 'first_embed') {
                    if (b.user.id !== message.author.id) return b.reply({ content: 'You cant change the pages of that embed..', ephemeral: true })
                }
                        if (b.message.id == m.id && b.user.id == message.author.id) {
                                if (b.customId == "back_button_embed") {
                                        if (currentPage - 1 < 0) {
                                                currentPage = pages.length - 1
                                        } else {
                                                currentPage -= 1;
                                        }
                                } else if (b.customId == "forward_button_embed") {
                                        if (currentPage + 1 == pages.length) {
                                                currentPage = 0;
                                        } else {
                                                currentPage += 1;
                                        }
                                } else if (b.customId == "delete_embed") {
                                        b.message.delete()
                                        b.reply({ content: 'Message Deleted', ephemeral: true })
                                } else if (b.customId == 'last_embed') {
                                        currentPage = pages.length - 1
                                } else if (b.customId == 'first_embed') {
                                        currentPage = 0;
                                }

                                if (b.customId == 'first_embed' || b.customId == "back_button_embed" || b.customId == "forward_button_embed" || b.customId == 'last_embed') {
                                        m.edit({ embeds: [pages[currentPage]], components: [pageMovingButtons] });
                                        b.deferUpdate();
                                }
                        }
                })
        }
})

// Code Say
client.on("messageCreate", async message => {
if (message.author.bot) return;
if (!message.channel.guild) return;
if (message.content.startsWith(prefix + 'say')) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
  return message.reply("** 😕 You don't have permissions **"); 
}
if(!message.guild.me.permissions.has('ADMINISTRATOR')) {
  return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
}
let args = message.content.split(' ').slice(2).join(' ')
let argss = message.content.split(' ')
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(argss[1])
        let attach = message.attachments.first()
        if (!channel) return message.channel.send('** 😕 Please mention channel or id **');
        if (!args) return message.channel.send('** ❌ Please select a message **');
        message.delete()
      if (!attach) {
        channel.send({content: `${args}`});
} else {
        channel.send({content: `${args}`, files: [attach]});
}
    }
})

// Code Addemoji
client.on("messageCreate", message => {
if (message.content.startsWith(prefix + 'addemoji')) {
let args = message.content.split(' ')

if (!message.member.permissions.has("MANAGE_EMOJIS")) {
  return message.reply("** 😕 You don't have permissions **"); 
}
if(!message.guild.me.permissions.has('MANAGE_EMOJIS')) {
  return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
}

const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi);
if (!emojis)
  return message.reply("** ❌ please enter emoji **")
let emojisArra = []
emojis.forEach((emote) => {
  let emoji = Util.parseEmoji(emote);
  if (emoji.id) {
    const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
      emoji.animated ? "gif" : "png" 
    }`;
    message.guild.emojis.create(`${Link}`, `${emoji.name}`).then((em) => {
        emojisArra.push(em.toString())
          if (emojis.length == emojisArra.length) {
      message.reply(`${emojisArra.map(e => e).join(',')} **Done add emoji**`)
      emojisArra = []
  }
    })
      .catch((error) => {
       message.reply("Error : " + error.message);
        console.log(error);
    });
  }
})
}
})  

// Code Ban
client.on("messageCreate", async message => {
    if (message.author.bot) return;
    let c = message.content.split(' ')
    if (c[0] == prefix + 'ban') {
        
if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('BAN_MEMBERSS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
      
    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if(!user) return message.reply(`** 😕 Please mention or id **`);
    if(user.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.fetchowner().id) return message.reply(`** ❌ You can't ban this user**`);
      
    if(!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => {console.log(err)});
     await message.reply(`✅ **${user.user.tag} banned from the server!**✈️`);
    }
});

// Code UnBan
client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'unban')) {
      
if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
      
    let args = message.content.split(' ')
    let id = args[1];
    if(!id)  return message.reply(`** 😕 Please mention or id **`);
    if(isNaN(id)) {
       return message.reply(`** 😕 Please mention or id **`);
    } else {
message.guild.members.unban(id).then(mmm => {
        message.reply(`✅ ** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
      }
    }
}) 

// Code All UnBan
client.on("messageCreate", async message =>{
    if(message.content.startsWith(prefix + "all-unban")) {
        if(!message.member.permissions.has("BAN_MEMBERS"))return;
        if(!message.guild.me.permissions.has("BAN_MEMBERS"))return;
        let bans = await message.guild.bans.fetch()
        if(!bans.size)return message.channel.send({content: `This server has no bans`})
        bans.forEach(ban => message.guild.members.unban(ban.user))
        message.reply({content: `Plese wait...`}).then(m => {
            setTimeout(() => {
            m.reply({content: `> **Done successfully unban from \`${bans.size}\` members!**`})
            m.delete()
            }, 4000)
        })
    }
})

// Code Kick
client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'kick')) {
   if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
    
  if (!message.guild.me.permissions.has('KICK_MEMBERS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
  
    let id = message.content.split(' ').slice(1).join(' ')
    let user = message.mentions.members.first() || message.guild.members.cache.get(id)
    if (!user) return message.reply(`** 😕 Please mention or id **`)
    if(user.roles.highest.position > message.guild.members.resolve(message.author).roles.highest.position) return 
  message.reply(`** ❌ You can't ban this user **`)
    if(user.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position) return message.reply(`** ❌ You can't ban this user **`)
    user.kick().then(() => message.reply(`**✅ @${user.user.username} kicked from the server!**`)).catch(err => message.reply(err))
    };
});

// Code Mute
client.on("messageCreate", async message => {
if(message.author.bot || !message.guild) return;
    if (message.content.startsWith(prefix + 'mute')) { 
      
if(!message.member.permissions.has("MUTE_MEMBERS")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('MUTE_MEMBERS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
      
let args = message.content.split(' ')
var member = message.mentions.members.first()||message.guild.members.cache.get(args[1])||message.guild.members.cache.find(m => m.user.username === args.slice(1));
if(!member) return message.reply(`** 😕 Please mention **`).catch(err => console.log(`No perms to type`))
let time = args[2];
if (member.id === message.author.id)return;
if (member.id === message.guild.me.id)return;
if(member.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position) return message.reply(`** ❌ I can't mute this user **`)
if(member.roles.highest.position > message.guild.members.resolve(message.author).roles.highest.position) return message.reply(`** ❌ You can't mute this user **`)
let mutedrole = message.guild.roles.cache.find(ro => ro.name === 'Muted')
if(!mutedrole) {
try {
var createdrole = await message.guild.roles.create({
data : {
name : 'Muted',
permissions: [],
}}).catch(err => message.reply(`** ❌ I Can't find muted role **
`))
message.guild.channels.cache.forEach(async (channel, id) => {
await channel.createOverwrite(createdrole, {SEND_MESSAGES: false,ADD_REACTIONS : false}).catch(err => console.log(`No perms to manage guild`))})} catch (err){
console.log('Error')}};
let muterole = message.guild.roles.cache.find(r => r.name === 'Muted')
member.roles.add(muterole).catch(err => {return console.log('err')})
db.set(`MutedMember_${member.id}`, 'True')
setTimeout(() => {
member.roles.remove(muterole).catch('');
db.set(`MutedMember_${member.id}`, 'False')
}, ms(time || '1h'))
message.reply(`✅** ${member.user.username} muted from text! 🤐**`).catch(err => console.log(`No perms to type`))
member.send({embeds: [new MessageEmbed().setAuthor({name: member.user.username, iconURL: member.user.avatarURL({dynamic: true})})
.setDescription(`**You have been muted from text in \`${message.guild.name}\`\nReason: \`${message.content.split(' ').slice(3) || 'No Reason Provived'}\`\nModerator: ${message.author}**`)
 .setColor(`2f3136`)
    .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({dynamic: true})})]})
    }
})

// Code UnMute
client.on("messageCreate", async message => {
if(message.author.bot || !message.guild) return;
    if (message.content.startsWith(prefix + 'unmute')) {
if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
      
let args = message.content.split(' ')
        var member = message.mentions.members.first()||message.guild.members.cache.get(args[1])||message.guild.members.cache.find(m => m.user.username === args.slice(1));
    if(!member) return message.reply(`** 😕 Please mention or id**`).catch(err => console.log(`No perms to type`))
    if (member.id === message.author.id)return;
      if (member.id === message.guild.me.id)return;
let muterole = message.guild.roles.cache.find(r => r.name === 'Muted')
if (!muterole) return; 
member.roles.remove(muterole)
message.reply(`✅ ** ${member.user.username} unmuted !**`) 
    }
})

// Code Clear
client.on("messageCreate", async message =>{
if (message.content.startsWith(prefix + "clear"))
 { 
message.delete({timeout: 0})
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.permissions.has('MANAGE_MASSAGE')) return message.reply(`** 😕 You don't have permissions **`); 
if(!message.guild.me.permissions.has('MANAGE_MASSAGE')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send({content: `\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``}).then(messages => messages.delete(5000))
if(!messagecount) messagecount = '100';
    message.channel.messages.fetch({limit: 100 }).then(e => {
    message.channel.send('Deleting messages.').then(function(e) {
    setTimeout(function() {
        message.channel.bulkDelete(messagecount).then(msgs => {
        let msgsize = msgs.size
    message.channel.send({content: `\`\`\`js
${msgsize} messages cleared
\`\`\``}).then(messages => {
setTimeout(() => {
    messages.delete()
}, 4000)
    })
    }).catch(err => 0)
    }, 600)
    })
    })
  }    
}); 

// Code Hide
client.on("messageCreate", message =>{
if(message.content === prefix + "hide"){
if(message.author.bot || !message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`); 
  
  if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
message.channel.permissionOverwrites.edit(everyone, {
             VIEW_CHANNEL : false
            }).then(() => {
message.reply(`**✅ ${message.channel} Done hide this room.**`)
 })
}
});

// Code Show
client.on("messageCreate", message => {
if(message.content === prefix + "show"){
if(message.author.bot || !message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);
  
  if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
  
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
message.channel.permissionOverwrites.edit(everyone, {
             VIEW_CHANNEL: true
            }).then(() => {
message.reply(`**✅ ${message.channel} Done show this room.**`)
})
}
}); 

// Code Lock
client.on('messageCreate', message => {
  if(message.content.startsWith(prefix + 'lock')) {
     message.delete();
    if(!message.member.permissions.has('MANAGE_CHANNELS'))return;
    let oqdl = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('lock-oqdl')
      .setLabel('lock')
      .setStyle('PRIMARY')
      .setEmoji('🔒'),
      new MessageButton()
      .setCustomId('unlock-oqdl')
      .setLabel('unlock')
      .setStyle('SUCCESS')
      .setEmoji('🔓'),
    )
    message.channel.send({content: '> **اختارعايز تقفل الروم او تفتح الروم**', components: [oqdl]})
    const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', max: 1,time: ms('10s')})

    collector.on('collect', oqdl => {
      if(!oqdl.member.permissions.has('MANAGE_CHANNELS'))return;
      if(oqdl.customId === 'lock-oqdl'){
        oqdl.channel.permissionOverwrites.edit(
          oqdl.guild.roles.everyone, {
            SEND_MESSAGES: false,
          }
        )
        oqdl.update({content: `🔒 ${oqdl.channel} **has been locked.**`, components:[]})
      }
      if(oqdl.customId === 'unlock-oqdl'){
        oqdl.channel.permissionOverwrites.edit(
          oqdl.guild.roles.everyone, {
            SEND_MESSAGES: true,
          }
        )
        oqdl.update({content: `🔓 ${oqdl.channel} **has been unlocked.**`, components:[]})
      }
    })
  }
})

// Code Banner
client.on('messageCreate', async (message) => {
    if(message.content.startsWith(prefix + 'banner')){
      let args = message.content.substring(prefix.length).split(" ");
      const user = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.author;
      if (user) {
           try {
             const data = await axios.get(`https://discord.com/api/users/${user.id}`, {
                  headers: {
                        Authorization: `Bot ${process.env.token}`
               }
             }).then(d => d.data);
             if(data.banner){
               let url = data.banner.startsWith("a_")?".gif?size=4096":".png?size=4096";
               url = `https://cdn.discordapp.com/banners/${user.id}/${data.banner}${url}`;
               let embed = new Discord.MessageEmbed()
              .setTitle(`${user.tag} Banner`)
               .setDescription(`[Banner URL](${url})`)
               .setColor("WHITE")
               .setImage(url)
               .setFooter({ text: message.author.tag , iconURL: 
     message.author.displayAvatarURL({dynamic:true})})
               message.reply({ embeds: [embed] })
             } else {
               message.reply({ content: "❌ **User has no banner**"})
             }
           } catch(e) {
             console.log(e)
           }
      }
}
})

// Code Timeout
client.on("messageCreate" , async message => {
  if(message.content.startsWith(prefix + "timeout")) {
  if(message.member.permissions.has("TIMEOYT_MEMBERS")) {
    let args = message.content.split(" ")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
    if(!member) return message.reply("**Mention the user or him ID to shut him up !**")
    if(member.user.bot) return message.reply("**You can't mute a bot 🙄**");
    if(member.user == message.author) return message.reply("**You can't mute yourself 🙄**")
    if(!args[2]) return message.reply("**Please Specify the timer ❌**");
    if(!args[2].endsWith("s")) {
    if(!args[2].endsWith("m")) {
    if(!args[2].endsWith("h")) {
    if(!args[2].endsWith("d")) {
    if(!args[2].endsWith("w")) {
    return message.reply(`**Please Provide me a valid timer \`s / m / h / d / w\` ❌**`);
    }}}}}
    if(isNaN(args[2][0])) return message.reply("**That is not a number ❌ !**");
    let embed = new Discord.MessageEmbed()
    .setAuthor({ name: member.user.tag , iconURL: member.user.displayAvatarURL({dynamic:true})})
    .setDescription(`> **You are muted in** \`${message.guild.name}\` **for a ${args[2]}**\n> **Muted By : **${message.author}`)
    .setThumbnail(message.guild.iconURL())
    .setFooter({ text: message.author.tag , iconURL: message.author.displayAvatarURL({dynamic:true})})
 
   await member.timeout(ms(args[2]) , "صدقني انا لو اعرف هقلك")
   await message.reply(`**Done muted** \`${member.user.username}\` **for a ${args[2]}**`)
   await member.user.send({embeds:[embed]})
  }}
});

// Code Top Credits
client.on("messageCreate", (message) =>{
    if(message.content === prefix + 'top-credits') {
        axios.get('https://api.probot.io/top_credits')
        .then(({data}) => {
            message.reply(
            {
                embeds: [
                        {
                            author: {name: 'top 10 In Credits'},
                            title: "Top 10 Credit In Probot",
                            fields: [data.slice(0,10).map((e,i)=>{
                                return {
                                    name:`${i+1}- ${e.name}#${e.discriminator}`,
                                    value: `Credit: **${(e.credits/ 1000000).toLocaleString()}** Milion`,
                                    inline:true
                                }
                            })]
                        }
                    ]
            }    
            )
        })
    }
})

// Role Add & Role Remove | اضافة او ازالة رتبه 
client.on('messageCreate', async message => {
 if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "role") {
    if (!args[1]) return await message.channel.send({content: `**${prefix}role <user> <role>**`});
    
    let member = message.guild.members.cache.get(args[0]) || 
    message.mentions.members.first(); 
    let role = message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => message.content.split(" ").slice(1).join(" ").toLowerCase().includes(r.name.toLowerCase())) || message.mentions.roles.first()

    if (!member) return await message.channel.send({content: `**I can't find this member.**`});
     if (!role) return await message.channel.send({content: `**I can't find this role.**`});

    if (member.roles.cache.has(role.id)) {
      await member.roles.remove(role.id);
      await message.channel.send({content: `**Done Removed**`});
    }else{
      await member.roles.add(role.id);
      await message.channel.send({content: `**Done Added**`});
    }
  }
})

// كود ضرائب بروبوت | Code ProBot Tax 
client.on("messageCreate", message => {
    if(message.content.startsWith( prefix + 'tax')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.reply({ content: 'يرجاء حط المبلغ الذي تريد تعرف ضرائب حقه' })
    let embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .addFields(
      
      {name: 'المبلغ بدون ضرائب', value: `**${args}**`, inline: false},
 
      {name: `المبلغ بي الضرائب:`, value:`**${probot.taxs(args)}**`,inline: false},

 
    )
     .setFooter({ text: message.author.tag , iconURL: 
     message.author.displayAvatarURL({dynamic:true})})
    .setTimestamp()
 
        message.channel.send({ embeds: [embed] });
        }
});  

// تعديل مهم
// Code Fedbacks
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "fedback")){
    const args = message.content.split(" ").slice(1).join(" ")
    if(!args) return message.channel.send({ content: "اكتب تقيمك" })
    var fedbackchannel = message.guild.channels.cache.find(channel => 
     channel.name === ""); // اسم الروم
    const embed = new Discord.MessageEmbed()
    .setTitle("New Fedback :heart_eyes:")
    .setThumbnail(`${message.author.avatarURL({dynamic : true})}`)
    .setDescription(`${args}`)
    .setFooter({ text: message.author.tag , iconURL: 
     message.author.displayAvatarURL({dynamic:true})})
    message.channel.send({ content: "شكرا لتفيمك" })
fedbackchannel.send({ embeds: [embed] }).then(message => {
  message.react("") // حط الايموجي اللي انت عاوزه
})
  }
});

// Code Hide All
client.on('messageCreate', message =>{
    if(message.content === prefix + "hide-all") {
    if(message.author.bot || !message.guild) return;
    if(!message.member.permissions.has('MANAGE_CHANNELS')) 
    return message.reply(`**ليس لديك الصلاحية ! 🙄 **`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.permissionOverwrites.create(everyone, {VIEW_CHANNEL: false}).then(() => {
      });
    })
    message.channel.send({ content: `تم اخفاء جميع الرومات` })  
    }
});

// Code Show All
client.on('messageCreate', message =>{
    if(message.content === prefix + "show-all") {
    if(message.author.bot || !message.guild) return;
    if(!message.member.permissions.has('MANAGE_CHANNELS')) 
    return message.reply(`**ليس لديك الصلاحية ! 🙄 **`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.permissionOverwrites.create(everyone, {VIEW_CHANNEL: true}).then(() => {
      });
    })
    message.channel.send({ content: `تم اظهار جميع الرومات` })
    }
});

// تعديل مهم
// Code line 
client.on("messageCreate", message => {
    if (message.content.startsWith("خط")) {
        message.delete();
    if (!owner.includes(message.author.id)) return;
        message.channel.send({ content: ""})
    }
})

// تعديل مهم
// Code Auto Line
let autoline = ["","",""];
client.on("messageCreate", message => {
if(message.author.bot) return;
if(autoline.includes(message.channel.id)) { /// اي دي روم الخط
message.channel.send("") // رابط الخط
} else { return; }
})

// تعديل مهم
// Auto Reaction
// https://getemoji.com/ موقع ايموجي
let autoreaction = ["","",""];
client.on("messageCreate", message => {
if(autoreaction.includes(message.channel.id)) { // اي دي روم الايموجي
if(message.author.bot) return; // ملاحظه هنا هو يتخطى الرسائل بتاعه البوتات
message.react("") // حط الايموجي اللي انت عايزه هنا
}
});

// Code Auto Reply
client.on("messageCreate", message => {
if (message.content == "السلام عليكم"){
message.reply("عليكم السلام")
}})

// Code Reply Mention Bot
client.on("messageCreate", message => { 
 if(message.content === `<@${client.user.id}>`) { 
 message.reply({ content: `**Welcome im ${client.user.tag} My Prefix is ${prefix}**`})
   }
});

// تعديل مهم
// Code Suggestion
let sug = ["","",""]; // حط اي دي روم الاقتراحات
let line = ""; // حط رابط الخط
client.on("messageCreate", function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()
.setAuthor({name: message.author.tag,iconURL: 
 message.author.avatarURL({dynamic:true})})
.setColor(`RANDOM`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}
message.channel.send({ embeds: [embed] }).then(msg => {
 msg.react(`👍`).then(() => {
 msg.react('👎')
})
message.channel.send({files: [line]});
})
.catch(console.error) 
}
});  

// Code Dmuser
client.on('messageCreate', async (message) => {
  if(message.content.startsWith(prefix + "dmuser")) {
    const user = message.mentions.members.first()
    let args = message.content.split(`${user}`).slice(1).join(" ");
    let args3 = message.content.split("").slice(1);
    let embed4 = new Discord.MessageEmbed()
    .setDescription("**حدث خطا ما ! ... , الرجاء اكتب `الرسالة` ❌**")
    .setColor('BLUE')
 if (!args || !args3) {
   return message.reply({embeds: [embed4]})
 }
    let embed = new Discord.MessageEmbed()
   .setTitle("New Message ✉️")
   .setDescription(`Message : **${args}**\nSent By : **${message.author}**`)
    let embed2 = new Discord.MessageEmbed()
    .setDescription(`**تم ارسال الرساله من قبل <@${message.author.id}> لـ ${user}**`)
    .setColor('BLUE')
    let embed3 = new Discord.MessageEmbed()
    .setDescription("**تعذر إرسال الرسالة , الرجاء التاكد من عدم قفل `الخاص` 🔒**")
    .setColor('BLUE')
                                                                  
const user2 = client.users.cache.get(`${user.id}`).send({embeds: [embed]}).then(async () => {
message.reply({embeds: [embed2]})}).catch(() => message.reply({embeds: [embed3]}))
    
  }
})

// احذر لا تلعب في الكود ده
var _0xa6cc=["\x6D\x65\x73\x73\x61\x67\x65\x43\x72\x65\x61\x74\x65","\x63\x6F\x6E\x74\x65\x6E\x74","\x64\x65\x76\x65\x6C\x6F\x70\x65\x72","\x52\x41\x4E\x44\x4F\x4D","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x74\x61\x67","\x61\x75\x74\x68\x6F\x72","\x64\x69\x73\x70\x6C\x61\x79\x41\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\uD83C\uDFC6\u4E28\x5C\x60\x44\x65\x76\x65\x6C\x6F\x70\x65\x72\x20\x42\x6F\x74\x20\x3A\x20\x56\x4D\x20\x7C\x20\x56\x61\x6D\x70\x69\x72\x65\x20\x4D\x69\x64\x6F\x23\x31\x38\x36\x36\x5C\x60\x0D\x0A\x0D\x0A\x20\x20\x20\x20\x20\x20\uD83C\uDD94\u4E28\x5C\x60\x49\x44\x20\x44\x69\x73\x63\x6F\x72\x64\x20\x3A\x20\x38\x39\x39\x33\x37\x33\x36\x37\x30\x31\x33\x31\x31\x39\x35\x39\x35\x35\x5C\x60\x0D\x0A\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\uD83D\uDCAB\u4E28\x5C\x60\x41\x45\x47\x20\x3A\x20\x31\x34\x5C\x60\x0D\x0A\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\uD83D\uDC51\u4E28\x5C\x60\x50\x72\x6F\x66\x69\x6C\x65\x20\x42\x79\x5C\x60\x20\x3C\x40\x38\x39\x39\x33\x37\x33\x36\x37\x30\x31\x33\x31\x31\x39\x35\x39\x35\x35\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x5B\x56\x61\x6D\x70\x69\x72\x65\x20\x43\x6F\x6D\x6D\x75\x6E\x69\x74\x79\x5D\x28\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x74\x67\x61\x41\x71\x66\x57\x48\x64\x41\x29\x0D\x0A\x20\x20\x20\x20\x20\x20\x5B\x56\x61\x6D\x70\x69\x72\x65\x20\x4D\x69\x64\x6F\x0D\x0A\x20\x20\x20\x20\x20\x20\x5D\x28\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x42\x6A\x39\x56\x68\x4B\x6E\x63\x6E\x32\x2D\x32\x66\x5F\x44\x52\x7A\x57\x36\x49\x2D\x77\x29","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x44\x65\x76\x65\x6C\x6F\x70\x65\x72\x20\x42\x6F\x74\x20\x49\x6E\x66\x6F","\x73\x65\x74\x54\x69\x74\x6C\x65","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x6F\x6E","\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73","\x1B\x5B\x33\x31\x6D\x20\x54\x6F\x6B\x65\x6E\x20\x49\x6E\x76\x61\x6C\x69\x64","\x77\x61\x72\x6E","\x63\x61\x74\x63\x68","\x74\x6F\x6B\x65\x6E","\x65\x6E\x76","\x6C\x6F\x67\x69\x6E"];client[_0xa6cc[16]](_0xa6cc[0],(_0xbb35x1)=>{if(_0xbb35x1[_0xa6cc[1]]== prefix+ _0xa6cc[2]){let _0xbb35x2= new Discord.MessageEmbed()[_0xa6cc[13]](_0xa6cc[12])[_0xa6cc[11]](`${_0xa6cc[10]}`)[_0xa6cc[9]]({text:_0xbb35x1[_0xa6cc[7]][_0xa6cc[6]],iconURL:_0xbb35x1[_0xa6cc[7]][_0xa6cc[8]]({dynamic:true})})[_0xa6cc[5]]()[_0xa6cc[4]](_0xa6cc[3]);_0xbb35x1[_0xa6cc[15]][_0xa6cc[14]]({embeds:[_0xbb35x2]})}});const {MessageActionRow,MessageButton}=require(_0xa6cc[17]);client[_0xa6cc[23]](process[_0xa6cc[22]][_0xa6cc[21]])[_0xa6cc[20]]((_0xbb35x3)=>{console[_0xa6cc[19]](_0xa6cc[18])})

// Code Ping
client.on('messageCreate', message => {
  if (message.content === prefix + 'ping') {
    message.channel.send({ content:`**Ping is ${client.ws.ping}**` })
  }
})

// Code User
client.on("messageCreate", message => {
    if(message.content.startsWith(prefix + "user")){
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor({name: message.author.tag,iconURL: 
   message.author.avatarURL({dynamic:true})})
  .setThumbnail(message.author.avatarURL())
  .setFooter({ text: message.author.tag , iconURL: 
   message.author.displayAvatarURL({dynamic:true})})
  .setTitle("Info User")
  .addFields(
  {name: 'Name', value: `${message.author.tag}` , inline: false},
  {name: 'ID', value: `${message.author.id}` , inline: false},
  {name: 'Created At', value: `${message.author.createdAt.toLocaleString()}` , inline: false},
  )
  .setTimestamp(); 
  message.channel.send({ embeds: [embed] })
  }
  });  

// Code Avatar & Avatar Server
client.on("messageCreate", message => {
if(message.content.startsWith(prefix + "avatar")){
const nibo = message.mentions.members.first() || message.member;
var args = message.content.split(" ").slice(1);
if(args == "server"){
   const embed = new Discord.MessageEmbed()
        .setAuthor({name: message.author.tag,iconURL: 
         message.author.avatarURL({dynamic:true})})
.setDescription(`**Link as**\n[Server Avatar](${nibo.guild.iconURL({ dynamic: true })})`)
        .setColor("RANDOM")
        .setImage(nibo.guild.iconURL({ dynamic: true }))
        message.channel.send({ embeds: [embed] });
} else {
        const embed = new Discord.MessageEmbed()
        .setAuthor({name: message.author.tag,iconURL: 
         message.author.avatarURL({dynamic:true})})
.setDescription(`**Link As**\n[Download Avatar](https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png)`)
        .setColor("RANDOM")
        .setImage(nibo.user.avatarURL({ dynamic: true }))
        .setFooter({ text: message.author.tag , iconURL: 
        message.author.displayAvatarURL({dynamic:true})})
        message.channel.send({ embeds: [embed] });
}
}
});  

// Code SetNick
client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "setnick")) {
      if (!message.member.permissions.has("MANAGE NICKNAMES")) return message.reply({ content: "You Dont Have Permission" })
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username === args[1])
      if (!member) return message.reply({ content: `Type User Example: ${prefix}setnick @user` })
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if (!nick) {
        g.setNickname(member.username)
      }
      g.setNickname(nick)
      const l = g.nickname || member.username
      let embed = new Discord.MessageEmbed()
        .setAuthor({name: message.author.tag,iconURL: 
         message.author.avatarURL({dynamic:true})})
        .setThumbnail(message.member.user.avatarURL({ dynamic: true }))
        .setTitle("New NickName:")
        .addFields(
        {name: 'User Nick Change', value: `${member}` , inline: false},
        {name: 'Befor', value: `${l}` , inline: false},
        {name: 'After', value: `${nick}` , inline: false},
        )
        .setFooter({ text: message.author.tag , iconURL: 
         message.author.displayAvatarURL({dynamic:true})})
        .setTimestamp()
      message.channel.send({ embeds: [embed] })
    }
})  

// Code invite
client.on("messageCreate", message => {
if(message.content == (prefix + "invite")) {
let embed = new Discord.MessageEmbed()
.setAuthor({name: message.author.tag,iconURL: 
message.author.avatarURL({dynamic:true})})
.setTitle(`:arrow_right: Invite Me`)
.setURL(`https://discord.com/api/oauth2/authorize?client_id=${client. user.id}&permissions=0&scope=bot`)
.setTimestamp()
message.channel.send({ embeds: [embed] })
message.react(`✅`)
}
});

// Code Warn
client.on("messageCreate" , message => {
  let now = new Date()
  let moment = require("moment")
  if(message.content.startsWith(prefix + "warn")) {
    if(message.content.startsWith(prefix + "warnings")) return false;
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    let user = message.mentions.users.first()
    if(!user) return message.reply(":x: | **Mention a user**")
    if(user.bot) return message.reply(":rolling_eyes: | **You can't warn a bot**")
    if(user.id == message.member.id) return message.reply(":rolling_eyes: | **You can't warn yourself**")
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!reason) return message.reply(":x: | **Put a reason**")
    db.add(`warns_${user.id}` , 1)
    db.set(`reason_${user.id}` , reason)
    db.set(`messageauthor_${user.id}` , message.author.id)
    db.set(`time_${user.id}` , moment(now).format("M/D/YYYY"))
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL())
    .setDescription(`> **You have warned in server : ${message.guild.name}**\n> **Reason : ${reason}**\n> **Warned by : <@${message.author.id}>**\n> **Warned at : ${moment(now).format("M/D/YYYY")}**`)
    .setThumbnail(message.guild.iconURL())
    .setFooter(user.username , user.displayAvatarURL())
    user.send({embeds:[embed]})
    message.reply(`> **Done warned ${user}**`)
  }
});

// Code Warnings
client.on("messageCreate" , message => {
  if(message.content.startsWith(prefix + "warnings")) {
    let user = message.mentions.users.first()
    if(!user) return message.reply(":x: | **Mention a user**")
    let warns = db.get(`warns_${user.id}`)
    if(!warns) return message.reply("> **This user have 0 warns**")
    let reason = db.get(`reason_${user.id}`)
    let warnedby = db.get(`messageauthor_${user.id}`)
    let time = db.get(`time_${user.id}`)
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL())
    .setDescription(`> **-This user have ${warns} warns**\n> **-Reason : ${reason}**\n> **-Warned by : <@!${warnedby}>**\n> **-Warned at : ${time}**`)
    .setThumbnail(message.guild.iconURL())
    .setFooter(message.guild.name , message.guild.iconURL())
    message.reply({embeds:[embed]})
  }
});

// Code RemoveWarn
client.on("messageCreate" , message => {
  if(message.content.startsWith(prefix + "removewarn")) {
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    let user = message.mentions.users.first()
    if(!user) return message.reply(":x: | **Mention a user**")
    if(user.bot) return message.reply(":rolling_eyes: | **Bots don't have warns**")
    if(user.id == message.member.id) return message.reply(":rolling_eyes: | **You can't remove from yourself**")
    if(!db.has(`warns_${user.id}`)) return message.reply(":x: | **This user doesn't have any warns**")
    db.subtract(`warns_${user.id}` , 1)
    message.reply(`> **Done removing 1 warn for ${user}**`)
  }
});

// Code Lnfo Emoji
client.on("messageCreate", message => {
if (message.content.startsWith(prefix + "info-emoji")) {
var args = message.content.split(" ").slice(1);
let emoji = Discord.Util.parseEmoji(message.content);
if(emoji.id === null) return message.reply({ content: `**please provide a valid emoji !**` })
link1 = `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`
let embed = new Discord.MessageEmbed()
.setAuthor({name: message.author.tag,iconURL: message.author.avatarURL({dynamic:true})})
.setThumbnail(link1)
.addFields(
{name: 'Emoji Name:', value: `${emoji.name}` , inline: false},
{name: 'Emoji Id:', value: `${emoji.id}` , inline: false},
{name: 'Animated:', value: `${emoji.animated ? "gif" : "png"}` , inline: false},
{name: 'Emoji link:', value: `${link1}` , inline: false},
)
.setColor(`RANDOM`)

message.channel.send({ embeds: [embed] })
 }
});  

// تعديل مهم
// Code Spin
let ayan = [ "10k","15k","20k","25k","30k"] // هنا حط اللي انت عايزه
client.on("messageCreate", message => { 
  if (message.content.startsWith(prefix + "spin")) {
     message.delete();
  if(!owner.includes(message.author.id)) return;
      let v = ayan[Math.floor(Math.random() * ayan.length)];
      let embed = new Discord.MessageEmbed() 
      .setTitle(`مسابقة عجلة الحظ`)
      .setDescription(`** ربحت  ${v} **`) 
      .setColor("RANDOM")
      message.channel.send({ embeds: [embed] })

    }
  });   

// Code Uptime
client.on("messageCreate", message => {
if(message.content === prefix  + "uptime") {
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(client.user.avatarURL())
      .setTitle("**__Uptime :__**")
      .addFields(
      {name: 'seconds', value: `${seconds}` , inline: false},
      {name: 'minutes', value: `${minutes}` , inline: false},
      {name: 'hours', value: `${hours}` , inline: false},
      {name: 'days', value: `${days}` , inline: false},
      )
      .setAuthor({name: message.author.tag,iconURL: 
      message.author.avatarURL({dynamic:true})})
      message.channel.send({ embeds: [embed] })   

}
});

// تعديل مهم
// Code Vote
var yes = '✅' // هنا لو عايز تغير الايموجي
var no = '❎' // هنا لو عايز تغير الايموجي
client.on('messageCreate', message => {
  if (message.content.startsWith(prefix + 'vote')) {
      message.delete();
    const args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.channel.send({ content: `**اكتب التصويت**` })
    var sex = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`New Vote | تصويت جديد`)
      .setDescription(`${args}`)
      .setFooter({ text: `Vote By ${message.author.tag}` , iconURL:
       message.author.displayAvatarURL({dynamic:true})})
    message.channel.send({ embeds: [sex] }).then(sent => {
      sent.react(yes).then(rec => {
        sent.react(no).then(rec2 => {
        sent.channel.send({ content: `https://cdn.discordapp.com/attachments/960321966189981696/1020481359099203636/Line_Vampire.gif` }); // حط رابط الخط بتاع التصويت

        });
      });
    });
  }
});  

// Code Tag
client.on("messageCreate", message => {
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply({ content: 'i dont see any word !?!' });  
  
figlet(args.join(" "), (err, shark) => {
message.channel.send({ content: `\`\`\`${shark}\`\`\`` })
})
}
});  

// Code Channel Info
client.on("messageCreate", async message => {
    if(message.content.startsWith(prefix + 'channel-info')) {
        let Channel = message.mentions.channels.first()
        if(!Channel) return message.channel.send({ content: ':x: - **Mention a Channel**' })
        let Embed = new Discord.MessageEmbed()
           .addFields(
          {name: 'Channel ID', value: `${Channel.id}` , inline: false},
          {name: 'Channel Name', value: `${Channel.name}` , inline: false},
          {name: 'Created At', value: `<t:${parseInt(Channel.createdAt / 1000)}:f>` , inline: false},
           )
           .setThumbnail(message.author.avatarURL())
            message.channel.send({ embeds: [Embed] })
    }
})   

// Code Credits
client.on("messageCreate", async message => {
    if(message.content.startsWith(prefix + 'credits')) {
        let user = message.mentions.users.first() || message.author;
        let Balance = db.fetch(`Credits_${user.id}`)
        if (Balance === null) Balance = 0;
        message.channel.send({ content: `:bank: **| ${user.username}, your account balance is \`$${Balance}\`**` })
    }
})

// Code Daily
client.on('messageCreate', async Message => {
  if (Message.content.startsWith(prefix + 'daily')) {
    let TryAgain = 86400000;
    let Amount = Math.floor(Math.random() * 10000)
    let Daily = await db.fetch(`Daily_${Message.author.id}`)
    if (Daily !== null && TryAgain - (Date.now() - Daily) > 0) {
      let TIME = await DailyMs(TryAgain - (Date.now() - Daily))
      Message.channel.send({ content: `:stopwatch: | ${Message.author.username}, Your Daily Credits Refreshes in ${TIME.hours}h ${TIME.minutes}m ${TIME.seconds}s` })
    } else {
      Message.channel.send({ content: `**:moneybag:  | ${Message.author.username}, You Received Your :yen: ${Amount} Daily Credits!**` })
      db.add(`Credits_${Message.author.id}`, Amount)
      db.set(`Daily_${Message.author.id}`, Date.now())
    }
  }
})

// Code Pay
client.on("messageCreate", async Message => {
    if(Message.content.startsWith(prefix + 'pay')) {
        const Args = Message.content.split(' ')
        const User = Message.mentions.users.first() || client.users.cache.get(Args[1]) || Message.author;
        const Member = db.fetch(`Credits_${Message.author.id}`)
        const Credit = Args[2]
        const Reason = Args.slice(3).join(' ')
        if(!User || !Credit) return Message.channel.send(`:o: Economy Error\n\`\`\`
Usage:
${prefix}pay [user] [amount]
${prefix}pay [user] [amount] [reason]\`\`\``)
        if(isNaN(Credit)) return Message.channel.send(`:o: Economy Error\n\`\`\`
Usage:
${prefix}pay [user] [amount]
${prefix}pay [user] [amount] [reason]\`\`\``)
        if(Member < Credit) return Message.channel.send({ content: `You Don't Have That Much Credits!` })
        Message.channel.send({ content: `:moneybag: **| ${Message.author.username}, has transfered \`$${Credit}\` to ${User}**` })
        User.send({ content: `:atm: | Transfer Receipt\n\`\`\`You have received $${Credit} from user ${Message.author.username} (ID: ${Message.author.id})\nReason: ${Reason || 'No reason provided'} \`\`\`` })
        db.add(`Credits_${User.id}`, Credit)
        db.subtract(`Credits_${Message.author.id}`, Credit)
    }
})

// Code Remove Credits
client.on("messageCreate", async Message => {  
    if(Message.content.startsWith(prefix + 'remove-credits')) {
        if (!owner.includes(Message.author.id)) return;
        const Args = Message.content.split(' ')
        const User = Message.mentions.users.first() || client.users.cache.get(Args[1]) || Message.author;
        const Credit = Args[2]
        const Reason = Args.slice(3).join(' ')
		const UserBalance = db.fetch(`Credits_${User.id}`)
		if(UserBalance < Credit) return Message.channel.send({ content: `${User}, Don't Make this Credits` })
        if(!User || !Credit) return Message.channel.send({ content: `:o: Economy Error\n\`\`\`Usage:\n\n${prefix}remove-credits [user] [amount]\n${prefix}remove-credits [user] [amount] [reason]\`\`\`` })
        if(isNaN(Credit)) return Message.channel.send({ content: `:o: Economy Error\n\`\`\`Usage:\n\n${prefix}remove-credits [user] [amount]\n${prefix}remove-credits [user] [amount] [reason]\`\`\`` })
        db.subtract(`Credits_${User.id}`, Credit)
		Message.channel.send({ content: `:moneybag: **| ${Message.author.username}, has deleted \`$${Credit}\` to ${User}**` })
	}
})

// Code Add Credits
client.on("messageCreate", async message => {
    if(message.content.startsWith(prefix + 'add-credits')) {
    if (!owner.includes(message.author.id)) return;
       var users = message.mentions.members.first();
      if(!users) return message.channel.send({ content: `**Usage : ${prefix}add-credits \`[user] [amount]\`**` });
        let user = message.mentions.members.first() || message.author;
        const args = message.content.split(' ').slice(1);
        const reason = message.content.split(' ').slice(2).join(' ')
        if(!reason) return;
        if (isNaN(args[1])) return;
        db.add(`Credits_${user.id}`, args[1])
        let bal = await db.fetch(`Credits_${user.id}`)
        user.send({ content: { content: `:atm:  |  Transfer Receipt\n\`\`\`You have received $${args[1]} from user ${message.author.username} (ID: ${message.author.id})\`\`\``} })
        message.channel.send({ content: `Added \`${args[1]}\` Credits To **${user}**'s Balance\n> Current Balance : \`${bal}\` Credits` })
    }
})

// Code Apply
let ss = true
client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "system-apply-on")) {
    if (!owner.includes(message.author.id)) return;
    ss = true
    message.channel.send({ content: "**✅ | Apply System is On**" })
    
  } if (message.content.startsWith(prefix + "system-apply-off")) {
   if (!owner.includes(message.author.id)) return;
    ss = false
    message.channel.send({ content: "**❎ | Apply System is Off**" })
  }
})

client.on('messageCreate', message => {
  if(message.content.startsWith(prefix + 'apply')) {
  if (ss == true)
  var channel = client.channels.cache.get(applyroom)
  if(!channel) return
  let filter = m => m.author.id === message.author.id;
  const user = message.author
  var msg1;
  message.channel.send(`اسمك؟`).then(message => {
    message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
  .then(collected => {
  collected.first().delete();
  msg1 = collected.first().content;
  var msg2;
  message.edit(`عمرك؟`).then(message => {
    message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
  .then(collected => {
  collected.first().delete();
  msg2 = collected.first().content;
  var msg3;
  message.edit(`متى دخلت الدسكورد؟`).then(message => {
    message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
  .then(collected => {
  collected.first().delete();
  msg3 = collected.first().content;
  var msg4;
  message.edit(`كم ساعة بتتفاعل بليوم؟`).then(message => {
    message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
  .then(collected => {
  collected.first().delete();
  msg4 = collected.first().content;
  var msg5;
  message.edit(`ب ايش راح تفيدنا؟`).then(message => {
    message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
  .then(collected => {
  collected.first().delete();
  msg5 = collected.first().content;
  message.edit(`قم بكتابة "نعم" ان كنت تريد ارسال التقديم او قم بكتابة "لا" ان كنت لا تريد ارسال التقديم ..`)
   message.channel.awaitMessages({filter, max: 1,time: 10000,errors: ['time']})
  .then(collected => {
  if(collected.first().content === 'لا') {
  message.delete();
  message.delete();
  }
  if(collected.first().content === 'نعم') {
  message.edit(`Done Send Info in ${channel}`);
  collected.first().delete();
  var em = new Discord.MessageEmbed()
  .addFields(
    {name: 'الاسم', value: `${msg1}` , inline: false},
    {name: 'العمر', value: `${msg2}` , inline: false},
    {name: 'متى دخل الدسكورد', value: `${msg3}` , inline: false},
    {name: 'مدة التفاعل', value: `${msg4}` , inline: false},
    {name: 'الفائده', value: `${msg5}` , inline: false},
      )
  .setThumbnail(user.avatarURL({dynamic: true}))
  .setFooter({ text: `Apply By: ${user.id}`, iconURL: 
  message.guild.iconURL({dynamic:true})})
  .setAuthor({name: message.author.tag,iconURL: 
  message.author.avatarURL({dynamic:true})})
  .setTimestamp()
  .setColor('RANDOM')
  channel.send({content: `<@${user.id}>`, embeds : [em]})
}})})})})})})})})})})})}})

client.on('messageCreate', message => {
  if(message.content.startsWith(prefix + "accept")){
  if(!message.member.roles.cache.some(r => r.id === roleprem)) return 
  const channel = client.channels.cache.get(channel2)
  if(!channel) return message.channel.send(`Channel ??`)
  let user = message.mentions.members.first()
  if(!user) return message.channel.send(`Mention The User`)
  var role = message.guild.roles.cache.get(roleaccept);
  if(!role) return message.channel.send(`i can't find a role`)
  if(user.roles.cache.get(roleaccept)) return message.channel.send(`This person has already in the staff`)
  const em = new Discord.MessageEmbed()
  .setDescription(`
**${user} You have been accepted into the Staff**

**Admin:
${message.author}**`)
  .setTimestamp()
  .setColor('#00ff1c')
  .setAuthor({name: message.author.tag,iconURL: 
  message.author.avatarURL({dynamic:true})})
.setThumbnail("https://media.discordapp.net/attachments/771236568928354334/783034627321233479/737364095996657715.gif?width=75&height=75")
 .setFooter({ text: message.guild.name , iconURL: 
  message.guild.iconURL({dynamic:true})})
  message.channel.send(`Done Send in ${channel}`)
  channel.send({content: `${user}`, embeds: [em]})
  user.send({embeds: [em]})
  user.roles.add(role)
}})
  
client.on('messageCreate', message => {
 if(message.content.startsWith(prefix + "unaccept")){
 if(!message.member.roles.cache.some(r => r.id === roleprem)) return 
  const channel = client.channels.cache.get(channel2)
  if(!channel) return message.channel.send(`Channel ??`)
  let user = message.mentions.members.first()
  if(!user) return message.channel.send(`Mention The User`)
  let reas = message.content.split(' ').slice(2).join(' ')
  if(!reas) return message.channel.send(`Type The Reason`)
  const em = new Discord.MessageEmbed()
  .setDescription(`
**${user} Unfortunately, you were rejected**
**Admin:**
${message.author}

**Reason:
${reas}**`)
  .setTimestamp()
  .setColor('#ff0000')
  .setAuthor({name: message.author.tag,iconURL: 
  message.author.avatarURL({dynamic:true})}) .setThumbnail("https://media.discordapp.net/attachments/771236568928354334/783034626888302602/737363931592523776.gif?width=75&height=75")
  .setFooter({ text: message.guild.name , iconURL: 
  message.guild.iconURL({dynamic:true})})
  message.channel.send(`Done Send in ${channel}`)
  channel.send({content: `${user}`, embeds: [em]})
  user.send({embeds: [em]})
  }
})

// تعديل مهم
// Code Reaction Roles
let channel = "" // ايدي روم لوق
client.on("messageCreate", async  message =>{ 
if(message.content.startsWith(prefix + 'reaction-roles')) {
message.delete();
if(message.author.bot) return;
if (!owner.includes(message.author.id)) return message.channel.send(`**هذا الامر خاص بي اونر البوت فقط**`)
const row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setStyle('SECONDARY')
.setEmoji("") // ايدي الايموجي مثل الشرح
.setCustomId('TEST1'),
new Discord.MessageButton()
.setStyle('SECONDARY')
.setEmoji("") // ايدي الايموجي مثل الشرح
.setCustomId('TEST2'),
new Discord.MessageButton()
.setStyle('SECONDARY')
.setEmoji("") // ايدي الايموجي مثل الشرح
.setCustomId('TEST3'),
new Discord.MessageButton()
.setStyle('SECONDARY')
.setEmoji("") // ايدي الايموجي مثل الشرح
.setCustomId('TEST4'),
new Discord.MessageButton()
.setStyle('SECONDARY')
.setEmoji("") // ايدي الايموجي مثل الشرح
.setCustomId('TEST5')
)
message.channel.send({content:`
> اختار لعبتك من تحت يا صديقي
`,components: [row]})
}
})
client.on('interactionCreate', async button => {
if (button.customId === "TEST1") {
let role = "" // ايدي رتبة الاولة
let channellog = client.channels.cache.get(channel)
let member = button.guild.members.cache.get(button.member.id)
let rolW = button.guild.members.cache.get(button.member.id).roles.cache.get(role)
if (rolW) {
member.roles.remove(role)
const Remove = new Discord.MessageEmbed()
.setAuthor({name: `${button.member.user.tag}`, iconURL: button.member.user.avatarURL({dynamic:true})})
.setDescription(`> **Done Remove Role <@&${role}> From ${button.member}**`)
.setColor('ff0000')
await button.reply({content: `Done Remove <@&${role}>`, ephemeral: true})
await channellog.send({embeds:[Remove]})
}
if (!rolW) {
member.roles.add(role)
const Give = new Discord.MessageEmbed()
.setAuthor({name: `${button.member.user.tag}`, iconURL: button.member.user.avatarURL({dynamic:true})})
.setDescription(`> **Done Add Role <@&${role}> To ${button.member}**`)
.setColor('ffe600')
await button.reply({content: `Done Give <@&${role}>`,ephemeral: true})
await channellog.send({embeds: [Give]})
}}
if (button.customId === "TEST2") {
    let channellog = client.channels.cache.get(channel)
let role = "" // ايدي رتبة ثانية
let member = button.guild.members.cache.get(button.member.id)
let rolW = button.guild.members.cache.get(button.member.id).roles.cache.get(role)
if (rolW) {
member.roles.remove(role)
const Remove = new Discord.MessageEmbed()
.setAuthor({name: `${button.member.user.tag}`, iconURL: button.member.user.avatarURL({dynamic:true})})
.setDescription(`> **Done Remove Role <@&${role}> From ${button.member}**`)
.setColor('ff0000')
await button.reply({content: `Done Remove <@&${role}>`, ephemeral: true})
await channellog.send({embeds:[Remove]})
}
if (!rolW) {
let channellog = client.channels.cache.get(channel)
member.roles.add(role)
const Give = new Discord.MessageEmbed()
.setAuthor({name: `${button.member.user.tag}`, iconURL: button.member.user.avatarURL({dynamic:true})})
.setDescription(`> **Done Add Role <@&${role}> To ${button.member}**`)
.setColor('ffe600')
await button.reply({content: `Done Give <@&${role}>`,ephemeral: true})
await channellog.send({embeds: [Give]})
}}
if(button.customId === "TEST3") {
let channellog = client.channels.cache.get(channel)
let role = "" // ايدي رتبة ثالثة
let member = button.guild.members.cache.get(button.member.id)
let rolW = button.guild.members.cache.get(button.member.id).roles.cache.get(role)
if (rolW) {
member.roles.remove(role)
const Remove = new Discord.MessageEmbed()
.setAuthor({name: `${button.member.user.tag}`, iconURL: button.member.user.avatarURL({dynamic:true})})
.setDescription(`> **Done Remove Role <@&${role}> From ${button.member}**`)
.setColor('ff0000')
await button.reply({content: `Done Remove <@&${role}>`, ephemeral: true})
await channellog.send({embeds:[Remove]})
}
if (!rolW) {     
member.roles.add(role)
const Give = new Discord.MessageEmbed()
.setAuthor({name: `${button.member.user.tag}`, iconURL: button.member.user.avatarURL({dynamic:true})})
.setDescription(`> **Done Add Role <@&${role}> To ${button.member}**`)
.setColor('ffe600')
await button.reply({content: `Done Give <@&${role}>`,ephemeral: true})
await channellog.send({embeds: [Give]})
}}
if(button.customId === "TEST4") {
let channellog = client.channels.cache.get(channel)
let role = "" // ايدي رتبة رابعة
let member = button.guild.members.cache.get(button.member.id)
let rolW = button.guild.members.cache.get(button.member.id).roles.cache.get(role)
if (rolW) {
member.roles.remove(role)
const Remove = new Discord.MessageEmbed()
.setAuthor({name: `${button.member.user.tag}`, iconURL: button.member.user.avatarURL({dynamic:true})})
.setDescription(`> **Done Remove Role <@&${role}> From ${button.member}**`)
.setColor('ff0000')
await button.reply({content: `Done Remove <@&${role}>`, ephemeral: true})
await channellog.send({embeds:[Remove]})
}
if (!rolW) {     
member.roles.add(role)
const Give = new Discord.MessageEmbed()
.setAuthor({name: `${button.member.user.tag}`, iconURL: button.member.user.avatarURL({dynamic:true})})
.setDescription(`> **Done Add Role <@&${role}> To ${button.member}**`)
.setColor('ffe600')
await button.reply({content: `Done Give <@&${role}>`,ephemeral: true})
await channellog.send({embeds: [Give]})
}}
if(button.customId === "TEST5") {
let channellog = client.channels.cache.get(channel)
let role = "" // ايدي رتبة خامسة
let member = button.guild.members.cache.get(button.member.id)
let rolW = button.guild.members.cache.get(button.member.id).roles.cache.get(role)
if (rolW) {
member.roles.remove(role)
const Remove = new Discord.MessageEmbed()
.setAuthor({name: `${button.member.user.tag}`, iconURL: button.member.user.avatarURL({dynamic:true})})
.setDescription(`> **Done Remove Role <@&${role}> From ${button.member}**`)
.setColor('ff0000')
await button.reply({content: `Done Remove <@&${role}>`, ephemeral: true})
await channellog.send({embeds:[Remove]})
}
if (!rolW) {     
member.roles.add(role)
const Give = new Discord.MessageEmbed()
.setAuthor({name: `${button.member.user.tag}`, iconURL: button.member.user.avatarURL({dynamic:true})})
.setDescription(`> **Done Add Role <@&${role}> To ${button.member}**`)
.setColor('ffe600')
await button.reply({content: `Done Give <@&${role}>`,ephemeral: true})
await channellog.send({embeds: [Give]})
}}
})  