up
require('events').EventEmitter.defaultMaxListeners = 50;
const { Discord, Client, Collection,MessageSelectMenu, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require("discord.js");
  const client = new Client({
  intents: 32767,
  });
const config = require('./config')
////////////////////////////////express////////////////////////////////////////
const express = require('express')
const app = express()
app.get('/', function (req, res) {
res.send('Hello World')
})
app.listen(3000)

////////////////////////////////Ready////////////////////////////////////////
client.on('ready', () => {
console.log(`[API] Logged in as ${client.user.username}`);
client.user.setStatus(`dnd`)
client.user.setActivity(`Replit project`)
})
////////////////////////////////mongoose////////////////////////////////////////
// get mongo driver

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.mongoose, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
}).on('error', (error) => {
  console.log('MongoDB connection error:', error);
});


const default_prefix = '!';
const serverPrefixSchema = new mongoose.Schema({
  serverId: String,
  prefix: String
});

const balanceSchema = new mongoose.Schema({
  _id: String,
  balance: Number
});

////////////////////////////////models////////////////////////////////////////
const Balance = require('./models/balanceModel');
const AntibotsModel  = require('./models/antibotsModel');
const BlacklistModel  = require('./models/blacklistModel');
////////////////////////////////Start////////////////////////////////////////
const ServerPrefix = mongoose.model('ServerPrefix', serverPrefixSchema);
client.on('messageCreate', async message => {
    let owners = config.None
  if (!message.guild) return;
  user = message.author
  let serverPrefix = await ServerPrefix.findOne({ serverId: message.guild.id });
  if (!serverPrefix) {
    const newServerPrefix = new ServerPrefix({ serverId: message.guild.id, prefix: default_prefix });
    await newServerPrefix.save();
    serverPrefix = newServerPrefix;
  }

  const balance = await Balance.findOne({ _id: user.id });

  // Split the command and arguments
  const args = message.content.slice(serverPrefix.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'setprefix') {
    if (!owners.includes(message.user.id)) {
      return message.reply({ content: 'You do not have permission to use this command.', allowedMentions: { repliedUser: false } });
    }
    const newPrefix = args[0];
    if (!newPrefix) {
      return message.reply({ content: 'You need to specify a new prefix.', allowedMentions: { repliedUser: false } });
    }
    serverPrefix.prefix = newPrefix;
    await ServerPrefix.updateOne({ serverId: message.guild.id }, { prefix: newPrefix });
    const embed = new MessageEmbed()
      .setDescription(`This server's prefix is now \`\`${newPrefix}\`\`. Commands must now use \`\`${newPrefix}\`\` as their prefix. Use \`\`${newPrefix}help\`\` for help.`)
    message.channel.send({ embeds: [embed] });
    return;
  }if (message.content.startsWith(serverPrefix.prefix + "antibots on")) {
    if (message.member.id !== message.guild.ownerId) return message.react('❌');
    const on = new MessageEmbed()
      .setDescription(`**AntiBots has been enabled**`)
      .setFooter(client.user.tag, client.user.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
      .setTimestamp();
    await message.reply({ embeds: [on], allowedMentions: { repliedUser: false } });
    const antibots = await AntibotsModel.findOne({ guildId: message.guild.id });
    if (!antibots) {
      const newAntibots = new AntibotsModel({
        guildId: message.guild.id,
        onoff: "On"
      });
      await newAntibots.save();
    } else {
      antibots.onoff = "On";
      await antibots.save();
    }
  } else
  if (message.content.startsWith(serverPrefix.prefix + "antibots off")) {
    if (message.member.id !== message.guild.ownerId) return message.react('❌');
    const off = new MessageEmbed()
      .setDescription(`**AntiBots has been Disabled**`)
      .setFooter(client.user.tag, client.user.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
      .setTimestamp();
    await message.reply({ embeds: [off]});
    const antibots = await AntibotsModel.findOne({ guildId: message.guild.id });
    if (!antibots) {
      const newAntibots = new AntibotsModel({
        guildId: message.guild.id,
        onoff: "Off"
      });
      await newAntibots.save();
    } else {
      antibots.onoff = "Off";
      await antibots.save();
    }
  } else
  if (message.content.startsWith(serverPrefix.prefix + "blacklist")) {
    if (!owners.includes(message.user.id)) {
      return message.reply({
        content: `Only administrators can use this command`,
        allowedMentions: { repliedUser: false }
      });
    }
    const user = message.mentions.users.first();
    if (!user) {
      return message.reply({
        content: `❌ Error | You need to mention a member`,
        allowedMentions: { repliedUser: false }
      });
    }

    const blacklistedUser = await BlacklistModel.findOne({ userId: user.id });
    if (blacklistedUser) {
      return message.reply({
        content: `❌ Error | This member is already blacklisted`,
        allowedMentions: { repliedUser: false }
      });
    }

    const newBlacklistedUser = new BlacklistModel({
      userId: user.id
    });
    await newBlacklistedUser.save();
    message.reply({
      content: `✅ Success | ${user} has been added to the blacklist`,
      allowedMentions: { repliedUser: false }
    });
  } else if (message.content.startsWith(serverPrefix.prefix + "unblacklist")) {
    if (!owners.includes(message.user.id)) {
      return message.reply({
        content: `Only administrators can use this command`,
        allowedMentions: { repliedUser: false }
      });
    }
    const user = message.mentions.users.first();
    if (!user) {
      return message.reply({
        content: `❌ Error | You need to mention a member`,
        allowedMentions: { repliedUser: false }
      });
    }

    const blacklistedUser = await BlacklistModel.findOne({ userId: user.id });
    if (!blacklistedUser) {
      return message.reply({
        content: `❌ Error | This member is not in the blacklist`,
        allowedMentions: { repliedUser: false }
      });
    }

    await BlacklistModel.deleteOne({ userId: user.id });
    message.reply({
      content: `✅ Success | ${user} has been removed from the blacklist`,
      allowedMentions: { repliedUser: false }
    });
  }
});

client.on("guildMemberAdd", async user => {
  const antibots = await AntibotsModel.findOne({ guildId: user.guild.id });
  if (!antibots || antibots.onoff === "Off") return;
  if (user.user.bot) {
    user.kick("Anti bots protection").then(kickedBot => {
      const logChannel = user.guild.channels.cache.find(channel => channel.name === "bot-logs");
      if (logChannel) {
        const kickMessage = `The bot ${kickedBot.user.tag} has been kicked from ${user.guild.name} due to Anti bots protection.`;
        logChannel.send(kickMessage).catch(err => {
          console.error(err);
        });
      }
    }).catch(err => {
      console.error(err);
    });
  }
});





process.on("unhandledRejection", error => {
  console.log(error)
});
process.on("rejectionHandled", error => {
  console.log(error)
});
process.on("uncaughtException", error => {
  console.log(error)
});



console.log(process.version)
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
require("./handlers")(client);
client.login(process.env.token);