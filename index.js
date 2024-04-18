const express = require("express");
const app = express();

app.listen(() => console.log("youssefgames bot system pro pot v1"));
require('events').EventEmitter.defaultMaxListeners = 30;
app.use('/ping', (req, res) => {
  res.send(new Date());
});
///ممنوع السرقة youssefgamesG
///thx naar cods 
const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const parse = require ("parse-ms");
const probot = require("probot-tax");
const db = require('quick.db');


/////////////////
///ممنوع السرقة youssefgames
const prefix = "="//بيرفكس الى تبيه
const developers = "723085516437979156"//الايدي حقك


//play
client.on("ready", () => {
  client.user.setActivity(`=help`)//غير الحالة الي تريد
});

//اشياء للتغيير

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "rules")){
    if (badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")

    var embed = new Discord.MessageEmbed()
    .setTitle(`rules of ${badboy.guild.name}`)
.setDescription(`
1-ممنوع السب
2-ممنوع السبام 
3-ممنوع نشر الروابط
4-احترام الأعضاء 
5-بدك اي مساعدة كلم اي واحد عنده رانك @Owner Ship   في الخاص او الشات العام 
6-لا تشتري من احد إلا اللي يكون عنده رانك تاجر @seller
7-اكتب الأوامر اللي بدك اياها في شات #اوامــر-الـبـوتـات
8-ممنوع طلب الرانكات كل رانك له سعر والرانكات مش لعبة
9-عدم التنمر على اي احد من الأعضاء 
10-ممنوع تخش الرومات الصوتية للإزعاج
11-ممنوع انفايتات للسيرفرات داخل السيرفر


`)
.setColor("BLUE")

    .setThumbnail(badboy.guild.iconURL({dynamic: true}))
    badboy.channel.send(embed)
  }
});

client.on("guildMemberAdd", member =>{
let role = member.guild.roles.cache.find(role => role.name == "اسم الرتبة") // هنا تحط اسم الرتبة 
if (!role) return;
  member.roles.add(role);

});

client.on('message', msg => {
  if (msg.content === 'اهلا') {
    msg.reply('مرحبا بك');
  }
});
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('ولكم نورت');
  }
});
client.on('message', msg => {
  if (msg.content === 'كيف الحال') {
    msg.reply('الحمد الله نشكره على نعمه');
  }
});
client.on('message', msg => {
  if (msg.content === 'شكرا') {
    msg.reply('الشكر الله حياك باي وقت');
  }
});
client.on('message', msg => {
  if (msg.content === 'استغفر الله') {
    msg.reply('واتوب اليه');
  }
});
client.on('message', msg => {
  if (msg.content === 'هلا انا عضو جديد') {
    msg.reply('هلا والله نورة السرفر بوجودك');
  }
});

client.on('message', msg => {
  if (msg.content === 'ههههههه') {
    msg.reply('انشاء');
  }
});
//commends common



//profile
client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}pr` || command == `${prefix}profile` || command == `p`) {  

      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
      let uus = message.mentions.users.first() || message.author;
  
      message.guild.fetchInvites().then(invites => {
  
        let personalInvites = invites.filter(
          i => i.inviter.id === message.mentions.users.first() || message.author.id
        );
        
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      
        var heg;
        if (men) {
          heg = men
        } else {
          heg = message.author
        }
        var mentionned = message.mentions.members.first();
        var h;
        if (mentionned) {
          h = mentionned
        } else {
          h = message.member
        }
  
  
        var id = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setImage(`https://api.probot.io/profile/${uus.id}`) 

        message.channel.send(id)
      }
      );
    }
    });



//bans

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}bans` || command == `${prefix}bn` || command == `b`) {  
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`:small_orange_diamond: **Server Ban List :** ${bans.size} `))
      .catch(console.error);
  }
});




//credit

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}credit` || command == `${prefix}cre` || command == `c`) { //@ニロ#3892
 let user = niro.mentions.users.first() || niro.author;//@ニロ#3892
    let bal = db.fetch(`money_${user.id}`)//@ニロ#3892
    if (bal === null) bal = 0;//@ニロ#3892
      return niro.channel.send(`:bank: | **${user.username} , your account balance is** \`\`$${bal}\`\`.`)//@ニロ#3892
}});//@ニロ#3892

