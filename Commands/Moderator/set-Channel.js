const dub = require("pro.db");
const {owners } = require(`${process.cwd()}/config`);
module.exports = {
  name: "cline",
  description: "To set channel room",
  usage: "!set-channel <channel>",
  run: async (client, message, args) => {



        const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command cline = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);
const isOwner = owners.includes(message.author.id);

if (!isAuthorAllowed && message.author.id !== db && !isOwner) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react(`❌`);
}

    
    
      //  if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply(`**😕 - You don't have permission**`);
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(message.content.split(" ")[1])

    if (!channel) {
      return message.reply("**يرجى ارفاق منشن الشات .**");
    }

    let channels = await dub.get("Channels") || [];

    if (channels.includes(channel.id)) {
      return message.reply(`The channel "${channel.name}" is already in the list.`);
    }

    channels.push(channel.id);
    dub.set("Channels", channels);

    message.react(`✅`);
  },
};
  