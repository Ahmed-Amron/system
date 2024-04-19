const {owners } = require(`${process.cwd()}/config`);
module.exports = {
    name: "restart",
    description: "Restarting",
    run: async (client, message) => {

const isOwner = owners.includes(message.author.id);
if (!isOwner)  return message.react(`❌`);
message.reply({ content : `**اعادة تشغيل البوت ..**`});
await client.destroy();
await client.login(process.env.token);
    }
};