//daily
client.on("message", async niro =>{//@ニロ#3892
let command = niro.content.toLowerCase().split(" ")[0];
if (command == `${prefix}daily` || command == `${prefix}dai` || command == `d`) {
 //@ニロ#3892
    let timeout = 86400000/2 //by Ashour
  let amount = Math.floor(Math.random() * 1000) + 1;//@ニロ#3892
    let daily = await db.fetch(`daily_${niro.author.id}`);//@ニロ#3892
    if (daily !== null && timeout - (Date.now() - daily) > 0) {//@ニロ#3892
        let time = ms(timeout - (Date.now() - daily));//@ニロ#3892
        niro.channel.send(`:rolling_eyes: **| ${niro.author.username}, تستطيع اخذ كردت بعد  ${time.hours}h ${time.minutes}m ${time.seconds}s .** `)//@ニロ#3892
    } else {
    niro.channel.send(`:moneybag: **${niro.author.username}, لقد حصلت على :dollar: ${amount} كردت!**`)//@ニロ#3892
    db.add(`money_${niro.author.id}`, amount)//@ニロ#3892
    db.set(`daily_${niro.author.id}`, Date.now())//@ニロ#3892
    }}});//@ニロ#3892

//trans

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}trans` || command == `${prefix}trn` || command == `t`) { //@ニロ#3892
    let args = niro.content.split(" ").slice(2); //@ニロ#3892
    let user = niro.mentions.members.first() //@ニロ#3892
    let member = db.fetch(`money_${niro.author.id}`)//@ニロ#3892
    if (!user) {//@ニロ#3892
        return niro.channel.send(`:rolling_eyes: | ** ${niro.author.username}, I Cant Find a User**`)
    }//@ニロ#3892
    if (!args) {
        return niro.channel.send(`:rolling_eyes: | **${niro.author.username}, type the credit you need to transfer!**`)//@ニロ#3892
    }
    if (niro.content.includes('-')) { //@ニロ#3892
      return niro.channel.send(`:rolling_eyes: | **${niro.author.username}, Type a Amount \`Not Negative\`**`)//@ニロ#3892
    }
    if (member < args) {//@ニロ#3892
        return niro.channel.send(`:thinking: ** | ${niro.author.username}, Your balance is not enough for that!**`)//@ニロ#3892
    }
    if(isNaN(args)) 
return niro.channel.send(`:rolling_eyes: Numbers Only`)//@ニロ#3892
    niro.channel.send(`:moneybag: **| ${niro.author.username}, has transferred \`$${args}\` to ${user}**`)//@ニロ#3892
    user.send(`:atm:  |  Transfer Receipt \n\`\`\`You have received $${args} from user ${niro.author.username} (ID: ${user.id})\`\`\``)//@ニロ#3892
    db.add(`money_${user.id}`, args)//@ニロ#3892
    db.subtract(`money_${niro.author.id}`, args)//@ニロ#3892
}});





//id

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}id` || command == `id`) { 
    var user = message.guild.member (message.mentions.members.first() || message.author);
      const embed = new Discord.MessageEmbed()
  .setColor("RANDOM") 
   .addField(`ID USER : [ ${user.id} ]`,`${user.user}`)
   .setThumbnail(user.user.avatarURL())
  .setFooter(`- Requested By: ${message.author.tag}`)
  message.channel.send({embed});
      }
  });

  

  
//user

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}user` || command == `${prefix}us` || command == `u`) { 
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.username,message.author.avatarURL())
  .setThumbnail(message.author.avatarURL())
  .setTitle("Info User")
  .addField('``Name``', ` ${message.author.tag} `, true)
  .addField('``ID``', ` ${message.author.id} `, true)  
  .addField('``Created At``', ` ${message.author.createdAt.toLocaleString()} `, true)
  .setTimestamp(); 
  message.channel.send(embed)
  }
  });

  

//bot

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}bot` || command == `bot`) { 
const embed = new Discord.MessageEmbed()
.setColor("bleu")
.setTitle(` ${client.user.username} `)
.addField('``My Name``' , ` ${client.user.tag}` , true)
.addField('``servers``', ` ${client.guilds.cache.size} `, true)
.addField('``channels``', ` ${client.channels.cache.size} `, true)
.addField('``Users``', ` ${client.users.cache.size} `, true)
.addField('``My ID``' , ` ${client.user.id} ` , true)

msg.channel.send(embed);
}
});


///ممنوع السرقة youssefgames

///ممنوع السرقة youssefgames


//boost and level

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}boost` || command == `${prefix}bost` || command == `boost`) { 
    
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 
    
    let level = badboy.guild.premiumTier === 0 ? "No Level" : `${badboy.guild.premiumTier}`;
 
    let boost = badboy.guild.premiumSubscriptionCount;
    
    
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`Boost of ${badboy.guild.name}`)

.addField("Boost", `${boost}`)
.addField("Level", `${level}`)
 .setColor("BLUE")
 
 badboy.channel.send(embed)
 
  }
});

