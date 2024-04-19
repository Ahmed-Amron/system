const { Message, ShardClientUtil} = require("discord.js");
const {owners } = require(`${process.cwd()}/config`);
const drb = require(`pro.db`);
module.exports = {
    name: "word",
    aliases: ["word"],
    description: "A simple word command.",
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     */
    run: async (client, message) => {

        const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command word = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);
const isOwner = owners.includes(message.author.id);

if (!isAuthorAllowed && message.author.id !== db && !isOwner) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react(`❌`);
}
      
        const args = message.content.split(" ");
        const word = args[1];
      //  if (!message.member.permissions.has(`ADMINISTRATOR`)) return;
        if (!word) return;
        let words = drb.get(`word_${message.guild.id}`);

        if (!Array.isArray(words)) { words = []; }
        words.push(word);
        drb.set(`word_${message.guild.id}`, words);
        message.react(`✅`);
    }
}