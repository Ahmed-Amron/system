const { Client, intents, Collection, MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require("discord.js");
const client = new Client({ intents: 32767 })
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('server started');
});
const fs = require("fs")
const ms = require(`ms`)
const Discord = require("discord.js")
const { prefix, owners } = require(`${process.cwd()}/config`);
const config = require(`${process.cwd()}/config`);
const Data = require("pro.db")
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require(`${process.cwd()}/config`);
require("./handler")(client);
client.prefix = prefix;
var _0x64d9=["\x74\x6F\x6B\x65\x6E","\x65\x6E\x76","\x6C\x6F\x67\x69\x6E"];
client[_0x64d9[2]](process[_0x64d9[1]][_0x64d9[0]])  
require("events").EventEmitter.defaultMaxListeners = 9999999;
client.on("ready", async () => {
  console.log(
    `Name : ${client.user.tag}
ID : ${client.user.id}
Ping : ${client.ws.ping}
Prefix : ${client.prefix}
Server : ${client.guilds.cache.size}
Members : ${client.users.cache.size}
Channels : ${client.channels.cache.size}`)
});
//
const Jimp = require('jimp');
client.on('messageCreate', async function (Message) {
   try {
      if (Message.content.startsWith(prefix + 'change')) {
         let imageUrl;
         if (Message.attachments.size > 0) {
            imageUrl = Message.attachments.first().url;
         } else if (Message.content === prefix + 'change') {
            imageUrl = Message.author.displayAvatarURL({ format: 'png' });
         } else {
            imageUrl = Message.content.split(' ')[1];
         }
         if (!imageUrl) return;
         const image = await Jimp.read(imageUrl);
         image.greyscale();
         const convertedImageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
         const Image = new MessageAttachment(convertedImageBuffer, 'converted-image.png');
         Message.reply({ files: [Image] });
      }
   } catch {
      return
   }
});



/*


const Canvas = require('@napi-rs/canvas');
var { inviteTracker } = require("discord-inviter");
tracker = new inviteTracker(client);
tracker.on('guildMemberAdd', async (member,inviter) => {
  let Channel = member.guild.channels.cache.find(Channel => Channel.id === '1136009294014320712')
  if(!Channel) return;
const canvas = Canvas.createCanvas(868, 427);
const context = canvas.getContext('2d');
const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/1131424140792963243/1140217838460743720/welcme..png');
context.drawImage(background, 0, 0, canvas.width, canvas.height);
const avatar = await Canvas.loadImage(member.user.displayAvatarURL({size:1024}));
const canvas1 = Canvas.createCanvas(512, 512);
const ctx = canvas1.getContext('2d')
ctx.beginPath();
ctx.arc(255, 255, 255, 0, Math.PI * 2);
ctx.clip();
await ctx.drawImage(avatar, 0, 0, canvas1.width, canvas1.height)
let circle = canvas1.encodeSync('png')
if (circle) {circle = await Canvas.loadImage(circle)
context.drawImage(circle, 230, canvas.height / 2 - 121, 270,270)}
const attachment = new MessageAttachment(await canvas.encode('png'), 'profile-image.png' );
Channel.send({files: [attachment]}).then((msg) => {
    msg.channel.send({
      content: `
***' Hey, there ..*** 
***u coming by  : <@!${inviter.id}>,,***`,
    })
  })})


*/





process.on("unhandledRejection", (reason, promise) => { return })
process.on("uncaughtException", (err, origin) => { return })
process.on('uncaughtExceptionMonitor', (err, origin) => { return });
process.on('multipleResolves', (type, promise, reason) => { return })