///ممنوع السرقة youssefgames
//rules حط الالقوانين الى تحبها





//fun commend

//blur

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "blur")) {
        var avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Blur().getImage(`${avatar}`,);
        let attach = new Discord.MessageAttachment(img, "Blur.png");;
        message.channel.send(attach)
    }
});



//rip

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "rip")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Rip().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Ri.png");;
        message.channel.send(attach)
    }
});
//spank

const DIG = require("discord-image-generation");
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "spank")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Spank().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Spank.png");;
        message.channel.send(attach)
    }
});

//hug

client.on('message', russi => {
  if(russi.content.startsWith(prefix + "hug")){
let member = russi.mentions.users.first();
if(!member) return russi.reply("**Please Mention Member**")
    let hugs = [
      'https://cdn.discordapp.com/attachments/782532317729652757/797086131018924032/tenor.gif',
      

      ];
let hug1 = hugs[Math.floor(Math.random() * hugs.length)];

var embed = new Discord.MessageEmbed()
.setTitle("HUG")
.setColor("RANDOM")
.setImage(`${hug1}`)
.setFooter(`you hug by ${russi.author.username}`)
russi.channel.send(embed)
 
  }
});

//gay


client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "gay")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Gay().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Gay.png");;
        message.channel.send(attach)
    }
});

//wanted

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "wanted")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Wanted().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Wanted.png");;
        message.channel.send(attach)
    }
});

//game

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "game")){
let args = badboy.content.split(" ").slice(0);
var user = badboy.mentions.users.first() || badboy.author;
    if (user.bot || !badboy.guild) return;

 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
let win = [
 ':upside_down: :upside_down: :upside_down:  win',
 ':upside_down: :face_with_raised_eyebrow: :zany_face: lose',
 ':upside_down: :face_with_raised_eyebrow: :upside_down: lose',
 ' :yum: :yum: :yum: win',
 ' :kissing_heart:  :kissing_heart:  :kissing_heart:  win', 
 ' :frowning2: :frowning2: :kissing_heart: lose',
 
  ];
            
            let an = win[Math.floor(Math.random() * win.length)];

  var embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${an}`)
 badboy.channel.send(embed)
  }

});

//kill

client.on('message', message => {
    if (message.content.startsWith(prefix + 'kill')) {
        let user = message.mentions.users.first();
        if (!user) {
           message.reply(`You've to mention user you want to kill.`)
        }
        let kill = [                   'https://steamuserimages-a.akamaihd.net/ugc/782985908083449716/7D8D3247449A582D75182D76E083F3C11F7A9A1F/','حط الصورة الي تبغاها',            ``        ];
        message.channel.send({
            embed: new Discord.MessageEmbed()
               .setDescription(`${message.author} killed **${user}**`)
            .setImage(
                kill[Math.floor(Math.random() * kill.length)]
            )
        });
    }
});

//iq
 




//trash

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "trash")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Trash().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Trash.png");;
        message.channel.send(attach)
    }
});

//slap

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "slap")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Batslap().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "slap.png");;
        message.channel.send(attach)
    }
});

//winer

client.on('message',vest=>{
  let winer1 = vest.content.split(" ")[1]
 let winer2  = vest.content.split(" ")[2]
  let score1  = (Math.floor (Math.random() * 40));
  let score2  = (Math.floor (Math.random() * 40));
  if(vest.content.startsWith(prefix+'winer')){
  let usage =  new Discord.MessageEmbed()
      .setTitle(' ERROR :')
      .setColor("Gray")
      .setDescription(`
      Usage :
      ${prefix}winer <palyer1> <palyer 2>
 
      Ex :
      ${prefix}winer ${vest.author} <palyer2>
      `)
      .setAuthor(vest.author.username
  ,vest.author.avatarURL())
 
      .setFooter(`Requsted by: ${vest.author.username}`)
    if(!winer1||!winer2) return vest.channel.send(usage)
if(score2 > score1){
        let fff = new Discord.MessageEmbed()
      .setTitle(' Winer  :')
      .setColor("Gray")
      .setAuthor(vest.author.username
  ,vest.author.avatarURL())
 
      .setDescription(`
     Winer{${winer2} : ${score2}}
 
 
     Lozer {${winer1}: ${score1}}
 
 
      `)
      vest.channel.send(fff)
 
}else {if(score1 > score2 ){
       let ff = new Discord.MessageEmbed()
      .setTitle(` Winer  :`)
      .setColor("Gray")
 
      .setAuthor(vest.author.username
  ,vest.author.avatarURL())
 
      .setDescription(`
     Winer{${winer1}: ${score1} }
 
 
     Lozer {${winer2} : ${score2}}
 
 
      `)
      vest.channel.send(ff)
 
} else { if(score1=score2){
      let equal = new Discord.MessageEmbed()
      .setTitle(' Equal :')
      .setColor("Gray")
      .setAuthor(vest.author.username
  ,vest.author.avatarURL())
 
      .setDescription(`
     Equal{ ${winer1}: ${score1} }
 
 
     Equal {${winer2} : ${score2} }
 
 
      `)
      vest.channel.send(equal)
}}
 
}
 
 
 
}
 
});





//commend admin

//ca

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}ca`  || command == `ca`) { 
    if(!badboy.member.hasPermission("MANAGE_GUILD")) return badboy.reply("حرك")
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 
    let args = badboy.content.split(" ").slice(1).join(" ")
if(!args) return badboy.reply("اعطي اسم لكتغري حقك")
    let embed = new Discord.MessageEmbed()
    .setTitle(`Are you Sure `)
   .setDescription(`are you Sure to make a category if you Sure type yes`)
   badboy.channel.send(embed).then((m) => {
      badboy.channel.awaitMessages(response => response.content === 'yes', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
          .then((collected) => {

badboy.guild.channels.create(`${args}`, { type: "category" })
badboy.channel.send("Done")
        
 
       .catch(() => {

       })
       
          })
          })
   }
  });

  //cv

  client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}cv`|| command == `cv`) { 
    if(!badboy.member.hasPermission("MANAGE_GUILD")) return badboy.reply("انت لاتملك صلاحيات MANAGE_GUILD")
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 
    let args = badboy.content.split(" ").slice(1).join(" ")
if(!args) return badboy.reply("اعطي اسم لروم حقك")
    let embed = new Discord.MessageEmbed()
    .setTitle(`Are you Sure `)
   .setDescription(`are you Sure to make a room if you Sure type yes`)
   badboy.channel.send(embed).then((m) => {
      badboy.channel.awaitMessages(response => response.content === 'yes', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
          .then((collected) => {

badboy.guild.channels.create(`${args}`, { type: "voice" }).then(badboyy => {
  badboy.channel.send("Done")
        })
 
       .catch(() => {

       })
       
          })
          })
   }
  });

  //cc
///ممنوع السرقة youssefgames
 client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}cc`  || command == `cc`) { 
    if(!badboy.member.hasPermission("MANAGE_GUILD")) return badboy.reply("لاملك صلاحيات")
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 
    let args = badboy.content.split(" ").slice(1).join(" ")
if(!args) return badboy.reply("اعطي اسم لروم حقك")
    let embed = new Discord.MessageEmbed()
    .setTitle(`Are you Sure `)
   .setDescription(`are you Sure to make a room if you Sure type yes`)
   badboy.channel.send(embed).then((m) => {
      badboy.channel.awaitMessages(response => response.content === 'yes', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
          .then((collected) => {

badboy.guild.channels.create(`${args}`, { type: "text" }).then(badboyy => {
  badboy.channel.send("Done")
        })
 
       .catch(() => {

       })
       
          })
          })
   }
  });




//lock
client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}lock` || command == `${prefix}lc` || command == `lock`) {
        let lockPermErr = new Discord.MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_CHANNELS") ) return message.channel.send(lockPermErr);

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.channel.send(`Done | Channel Locked!`);
    }
     }); 

        
  //unlock
client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}unlock` || command == `${prefix}unlc` || command == `unlock`) {
        let lockPermErr = new Discord.MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_CHANNELS") ) return message.channel.send(lockPermErr);

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.channel.send(`Done | Channel Unlocked!`);
    }
   }); 

    
    
  

//hide 
client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}hide` || command == `${prefix}hd` || command == `hide`) {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : false
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
               .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done Hide This Room ${message.channel}**`)
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});

//show

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}show` || command == `${prefix}sh` || command == `show`) {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
               VIEW_CHANNEL: true
            }).then(() => {
                const embed = new Discord.MessageEmbed()
                .setColor("#RANDOM")
                .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done Show This Room ${message.channel}**`)
 
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});

//clear

client.on("message",async message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}clear` || command == `${prefix}مسح` || command == `${prefix}cr`) { 
message.delete({timeout: 0})
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
 
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send(`\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``).then(messages => messages.delete(5000))
if(!messagecount) messagecount = '100';
    message.channel.messages.fetch({limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
    message.channel.send(`\`\`\`js
${msgs.size} عدد الرسائل التي تم مسحها
\`\`\``).then(messages => 
messages.delete({timeout:3000}));
    })
  }    
});



//waren

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}waren` || command == `${prefix}war` || command == `waren`) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission `);
 let args = message.content.split(" ").slice(1);
 
    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp();
 
    if (!user) {
        embed.addField("**منشن الشخص** ", ` ${message.author.tag}?`)
            .setTimestamp();
        return message.channel.send(embed);
    } if (!reason) {
        embed.addField("**لماذا تريد اعطاء الشخص أنذار** ? ", ` ${user.tag}?`)
        return message.channel.send(embed);
    }
    embed.addField("**تم ارسال الانذار** ", ` ${user.tag}!`)
        .setTimestamp();
    message.channel.send(embed);
    const embed1 = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp()
        .addField("لقد اخذت انذار", `
 
          السبب : **${reason}**`)
        .setFooter(`
        انذار بواسطة ${message.author.tag}.`);
    user.send(embed1);
    message.delete();
}
});



//mute

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}mute` || command == `${prefix}mu` || command == `mute`) {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MUTE_MEMBERS\`**`);
let mention = message.mentions.members.first();
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!role) {
    message.guild.roles.create({
        data: {
            name: 'Muted',
            permissions: [],
            color: 'random'
        }
    })
}
if(!mention) return message.channel.send(`**Usage: ${prefix}mute \`<@user>\`**`);
message.guild.channels.cache.forEach(c => {
c.updateOverwrite(role , {
SEND_MESSAGES: false, 
ADD_REACTIONS: false
});
});
mention.roles.add(role)
message.channel.send(`**✅ - Successfully Muted ${mention.user.tag}**`)
}
});

//unmute

client.on("message",message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}unmute` || command == `${prefix}unmu` || command == `unmute`) {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
let mention = message.mentions.members.first();
var args = message.content.split(" ").slice(2).join(" ")
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!mention) return message.channel.send(`**Usage: ${prefix}unmute \`<@user>\` **`);
if (member.user.id === client.user.id) return message.channel.send(`**لم اجد الشخص**`);
mention.roles.remove(role)
message.channel.send(`**✅ - تم بنجاح ${mention.user.tag} **`)
let mens = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setTitle(`You Have Been UnMuted`)
.setDescription(`**
 In Server : ${message.guild.name}
 With Reson : ${args || "No reason provided."}
 By : ${message.author}
**`)
.setColor("GREY")
.setFooter('Id ' + message.author.id, message.author.avatarURL())
member.send(mens);
}
});


//help

client.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) {
    let pages = [`
     **__Common commands__** :busts_in_silhouette:

     **__Prefix__:${prefix} **

     ${prefix}help يعرض اوامر البوت

     ${prefix}rules لمعرفة القوانين

     ${prefix}profile يعرض بروفايلك

     ${prefix}user يعرض معلومات الشخص

     ${prefix}id  لمعرفة الايدي حقك

     ${prefix}credit لاضهار المال

     ${prefix}daily لاخذ راتب يومي 

     ${prefix}trans لتحويل كردة

     ${prefix}server لاضهار معلومات عن السرفر

     ${prefix}bot معلومات عن البوت

     ${prefix}bans لتعرف كم واحد تبند

     ${prefix}boost لمعرفة لفل و عدد بوستات السرفر
      `
    ,`
      **__Fun commands__ :joy: **

     ${prefix}trash

     ${prefix}slap

     ${prefix}hug

     ${prefix}gay

     ${prefix}wanted

     ${prefix}winer

     ${prefix}game

     ${prefix}spank

     ${prefix}kill

     ${prefix}blur

     ${prefix}rip
       `
    ,`
     **__Admin only__ :tools: **

    ${prefix}unmute يشيل الاسكات

    ${prefix}mute يعطي ميوت

    ${prefix}warn يرسل انذار

    ${prefix}clear يمسح الشات

    ${prefix}hide اخفاء روم

    ${prefix}show اظهار روم

    ${prefix}lock قفل الروم

    ${prefix}unlock فتح الشات

    ${prefix}cv انشاء روم صوتي

    ${prefix}cc انشاء روم كتابي

    ${prefix}ca category انشاء     
    `]
     let page = 1;
     
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page-1])
     
        message.channel.send(embed).then(msg => {
     
            msg.react('◀').then( r => {
                msg.react('▶')
     
               setTimeout(() => {
            msg.delete
        }, 60 * 1000)
     
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
     
     
            const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
     
     
     
            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            })
        })
        }
    });




 



client.login("Nzk2NDI0NTQzMzgzMTkxNTg0.X_XuJw.fYPqPVbp-LbNERwGqgw7OVxmVuY");