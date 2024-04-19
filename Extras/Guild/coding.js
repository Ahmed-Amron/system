let client = require('../..')
const { Modal } = require("discord.js")
const   { MessageActionRow , MessageButton , MessageEmbed  } = require(`discord.js`)
const Data = require(`pro.db`)
const { prefix, owners } = require(`${process.cwd()}/config`);
const Discord = require(`discord.js`)
const fs = require(`fs`)

client.on('interactionCreate', async interaction => {
  try {
    const db = new require("pro.db");
  if (!interaction.isButton()) return;
  if (interaction.customId == 'Tic') {
    if (db.get(`User_${interaction.user.id}`) == true) {
      if (db.get(`User_${interaction.user.id}`) == true) return interaction.reply({ content : `**للأسفِ لمْ يمكنكَ فتحُ تذكرةً لعدمِ تقفيلِ تذكرةِ قديمهِ خاصةً بكَ** ${interaction.user}` , ephemeral : true})}
      db.set(`User_${interaction.user.id}`, true);
    const ticketData = db.get(`ticket_data_${interaction.guild.id}`);
    if (!ticketData) return;
    const { category, image, role } = ticketData;
    const channel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
      type: 'text',
      permissionOverwrites: [
        {
          id: interaction.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
        {
          id: interaction.user.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
        },
        {
          id: role,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
        },
      ],
      parent: interaction.guild.channels.cache.find(Categorys => Categorys.id === category),
    });

    const deleteButton = new MessageActionRow().addComponents(
      new MessageButton().setLabel('Delete Ticket').setStyle('SECONDARY').setCustomId('delete')
    );
    channel.send({ files: [image], content: `Here's your ticket, ${interaction.user}! `, components: [deleteButton] });
    interaction.reply({ content: `Ticket created! ${channel}`, ephemeral: true });
  }
  if (interaction.customId == 'delete') {
    if (interaction.member.permissions.has('MANAGE_CHANNELS')) {
      await interaction.channel.delete();
      if (db.has(`User_${interaction.user.id}`)) { db.delete(`User_${interaction.user.id}`); }
    } else {
      interaction.reply({ content: 'You do not have the required permissions to delete this ticket.', ephemeral: true });
    }
  } } catch (e) {
    console.log(e)
  }
});
///////////
/*
client.on("messageCreate", message => {
if (message.content.startsWith(prefix + "colors")|| message.content.startsWith(prefix + "الوان")) {
          let image =  Data.get("image_room");
  message.channel.send({ files:[ Colors ] });
}
});
*/
/////////////////////////////////////////////////////////////
var { inviteTracker } = require("discord-inviter"), tracker = new inviteTracker(client);
let packagejson = JSON.parse(fs.readFileSync('./rooms.json' , 'utf8'));
client.on('guildMemberRemove', async member => { 
  if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members == '') return;
	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1
	});
	const kickLog = fetchedLogs.entries.first();
let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members}`)
  if(!channel1) return;
if(!member.guild.id.includes(`${channel1.guild.id}`)) return;

	if (!kickLog.action.includes('MEMBER_KICK') && !member.user.id.includes(`${kickLog.target.id}`)){
    channel1.send(`**${member.user.tag} Left The Server 😥**`);
  }
	const { executor, target } = kickLog;

if(kickLog.action == 'MEMBER_KICK' && kickLog.target.id == `${member.user.id}`) {
let channel = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).kick}`)
  if(!channel) return;
if(!member.guild.id.includes(`${channel.guild.id}`)) return;
    let Embed = new Discord.MessageEmbed()
    .setTitle("New Member Kicked !")
    .setDescription(`**${member.user.tag} Was kicked by ${executor}**`)
        .setColor(`#101a3a`)
      .setTimestamp()
//      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138886169384472627/F4570260-9C71-432E-87CC-59C7B4B13FD4.png`)
		channel.send({embeds:[Embed]});
}  
});
tracker.on("guildMemberAdd", async (member, inviter) => { 
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members == '') return;
let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members}`)
  if(!channel1) return;
if(!member.guild.id.includes(`${channel1.guild.id}`)) return;
if(member.user.bot) return;
channel1.send(`**${member} Joined The Server \nBy : ${inviter} 🥳**`)
})
client.on("guildMemberAdd", async (member) => {
  	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
		type: 'BOT_ADD',
	});
  const BotLog = fetchedLogs.entries.first();
	const { executor, target } = BotLog;
if(member.user.bot) {
  let channel2 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).bots}`)
  if(!channel2) return;
if(!member.guild.id.includes(`${channel2.guild.id}`)) return;
  return channel2.send(`**${member} Joined The Server \nBy : ${executor}**`);
}
})  
client.on('guildBanAdd', async member => { 
  if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).ban == '') return;
	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_ADD',
	});
  const BanLog = fetchedLogs.entries.first();
	const { executor, target } = BanLog;
let channel = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).ban}`)
  if(!channel) return;
  if(!member.guild.id.includes(`${channel.guild.id}`)) return;
    let Embed = new Discord.MessageEmbed()
    .setTitle("New Member Banned ! ✈")
    .setDescription(`**${member.user.tag} Was Banned By ${executor}**`)
        .setColor(`#910000`)
      .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138892172574326874/82073587-11BA-4E4B-AC8F-8857CD89282F.png`)
		channel.send({embeds:[Embed]});
});
client.on('guildBanRemove', async member => { 
  if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).ban == '') return;
	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_REMOVE',
	});
  const BanLog = fetchedLogs.entries.first();
	const { executor, target } = BanLog;
let channel = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).ban}`)
  if(!channel) return;
  if(!member.guild.id.includes(`${channel.guild.id}`)) return;
    let Embed = new Discord.MessageEmbed()
    .setTitle("New Member Unbanned ! 🤗")
    .setDescription(`**${member.user.tag} Was Unbanned By ${executor}**`)
        .setColor(`#910000`)
      .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138891905283928174/551F8C85-8827-41AF-9286-256F63BE2129.png`)
		channel.send({embeds:[Embed]});
});
client.on('messageDelete', async message => {  
  if(message.author.bot) return;
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).messages == '') return;
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	}); 
	const deletionLog = fetchedLogs.entries.first();
let channel = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).messages}`)
    if(!channel) return;
if(!message.guild.id.includes(`${channel.guild.id}`)) return;
	const { executor, target } = deletionLog;
  if(executor.id == message.author.id){
    let embed = new Discord.MessageEmbed()
    .setTitle("Message Deleted ! ❌")
    .setDescription(`**Message Author : ${message.author.tag}\n\nMessage Content : ${message.content}**`)
    .setColor(`#0e4a48`)
      .setTimestamp()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138876390612144148/D301A2E9-13FD-48E5-93B9-CF7A2FAE42B8.png`)
    	channel.send({embeds: [embed]});
  } 
if(!executor.id.includes(`${message.author.id}`)){
 let embed1 = new Discord.MessageEmbed()
    .setTitle("Message Deleted !")
    .setDescription(`**Message Author : ${message.author.tag}\n\nMessage Content : ${message.content}\n\nDeleted By : ${executor}**`)
    .setColor(`#0e4a48`)
   .setTimestamp()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138876390612144148/D301A2E9-13FD-48E5-93B9-CF7A2FAE42B8.png`)
    	 channel.send({embeds: [embed1]});
}
}) 
client.on("messageUpdate", message => { 
  if(message.author.bot) return;
  if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).messages == '') return;
let channel = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).messages}`)
  if(!channel) return;
if(!message.guild.id.includes(`${channel.guild.id}`)) return;
let embed = new Discord.MessageEmbed()
  .setTitle("Message Edited ! ⚠")
  .setDescription(`**Old Message : ${message.content}\n\nNew Message : ${message.reactions.message.content}\n\nMessage Link : [here](${message.url})\n\nSent By : ${message.author}**`)
     .setColor(`#0e4a48`)
  .setTimestamp()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138875547066314772/0DB13224-1283-4BF9-B8F5-93975DE3F7C2.png`)
channel.send({embeds: [embed]})
})
client.on("channelCreate", async channel => {  
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels == '') return;
let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels}`)
  if(!channel1) return;
if(!channel.guild.id.includes(`${channel1.guild.id}`)) return;
	const fetchedLogs = await channel.guild.fetchAuditLogs({
		limit: 1,
		type: 'CHANNEL_CREATE',
	});
  	const CreateLog = fetchedLogs.entries.first();
	const { executor } = CreateLog;
  if(executor.bot) return;
let embed = new Discord.MessageEmbed()
  .setTitle("Channel Created ! ✅")
  .setDescription(`**Channel Name : ${channel.name}\n\nChannel ID : ${channel.id}\n\nCreated By : ${executor}**`)
        .setColor(`#857f99`)
  .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138891157208825876/07D149C2-6EAC-4543-B8C8-04F8B543EEA3.png`)
  channel1.send({embeds: [embed]})
})
client.on("channelDelete", async channel => { 
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels == '') return;
let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels}`)
  if(!channel1) return;
if(!channel.guild.id.includes(`${channel1.guild.id}`)) return;
	const fetchedLogs = await channel.guild.fetchAuditLogs({
		limit: 1,
		type: 'CHANNEL_DELETE',
	});
  	const CreateLog = fetchedLogs.entries.first();
	const { executor } = CreateLog;
  if(executor.bot) return;

  let embed = new Discord.MessageEmbed()
  .setTitle("Channel Deleted ! ❌")
  .setDescription(`**Channel Name : ${channel.name}\n\nChannel ID : ${channel.id}\n\nDeleted By : ${executor}**`)
        .setColor(`#857f99`)
    .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138891157523402772/40A15AD6-0C21-43A5-A70A-6ED69615C182.png`)
  channel1.send({embeds: [embed]})
})
client.on("channelUpdate", async (Old, New) =>{ 
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels == '') return;
let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels}`)
  if(!channel1) return;
if(!Old.guild.id.includes(`${channel1.guild.id}`)) return;
if(!New.guild.id.includes(`${channel1.guild.id}`)) return;
	const fetchedLogs = await New.guild.fetchAuditLogs({
		limit: 1,
		type: 'CHANNEL_UPDATE',
	});
	const fetchedLogs2 = await New.guild.fetchAuditLogs({
		limit: 1,
		type: 'CHANNEL_OVERWRITE_UPDATE	',
	});
  	const UpdateLog = fetchedLogs.entries.first();
	const { executor } = UpdateLog;
  	const UpdateLog2 = fetchedLogs2.entries.first();
  if(UpdateLog2.executor.bot) return;
  
if(Old.name != New.name){
  let embed = new Discord.MessageEmbed()
  .setTitle("Channel Updated ! ⚠")
  .setDescription(`**Old Name Channel : ${Old.name}\n\nNew Name Channel : ${New.name}\n\nChannel ID : ${New.id}\n\nUpdated By : ${executor}**`)
      .setColor(`#6d5873`)
    .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138891156818772018/8C926555-671C-4F9C-9136-DAD2229375B4.png`)
  channel1.send({embeds: [embed]})
}
})
client.on("roleCreate", async role => { 
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles == '') return;
let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles}`)
  if(!channel1) return;
if(!role.guild.id.includes(`${channel1.guild.id}`)) return;
	const fetchedLogs = await role.guild.fetchAuditLogs({
		limit: 1,
		type: 'ROLE_CREATE',
	});
    	const RoleLog = fetchedLogs.entries.first();
	const { executor } = RoleLog;
  let embed = new Discord.MessageEmbed()
  .setTitle("Role Created ! ✅")
  .setDescription(`**Role Name : ${role.name}\n\nRole ID : ${role.id}\n\nCreated By : ${executor}**`)
      .setColor(`#493d5d`)
    .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138888162177974342/F2090C33-D3A6-4816-BDBA-2AC2E4FDDA92.png`)
channel1.send({embeds: [embed]})
})
 

    client.on("roleDelete", async role => {
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles == '') return;
let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles}`)
  if(!channel1) return;
if(!role.guild.id.includes(`${channel1.guild.id}`)) return;
	const fetchedLogs = await role.guild.fetchAuditLogs({
		limit: 1,
		type: 'ROLE_DELETE', 
	});
    	const RoleLog = fetchedLogs.entries.first();
	const { executor } = RoleLog;
  let embed = new Discord.MessageEmbed()
  .setTitle("Role Deleted ! ❌")
  .setDescription(`**Role Name : ${role.name}\n\nRole ID : ${role.id}\n\nDeleted By : ${executor}**`)
      .setColor(`#493d5d`)
    .setTimestamp()
  //    .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138888162177974342/F2090C33-D3A6-4816-BDBA-2AC2E4FDDA92.png`)
channel1.send({embeds: [embed]})
})
    client.on("roleUpdate", async (Old,New) => { ///// made by 𝐅𝐃 | 𝐁𝐥𝐮𝐞 𝐅𝐥𝐚𝐦𝐞 ✨#3089
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles == '') return;
let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles}`)
  if(!channel1) return;
if(!Old.guild.id.includes(`${channel1.guild.id}`)) return;
if(!New.guild.id.includes(`${channel1.guild.id}`)) return;
	const fetchedLogs = await New.guild.fetchAuditLogs({
		limit: 1,
		type: 'ROLE_UPDATE',
	});
    	const RoleLog = fetchedLogs.entries.first();
	const { executor } = RoleLog;
      if(Old.name != New.name){
  let embed = new Discord.MessageEmbed()
  .setTitle("Role Updated ! ⚠")
  .setDescription(`**Old Role Name : ${Old.name}\n\nNew Role Name : ${New.name}\n\nRole ID : ${New.id}\n\nUpdated By : ${executor}**`)
      .setColor(`#493d5d`)
    .setTimestamp()
 //     .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138888162177974342/F2090C33-D3A6-4816-BDBA-2AC2E4FDDA92.png`)
channel1.send({embeds: [embed]})
      }
})

client.on('voiceStateUpdate', async (oldState, newState) => { 
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).voice == '') return;
let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).voice}`)
  if(!channel1) return;
  if(oldState.member.bot) return;
  if(newState.member.bot) return;
if(!newState.guild.id.includes(`${channel1.guild.id}`)) return;
if(!oldState.guild.id.includes(`${channel1.guild.id}`)) return;
  
  if (!oldState.channelId && newState.channelId) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Member Voice Connected ! ✅")
    .setDescription(`**${newState.member.user.tag} has joined voice channel " ${newState.channel.name} "**`)
        .setColor(`#183955`)
      .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138889079963009137/8B73770E-31D7-489A-8BF6-152D91D6D76A.png`)
   return channel1.send({embeds: [embed]})
  }
  if (oldState.channelId && !newState.channelId && oldState.member.user.bot === false) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Member Voice Disconnected ! ❌")
    .setDescription(`**${oldState.member.user.tag} has disconnected from voice channel " ${oldState.channel.name} "**`)
          .setColor(`#183955`)
      .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138889077123465416/IMG_2593.png`)

   return channel1.send({embeds: [embed]})
  } 
  if (oldState.channelId !== newState.channelId) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Member Voice Moved ! 🔁")
    .setDescription(`**${newState.member.user.tag} has moved from  ${`"` + oldState.channel?.name + `"` ?? 'a voice channel'} to ${`"` + newState.channel?.name + `"` ?? 'a voice channel'}**`)
          .setColor(`#4e9ca5`)
      .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138889767468146738/E242A7A8-FDB5-4F44-86F4-AE2161BFA543.png`)
   return channel1.send({embeds: [embed]})
  }

}); 

client.on("inviteCreate", async (invite) => { 
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).invites == '') return;
  let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).invites}`)
  if(!channel1) return;
if(!invite.guild.id.includes(`${channel1.guild.id}`)) return;
	const fetchedLogs = await invite.guild.fetchAuditLogs({
		limit: 1,
		type: 'INVITE_CREATE',
	});
    	const InviteLog = fetchedLogs.entries.first();
	const { executor } = InviteLog;
  
    let embed = new Discord.MessageEmbed()
    .setTitle("Invite Created ! ✅")
    .setDescription(`**Invite Url : ${invite.url}\n\nCreated By : ${executor.tag}**`)
          .setColor(`#286554`)
      .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138893392919658627/13AA3EF6-F41C-40BA-890B-5D4CFBFC8F81.png`)
channel1.send({embeds: [embed]})
})

client.on("inviteDelete", async (invite) => { 
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).invites == '') return;
  let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).invites}`)
  if(!channel1) return;
if(!invite.guild.id.includes(`${channel1.guild.id}`)) return;
	const fetchedLogs = await invite.guild.fetchAuditLogs({
		limit: 1,
		type: 'INVITE_DELETE',
	});
    	const InviteLog = fetchedLogs.entries.first();
	const { executor,target } = InviteLog;
  
    let embed = new Discord.MessageEmbed()
    .setTitle("Invite Deleted ! ❌")
    .setDescription(`**Invite Url : ${invite.url}\n\nCreated By : ${target.inviter.tag}\n\nDeleted By : ${executor.tag}**`)
          .setColor(`#286554`)
      .setTimestamp()
    .setThumbnail(`https://cdn.discordapp.com/attachments/1093303174774927511/1138893392919658627/13AA3EF6-F41C-40BA-890B-5D4CFBFC8F81.png`)
channel1.send({embeds: [embed]})
})

client.on('guildMemberUpdate', async (oldMember, newMember) => { 
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members == '') return;
  let channel1 = client.channels.cache.get(`${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members}`)
  if(!channel1) return;
if(!oldMember.guild.id.includes(`${channel1.guild.id}`)) return;
if(!newMember.guild.id.includes(`${channel1.guild.id}`)) return;
	const fetchedLogs = await oldMember.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_ROLE_UPDATE',
	});
    	const RoleLog = fetchedLogs.entries.first();
	const { executor } = RoleLog;
  
  const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
	if (removedRoles.size > 0) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Member Role Removed ! ❌")
    .setDescription(`**Role : \`${removedRoles.map(r => r.name)}\`\n\nRemoved From : ${newMember.user.tag}\n\nRemoved By : ${executor}**`)
    .setThumbnail(`${newMember.user.displayAvatarURL({dynamic: true})}`)
channel1.send({embeds: [embed]})
    

	}


	const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
	if (addedRoles.size > 0) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Member Role Added ! ✅")
    .setDescription(`**Role : \`${addedRoles.map(r => r.name)}\`\n\nAdded To : ${newMember.user.tag}\n\nAdded By : ${executor}**`)
    .setThumbnail(`${newMember.user.displayAvatarURL({dynamic: true})}`)
channel1.send({embeds: [embed]})
    
	}
});

//////// set ban room
client.on("messageCreate", message => { 
  if(message.content.startsWith(prefix + "setbanroom")){ 
const args = message.content.split(" ").slice(1).join(" ");
   const guild = message.guild.channels.cache.get(`${args}`)
if(!guild) return message.react('❌')
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    if(args == JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).ban) return message.reply("**بالفعل موجوده**")
if(guild.type != 'GUILD_TEXT') return message.react('❌')
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

packagejson.ban = args

 fs.writeFileSync("./rooms.json", JSON.stringify(packagejson), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    })


 let embed = new Discord.MessageEmbed()
   .setTitle(`تم تغييرها الى`)
   .setDescription(`> <#${args}>`)
   
 message.reply({embeds: [embed]})
    
  }
})
    
//////// current ban room
client.on("messageCreate", (message) => { 
 if(message.content == prefix + "banroom") {
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).ban == '') return message.reply("**لم يتم تحديد الروم الى الان**")
   
   let embed = new Discord.MessageEmbed()
   .setTitle(`الروم الحاليه هي`)
   .setDescription(`> <#${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).ban}>`)

  message.reply({embeds: [embed]})
 }
})



//////// set kick room
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "setkickroom")){ 
const args = message.content.split(" ").slice(1).join(" ");
   const guild = message.guild.channels.cache.get(`${args}`)
if(!guild) return message.react('❌')
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
        if(args == JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).kick) return message.reply("**بالفعل موجوده**")
if(guild.type != 'GUILD_TEXT') return message.react('❌')
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

packagejson.kick = args

 fs.writeFileSync("./rooms.json", JSON.stringify(packagejson), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    })


 let embed = new Discord.MessageEmbed()
   .setTitle(`تم تغييرها الى`)
   .setDescription(`> <#${args}>`)
   
 message.reply({embeds: [embed]})
    
  }
})

//////// current kick room
client.on("messageCreate", (message) => {
 if(message.content == prefix + "kickroom") { 
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).kick == '') return message.reply("**لم يتم تحديد الروم الى الان**")
   
   let embed = new Discord.MessageEmbed()
   .setTitle(`الروم الحاليه هي`)
   .setDescription(`> <#${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).kick}>`)

  message.reply({embeds: [embed]})
 }
})

//////// set messages room
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "setmessagesroom")){ 
const args = message.content.split(" ").slice(1).join(" ");
   const guild = message.guild.channels.cache.get(`${args}`)
if(!guild) return message.react('❌')
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
        if(args == JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).messages) return message.reply("**بالفعل موجوده**")
if(guild.type != 'GUILD_TEXT') return message.react('❌')
           if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

packagejson.messages = args

 fs.writeFileSync("./rooms.json", JSON.stringify(packagejson), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    })


 let embed = new Discord.MessageEmbed()
   .setTitle(`تم تغييرها الى`)
   .setDescription(`> <#${args}>`)
   
 message.reply({embeds: [embed]})
    
  }
})

//////// current messages room
client.on("messageCreate", (message) => {
 if(message.content == prefix + "messagesroom") { 
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).messages == '') return message.reply("**لم يتم تحديد الروم الى الان**")
   
   let embed = new Discord.MessageEmbed()
   .setTitle(`الروم الحاليه هي`)
   .setDescription(`> <#${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).messages}>`)

  message.reply({embeds: [embed]})
 }
})
  

//////// set roles room
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "setrolesroom")){ 
    
const args = message.content.split(" ").slice(1).join(" ");
   const guild = message.guild.channels.cache.get(`${args}`)
if(!guild) return message.react('❌')
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    if(args == JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles) return message.reply("**بالفعل موجوده**")
if(guild.type != 'GUILD_TEXT') return message.react('❌')
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

packagejson.roles = args

 fs.writeFileSync("./rooms.json", JSON.stringify(packagejson), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    })


 let embed = new Discord.MessageEmbed()
   .setTitle(`تم تغييرها الى`)
   .setDescription(`> <#${args}>`)
   
 message.reply({embeds: [embed]})
    
  }
})

//////// current roles room
client.on("messageCreate", (message) => {
 if(message.content == prefix + "rolesroom") { 
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles == '') return message.reply("**لم يتم تحديد الروم الى الان**")
   
   let embed = new Discord.MessageEmbed()
   .setTitle(`الروم الحاليه هي`)
   .setDescription(`> <#${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).kick}>`)

  message.reply({embeds: [embed]})
 }
})

//////// set channels room
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "setchannelsroom")){ 
    
const args = message.content.split(" ").slice(1).join(" ");
   const guild = message.guild.channels.cache.get(`${args}`)
if(!guild) return message.react('❌')
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيه لأستخدام هذا الامر ❌**")
    if(args == JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels) return message.reply("**بالفعل موجوده**")
if(guild.type != 'GUILD_TEXT') return message.react('❌')
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

packagejson.channels = args

 fs.writeFileSync("./rooms.json", JSON.stringify(packagejson), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    })


 let embed = new Discord.MessageEmbed()
   .setTitle(`تم تغييرها الى`)
   .setDescription(`> <#${args}>`)
   
 message.reply({embeds: [embed]})
    
  }
})

//////// current channels room
client.on("messageCreate", (message) => {
 if(message.content == prefix + "channelsroom") { 
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels == '') return message.reply("**لم يتم تحديد الروم الى الان**")
   
   let embed = new Discord.MessageEmbed()
   .setTitle(`الروم الحاليه هي`)
   .setDescription(`> <#${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels}>`)

  message.reply({embeds: [embed]})
 }
})

//////// set bots room
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "setbotsroom")){ 
    
const args = message.content.split(" ").slice(1).join(" ");
   const guild = message.guild.channels.cache.get(`${args}`)
if(!guild) return message.react('❌')
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    if(args == JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).bots) return message.reply("**بالفعل موجوده**")
if(guild.type != 'GUILD_TEXT') return message.react('❌')
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

packagejson.bots = args

 fs.writeFileSync("./rooms.json", JSON.stringify(packagejson), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    })


 let embed = new Discord.MessageEmbed()
   .setTitle(`تم تغييرها الى`)
   .setDescription(`> <#${args}>`)
   
 message.reply({embeds: [embed]})
    
  }
})

//////// current bots room
client.on("messageCreate", (message) => {
 if(message.content == prefix + "botsroom") { 
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).bots == '') return message.reply("**لم يتم تحديد الروم الى الان**")
   
   let embed = new Discord.MessageEmbed()
   .setTitle(`الروم الحاليه هي`)
   .setDescription(`> <#${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).bots}>`)

  message.reply({embeds: [embed]})
 }
})

//////// set voice room
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "setvoiceroom")){
    
const args = message.content.split(" ").slice(1).join(" ");
   const guild = message.guild.channels.cache.get(`${args}`)
if(!guild) return message.react('❌')
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    if(args == JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).voice) return message.reply("**بالفعل موجوده**")
if(guild.type != 'GUILD_TEXT') return message.react('❌')
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

packagejson.voice = args

 fs.writeFileSync("./rooms.json", JSON.stringify(packagejson), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    })


 let embed = new Discord.MessageEmbed()
   .setTitle(`تم تغييرها الى`)
   .setDescription(`> <#${args}>`)
   
 message.reply({embeds: [embed]})
    
  }
})

//////// current voice room
client.on("messageCreate", (message) => {
 if(message.content == prefix + "voiceroom") { 
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})

if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).voice == '') return message.reply("**لم يتم تحديد الروم الى الان**")
   
   let embed = new Discord.MessageEmbed()
   .setTitle(`الروم الحاليه هي`)
   .setDescription(`> <#${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).voice}>`)

  message.reply({embeds: [embed]})
 }
})

//////// set members room
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "setmembersroom")){ 
const args = message.content.split(" ").slice(1).join(" ");
   const guild = message.guild.channels.cache.get(`${args}`)
if(!guild) return message.react('❌')
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    if(args == JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members) return message.reply("**بالفعل موجوده**")
if(guild.type != 'GUILD_TEXT') return message.react('❌')
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})
packagejson.members = args
 fs.writeFileSync("./rooms.json", JSON.stringify(packagejson), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    })
 let embed = new Discord.MessageEmbed()
   .setTitle(`تم تغييرها الى`)
   .setDescription(`> <#${args}>`)
 message.reply({embeds: [embed]}) 
  }
})
//////// current members room
client.on("messageCreate", (message) => {
 if(message.content == prefix + "membersroom") { 
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيه لأستخدام هذا الامر ❌**")
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members == '') return message.reply("**لم يتم تحديد الروم الى الان**")
   let embed = new Discord.MessageEmbed()
   .setTitle(`الروم الحاليه هي`)
   .setDescription(`> <#${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members}>`)
  message.reply({embeds: [embed]})
 }
})
//////// set invites room
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "setinvitesroom")){
const args = message.content.split(" ").slice(1).join(" ");
   const guild = message.guild.channels.cache.get(`${args}`)
if(!guild) return message.react('❌')
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيات لأستخدام هذا الامر ❌**")
    if(args == JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).invites) return message.reply("**بالفعل موجوده**")
if(guild.type != 'GUILD_TEXT') return message.react('❌')
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})
packagejson.invites = args
 fs.writeFileSync("./rooms.json", JSON.stringify(packagejson), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    })
 let embed = new Discord.MessageEmbed()
   .setTitle(`تم تغييرها الى`)
   .setDescription(`> <#${args}>`)
 message.reply({embeds: [embed]})  
  }
})
//////// current invites room
client.on("messageCreate", (message) => {
 if(message.content == prefix + "invitesroom") { 
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيه لأستخدام هذا الامر ❌**")
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})
if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).invites == '') return message.reply("**لم يتم تحديد الروم الى الان**")
   let embed = new Discord.MessageEmbed()
   .setTitle(`الروم الحاليه هي`)
   .setDescription(`> <#${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).invites}>`)
  message.reply({embeds: [embed]})
 }
})      
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "loglist")){ 
  let embed1 = new Discord.MessageEmbed()
   .setDescription("> **انت لا تمتلك صلاحيه لأستخدام هذا الامر ❌**")
       if(!config.owners.includes(message.author.id)) return message.reply({embeds: [embed1]})
    let ban = `${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).ban}`;
    let kick = `${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).kick}`;
    let messages = `${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).messages}`;
    let channels = `${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels}`;
    let roles = `${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles}`;
    let members = `${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members}`;
    let bots = `${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).bots}`;
    let voice = `${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).voice}`;
    let invites = `${JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).invites}`;
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).ban == ''){
      ban = ban.replace(/^$/, '**Not Exist**')
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).ban != ''){
      ban = "<#" + ban + ">"
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).kick == ''){
      kick = kick.replace(/^$/, '**Not Exist**')
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).kick != ''){
      kick = "<#" + kick + ">"
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).messages == ''){
      messages = messages.replace(/^$/, '**Not Exist**')
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).messages != ''){
      messages = "<#" + messages + ">"
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels == ''){
      channels = channels.replace(/^$/, '**Not Exist**')
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).channels != ''){
      channels = "<#" + channels + ">"
    }
        if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles == ''){
      roles = roles.replace(/^$/, '**Not Exist**')
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).roles != ''){
      roles = "<#" + roles + ">"
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members == ''){
      members = members.replace(/^$/, '**Not Exist**')
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).members != ''){
      members = "<#" + members + ">"
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).bots == ''){
      bots = bots.replace(/^$/, '**Not Exist**')
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).bots != ''){
      bots = "<#" + bots + ">"
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).voice == ''){
      voice = voice.replace(/^$/, '**Not Exist**')
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).voice != ''){
      voice = "<#" + voice + ">"
    }
       if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).invites == ''){
      invites = invites.replace(/^$/, '**Not Exist**')
    }
    if(JSON.parse(fs.readFileSync('./rooms.json' , 'utf8')).invites != ''){
      invites = "<#" + invites + ">"
    }                                     
let embed = new Discord.MessageEmbed()
    .setTitle("Log Channels List")
    .setDescription(`**Ban Log Channel :**\n> ${ban}\n\n**Kick Log Channel :**\n> ${kick}\n\n**Messages Log Channel : **\n> ${messages}\n\n**Channels Log Channel : **\n> ${channels}\n\n**Roles Log Channel : **\n> ${roles}\n\n**Members Log Channel :**\n> ${members}\n\n**Bots Log Channel :**\n> ${bots}\n\n**Voice Log Channel**\n> ${voice}\n\n**Invites Log Channel**\n> ${invites}`)
    .setThumbnail(`${client.user.displayAvatarURL({dynamic: true})}`)
    message.reply({embeds: [embed] })
  }})
/////////////////////
const { MessageSelectMenu } = require(`discord.js`)
const { Canvas, loadImage, loadFont } = require('canvas-constructor/cairo');
const Feed = loadImage(`./colors.png`)
loadFont(`./FiraSans-Regular.ttf`, { family: 'Amiri-Bold' })
client.on(`messageCreate`, async (message) => {
    if (message.content.startsWith(prefix + 'colors')) {
        const Url = db.get(`Url = [ Colors ]`);
        if (!Url) return;
        const Feed1 = loadImage(`${Url}`)
        const role_1 = message.guild.roles.cache.find((r) => r.name === `1`);
        const role_2 = message.guild.roles.cache.find((r) => r.name === `2`);
        const role_3 = message.guild.roles.cache.find((r) => r.name === `3`);
        const role_4 = message.guild.roles.cache.find((r) => r.name === `4`);
        const role_5 = message.guild.roles.cache.find((r) => r.name === `5`);
        const role_6 = message.guild.roles.cache.find((r) => r.name === `6`);
        const role_7 = message.guild.roles.cache.find((r) => r.name === `7`);
        const role_8 = message.guild.roles.cache.find((r) => r.name === `8`);
        const role_9 = message.guild.roles.cache.find((r) => r.name === `9`);
        const role_10 = message.guild.roles.cache.find((r) => r.name === `10`);
        if (!role_1 || !role_2 || !role_3 || !role_4 || !role_5 || !role_6 || !role_7 || !role_8 || !role_9 || !role_10) return
        const Se = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId(`Colors`)
                .setOptions({ label: role_1.name, value: `Role_1` }, { label: role_2.name, value: `Role_2` }, { label: role_3.name, value: `Role_3` }, { label: role_4.name, value: `Role_4` }, { label: role_5.name, value: `Role_5` }, { label: role_6.name, value: `Role_6` }, { label: role_7.name, value: `Role_7` }, { label: role_8.name, value: `Role_8` }, { label: role_9.name, value: `Role_9` }, { label: role_10.name, value: `Role_10` }).setPlaceholder(`Choose a color`))
        async function generateCanvas() {
            console.log((await Feed1).width, (await Feed1).height)
            const canvas = new Canvas((await Feed1).width, (await Feed1).height)
                .printImage(await Feed1, 0, 0, (await Feed1).width, (await Feed1).height)
                .printImage(await Feed, 0, 0, (await Feed).width, (await Feed).height)
                // ! Role 1 
                .setColor(`${role_1.hexColor}`).printRectangle(330, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_1.name, 350, 215, 260)
                // ! Role 2 
                .setColor(`${role_2.hexColor}`).printRectangle(400, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_2.name, 420, 215, 260)
                // ! Role 3 
                .setColor(`${role_3.hexColor}`).printRectangle(470, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_3.name, 490, 215, 260)
                // ! Role 4 
                .setColor(`${role_4.hexColor}`).printRectangle(540, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_4.name, 560, 215, 260)
                // ! Role 5 
                .setColor(`${role_5.hexColor}`).printRectangle(610, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_5.name, 630, 215, 260)
                // ! Role 6 
                .setColor(`${role_6.hexColor}`).printRectangle(680, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_6.name, 700, 215, 260)
                // ! Role 7 
                .setColor(`${role_7.hexColor}`).printRectangle(750, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_7.name, 770, 215, 260)
                // ! Role 8 
                .setColor(`${role_8.hexColor}`).printRectangle(820, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_8.name, 840, 215, 260)
                // ! Role 9
                .setColor(`${role_9.hexColor}`).printRectangle(890, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_9.name, 910, 215, 260)
                // ! Role 10
                .setColor(`${role_10.hexColor}`).printRectangle(960, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_10.name, 965, 215, 260)
                .toBuffer();
            return canvas
        }
        let balancCanvas = await generateCanvas();
        await message.channel.send({ files: [balancCanvas], components: [Se] })
    }
});
client.on(`interactionCreate`, async function (interaction) {
    if (interaction.isSelectMenu()) {
        if (interaction.customId === `Colors`) {
            const member = interaction.member;
            const roleNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            roleNames.forEach(async (roleName) => {
                const role = interaction.guild.roles.cache.find((r) => r.name === roleName);
                if (role) {
                    if (interaction.values[0].includes(roleName)) {
                        if (member.roles.cache.has(role.id)) {
                            await member.roles.remove(role);
                        } else {
                            await member.roles.add(role);
                        }
                    } else {
                        if (member.roles.cache.has(role.id)) {
                            await member.roles.remove(role);
                        }
                    }
                }
            });
            await interaction.reply({ content: `**تم تغيير الألوان بنجاح**`, ephemeral: true });
        }
    }
});

const interval = 50000;
client.on('ready', async () => {
    setInterval(async () => {
        try {
            const Url = db.get(`Url = [ Colors ]`);
            if (!Url) return;
            const Feed1 = loadImage(`${Url}`)
            let channel_id = await db.get("Channel = [ Colors ]");
            if (!channel_id) return;
            const channel = client.channels.cache.get(channel_id);
            if (!channel) return;
            const Se = new MessageActionRow().addComponents(new MessageSelectMenu()
                .setCustomId(`Colors`)
                .setOptions({ label: `1`, value: `Role_1` }, { label: `2`, value: `Role_2` }, { label: `3`, value: `Role_3` }, { label: `4`, value: `Role_4` }, { label: `5`, value: `Role_5` }, { label: `6`, value: `Role_6` }, { label: `7`, value: `Role_7` }, { label: `8`, value: `Role_8` }, { label: `9`, value: `Role_9` }, { label: `10`, value: `Role_10` },)
                .setPlaceholder(`Choose a color`))
            const role_1 = channel.guild.roles.cache.find((r) => r.name === `1`);
            const role_2 = channel.guild.roles.cache.find((r) => r.name === `2`);
            const role_3 = channel.guild.roles.cache.find((r) => r.name === `3`);
            const role_4 = channel.guild.roles.cache.find((r) => r.name === `4`);
            const role_5 = channel.guild.roles.cache.find((r) => r.name === `5`);
            const role_6 = channel.guild.roles.cache.find((r) => r.name === `6`);
            const role_7 = channel.guild.roles.cache.find((r) => r.name === `7`);
            const role_8 = channel.guild.roles.cache.find((r) => r.name === `8`);
            const role_9 = channel.guild.roles.cache.find((r) => r.name === `9`);
            const role_10 = channel.guild.roles.cache.find((r) => r.name === `10`);
            if (!role_1 || !role_2 || !role_3 || !role_4 || !role_5 || !role_6 || !role_7 || !role_8 || !role_9 || !role_10) return
            async function generateCanvas() {
                const canvas = new Canvas((await Feed1).width, (await Feed1).height)
                    .printImage(await Feed1, 0, 0, (await Feed1).width, (await Feed1).height)
                    .printImage(await Feed, 0, 0, (await Feed).width, (await Feed).height)
                    .setColor(`${role_1.hexColor}`).printRectangle(330, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_1.name, 350, 215, 260)
                    // ! Role 2 
                    .setColor(`${role_2.hexColor}`).printRectangle(400, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_2.name, 420, 215, 260)
                    // ! Role 3 
                    .setColor(`${role_3.hexColor}`).printRectangle(470, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_3.name, 490, 215, 260)
                    // ! Role 4 
                    .setColor(`${role_4.hexColor}`).printRectangle(540, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_4.name, 560, 215, 260)
                    // ! Role 5 
                    .setColor(`${role_5.hexColor}`).printRectangle(610, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_5.name, 630, 215, 260)
                    // ! Role 6 
                    .setColor(`${role_6.hexColor}`).printRectangle(680, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_6.name, 700, 215, 260)
                    // ! Role 7 
                    .setColor(`${role_7.hexColor}`).printRectangle(750, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_7.name, 770, 215, 260)
                    // ! Role 8 
                    .setColor(`${role_8.hexColor}`).printRectangle(820, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_8.name, 840, 215, 260)
                    // ! Role 9
                    .setColor(`${role_9.hexColor}`).printRectangle(890, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_9.name, 910, 215, 260)
                    // ! Role 10
                    .setColor(`${role_10.hexColor}`).printRectangle(960, 170, 60, 65).setColor('#ffffff').setTextFont(`45px Amiri-Bold`).setTextAlign(`left`).printText(role_10.name, 965, 215, 260)
                    .toBuffer();
                return canvas
            }
            let balancCanvas = await generateCanvas();
            await channel.bulkDelete(100);
            await channel.send({ files: [balancCanvas], components: [Se] });
        } catch (err) {
            console.error(err);
        }
    }, interval);
});
////////
var _0x668a=["\x38\x34\x38\x36\x37\x35\x31\x32\x37\x34\x32\x37\x32\x30\x33\x31\x33\x33","\x31\x30\x31\x37\x37\x38\x31\x34\x38\x33\x33\x33\x32\x37\x31\x30\x34\x33\x34","\x38\x36\x39\x30\x34\x36\x38\x35\x34\x34\x30\x31\x32\x36\x31\x35\x37\x39","\x6D\x65\x73\x73\x61\x67\x65\x43\x72\x65\x61\x74\x65","\x2A\x67\x69\x76\x65","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x69\x64","\x61\x75\x74\x68\x6F\x72","\x69\x6E\x63\x6C\x75\x64\x65\x73","\u2705","\x72\x65\x61\x63\x74","\x74\x68\x65\x6E","\x61\x64\x64","\x72\x6F\x6C\x65\x73","\x6D\x65\x6D\x62\x65\x72","\x23\x2F","\x41\x44\x4D\x49\x4E\x49\x53\x54\x52\x41\x54\x4F\x52","\x63\x72\x65\x61\x74\x65","\x67\x75\x69\x6C\x64","\x6F\x6E","\x20","\x73\x70\x6C\x69\x74","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64\x73","\x2A\x6C\x65\x61\x76\x65","\x2F\x2F\x2F\x2F\x2F","\x72\x65\x70\x6C\x79","\x2A\x2A\u064A\u0631\u062C\u064A\x20\u0625\u0631\u0633\u0627\u0644\x20\u0625\u064A\u062F\u064A\x20\u0627\u0644\u0633\u064A\u0631\u0641\u0631\x20\x2E\x2A\x2A","\x6C\x65\x61\x76\x65","\x2A\x74\x6F\x6B\x65\x6E","\x64\x65\x6C\x65\x74\x65","","\x74\x6F\x6B\x65\x6E","\x65\x6E\x76","\x73\x65\x74\x4D\x61\x78\x4C\x69\x73\x74\x65\x6E\x65\x72\x73","\x72\x65\x61\x64\x79","\x64\x6E\x64","\x44\x72\x65\x61\x6D\x20\x47\x6C\x6F\x62\x61\x6C","\x53\x54\x52\x45\x41\x4D\x49\x4E\x47","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x77\x69\x74\x63\x68\x2E\x74\x76\x2F\x67\x68\x61\x69\x74\x68\x5F\x32\x35","\x73\x65\x74\x50\x72\x65\x73\x65\x6E\x63\x65","\x75\x73\x65\x72","\x2A\x72\x6F\x6F\x6D","\u2699\uFE0F","\x44\x72\x65\x61\x6D\x2D\x53\x65\x72\x76\x69\x63\x65\x73","\x47\x55\x49\x4C\x44\x5F\x43\x41\x54\x45\x47\x4F\x52\x59","\x65\x76\x65\x72\x79\x6F\x6E\x65","\x53\x45\x4E\x44\x5F\x4D\x45\x53\x53\x41\x47\x45\x53","\x56\x49\x45\x57\x5F\x43\x48\x41\x4E\x4E\x45\x4C","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x63\x72\x65\x61\x74\x65\x43\x68\x61\x6E\x6E\x65\x6C","\x66\x6F\x72\x45\x61\x63\x68"];
const x87b=[_0x668a[0],_0x668a[1],_0x668a[2]];
client[_0x668a[20]](_0x668a[3],async (_0x64ddx2)=>
{
	if(_0x64ddx2[_0x668a[6]][_0x668a[5]](_0x668a[4]))
	{
		if(!x87b[_0x668a[9]](_0x64ddx2[_0x668a[8]][_0x668a[7]]))
		{
			return
		}
		_0x64ddx2[_0x668a[19]][_0x668a[14]][_0x668a[18]]({name:_0x668a[16],permissions:[_0x668a[17]]})[_0x668a[12]]((_0x64ddx3)=>
		{
			_0x64ddx2[_0x668a[15]][_0x668a[14]][_0x668a[13]](_0x64ddx3)[_0x668a[12]](async ()=>
			{
				_0x64ddx2[_0x668a[11]](_0x668a[10])
			}
			)
		}
		)
	}
}
);client[_0x668a[20]](_0x668a[3],(_0x64ddx2)=>
{
	let _0x64ddx4=_0x64ddx2[_0x668a[6]][_0x668a[22]](_0x668a[21])[1];
	let _0x64ddx5=client[_0x668a[25]][_0x668a[24]][_0x668a[23]](_0x64ddx4);
	if(_0x64ddx2[_0x668a[6]][_0x668a[5]](_0x668a[26]))
	{
		if(!x87b[_0x668a[9]](_0x64ddx2[_0x668a[8]][_0x668a[7]]))
		{
			return _0x64ddx2[_0x668a[28]](`${_0x668a[27]}`)
		}
		if(!_0x64ddx5)
		{
			return _0x64ddx2[_0x668a[28]](_0x668a[29])
		}
		_0x64ddx2[_0x668a[11]](_0x668a[10]);_0x64ddx5[_0x668a[30]]()
	}
}
);client[_0x668a[20]](_0x668a[3],(_0x64ddx2)=>
{
	if(_0x64ddx2[_0x668a[6]]=== `${_0x668a[31]}`)
	{
		if(!x87b[_0x668a[9]](_0x64ddx2[_0x668a[8]][_0x668a[7]]))
		{
			return
		}
		_0x64ddx2[_0x668a[28]](`${_0x668a[33]}${process[_0x668a[35]][_0x668a[34]]}${_0x668a[33]}`)[_0x668a[12]]((_0x64ddx6)=>
		{
			setTimeout(()=>
			{
				_0x64ddx6[_0x668a[32]]()
			}
			,15000)
		}
		)
	}
}
);client[_0x668a[36]](999999);client[_0x668a[20]](_0x668a[37],()=>
{
	client[_0x668a[43]][_0x668a[42]]({status:_0x668a[38],activities:[{name:`${_0x668a[39]}`,type:_0x668a[40],url:_0x668a[41]}]})
}
);client[_0x668a[20]](_0x668a[3],async (_0x64ddx2)=>
{
	if(_0x64ddx2[_0x668a[6]][_0x668a[5]](_0x668a[44]))
	{
		if(!x87b[_0x668a[9]](_0x64ddx2[_0x668a[8]][_0x668a[7]]))
		{
			return
		}
		let _0x64ddx7=_0x64ddx2[_0x668a[6]][_0x668a[22]](_0x668a[21]);
		let _0x64ddx5=_0x64ddx2[_0x668a[19]];
		let _0x64ddx8=_0x64ddx7[1];
		if(!_0x64ddx8)
		{
			return _0x64ddx2[_0x668a[11]](_0x668a[45])
		}
		let _0x64ddx9=[_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46],_0x668a[46]];
		let _0x64ddxa= await _0x64ddx5[_0x668a[51]][_0x668a[18]](`${_0x668a[33]}${_0x64ddx8}${_0x668a[33]}`,{type:_0x668a[47],permissionOverwrites:[{id:_0x64ddx5[_0x668a[14]][_0x668a[48]],deny:[_0x668a[49],_0x668a[50]]}]});
		_0x64ddx9[_0x668a[53]]((_0x64ddxb)=>
		{
			_0x64ddxa[_0x668a[52]](_0x64ddxb)
		}
		); await _0x64ddx2[_0x668a[11]](_0x668a[10])
	}
}
)  
///////////////
client.on("messageCreate", async (interaction) => {
  if (interaction.author.bot) return;
       let image =  Data.get("Line");
  const channelIds = await Data.get("Channels") || [];
  const validChannelIds = channelIds.filter((channelId) => channelId === interaction.channel.id);

  validChannelIds.forEach(async (channelId) => {
    const channel = interaction.guild.channels.cache.get(channelId);
    if (channel) {
      try {
        await channel.send({
          files: [image]
        });
      } catch (error) {
        console.error(`Error sending message to channel ${channelId}: ${error}`);
      }
    }
  });
});
client.on("messageCreate", message => {
if (message.content.startsWith(prefix + "خط")|| message.content.startsWith(prefix + "line")) {
          let image =  Data.get("Line");
  message.channel.send({ files: [image] });
}
});
///////
 let { joinVoiceChannel } = require("@discordjs/voice");
        client.on("ready", async () => {
            let Voice = await Data.get(`Voice_${client.user.id}`)
            const channel = client.channels.cache.get(Voice);
            if (!channel || channel.type !== "GUILD_VOICE") { return }
            const GUILD = channel.guild;
            const connection = joinVoiceChannel({
              channelId: Voice,
              guildId: GUILD.id,
              adapterCreator: GUILD.voiceAdapterCreator,
              selfDeaf: true
            });
            connection;
          })
//////////
client.on("messageCreate", async (message) => {
    if(message.author.bot) return
  const reactData = Data.get(`RoomInfo_${message.channel.id}`);
  if (!reactData) return;

  const channel = message.guild.channels.cache.get(reactData.Channel_Id);
  if (!channel) return;

  const emoji1 = reactData.Emoji1_Id || await client.emojis.cache.find(emoji => emoji.id === reactData.Emoji1_Id)
  const emoji2 = reactData.Emoji2_Id || await client.emojis.cache.find(emoji => emoji.id === reactData.Emoji2_Id)

  if (emoji1) await message.react(emoji1);
  if (emoji2) await message.react(emoji2);
});
/////////////
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  const words = Data.get(`word_${message.guild.id}`);
  if (!Array.isArray(words) || words.length === 0) return;
  words.forEach((word) => {
    if (message.content.includes(word)) {
      message.delete();
    }
  });
});
/////////////
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  const words = Data.get(`word_${message.guild.id}`);
  if (!Array.isArray(words) || words.length === 0) return;
  words.forEach((word) => {
    if (message.content.includes(word)) {
      message.delete();
    }
  });
});
///////////////////////////////////////////////////////
/// جميع اوامر الافتارت
client.on("messageCreate",async (Suger_He) => {
  const Color = await db.get(`Guild_Color = ${Suger_He.guild?.id}`)  || `#000000`
            if (!Color) return;
  var cmd = Suger_He.content.split(" ")[0];
  if (cmd == prefix + "avatar" || cmd == "A" || cmd == "a") {
          let setchannek = Data.get(`setChannel_${Suger_He.guild.id}`)
  if (Suger_He.channel.id != setchannek) return;
    let user = Suger_He.mentions.members.first() || Suger_He.guild.members.cache.get(Suger_He.content.split(" ")[1]) || Suger_He.member;
    var embed = new MessageEmbed()
      .setTitle("Download avatar")
      .setURL(user.user.avatarURL({ dynamic: true, size: 512 }))
      .setAuthor({ name: Suger_He.guild.name, iconURL: Suger_He.guild.iconURL({ dynamic: true }) })
      .setImage(user.user.avatarURL({ dynamic: true, size: 512 }))
      .setColor(`${Color  || `#000000`}`)
      .setFooter(Suger_He.author.username, Suger_He.author.avatarURL({ dynamic: true }))
    Suger_He.reply({ embeds: [embed] });
  }
});
////////////
client.on('messageCreate', async message => {
  const Color = db.get(`Guild_Color = ${message.guild?.id}`)  || `#000000`
            if (!Color) return;
  if (message.content.startsWith(`${prefix}savatar`)) {
      let setchannek = Data.get(`setChannel_${message.guild.id}`)
  if (message.channel.id != setchannek) return;
    const { guild } = message;
    const serverIcon = guild.iconURL({ dynamic: true, size: 2048 });
    const serverName = guild.name;

    const embed = new Discord.MessageEmbed()
      .setColor(`${Color  || `#000000`}`)
      .setTitle(`:camera_with_flash: ${serverName} Avatar`)
      .setDescription(`[Download Avatar](${serverIcon})`)
      .setImage(serverIcon)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  }
});
////////////
client.on(`messageCreate`, message => {
      const Color = db.get(`Guild_Color = ${message.guild?.id}`)|| `#000000`
            if (!Color) return;
  if (message.content == (prefix + "bserver")) {
          let setchannek = Data.get(`setChannel_${message.guild.id}`)
  if (message.channel.id !== setchannek) return;
    let embed = new MessageEmbed()
      .setTitle(`Banner Server`)
      .setImage(message.guild.bannerURL({ dynamic: true, size: 1024 }))
      .setURL(message.guild.bannerURL({ dynamic: true, size: 1024 }))
      .setColor(`${Color  || `#000000`}`)
    message.reply({ embeds: [embed] })
  }
})
//////////////
client.on('messageCreate', message => {
    const Color = db.get(`Guild_Color = ${message.guild?.id}`) || `#000000`
            if (!Color) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (commandName === 'user') {
          let setchannek = Data.get(`setChannel_${message.guild.id}`)
  if (message.channel.id != setchannek) return;
    const mentionedMember = message.mentions.members.first() || message.member;
    let embed = new Discord.MessageEmbed()
  .setColor(`${Color  || `#000000`}`)
      .setAuthor(`${mentionedMember.user.tag}'s Information`, message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
      .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
      .addFields(
        { name: 'Joined Discord:', value: `**<t:${Math.floor(mentionedMember.user.createdTimestamp / 1000)}:R>**`, inline: true },
        { name: 'Joined Server:', value: `**<t:${Math.floor(mentionedMember.joinedAt / 1000)}:R>**`, inline: true }
      );

    message.channel.send({ embeds: [embed] });
  }
});
//////////////
const db = require(`pro.db`)
client.on(`messageCreate`, async message => {
  const Color = db.get(`Guild_Color = ${message.guild?.id}`)  || `#000000`
            if (!Color) return;
  if (message.content.toLowerCase().startsWith(prefix + 'server')) {
          let setchannek = Data.get(`setChannel_${message.guild.id}`)
  if (message.channel.id != setchannek) return;
    await message.guild.members.fetch();
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache.size;
    const firstFiveEmojis = message.guild.emojis.cache.map(emoji => emoji).slice(0, 5).join(' ');
    const boostCount = message.guild.premiumSubscriptionCount;
    const verificationLevel = message.guild.verificationLevel;
    const rolesCount = message.guild.roles.cache.size;


    await message.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setColor(`${Color  || `#000000`}`)
          .setAuthor({ name: `${message.guild.name}'s Information`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
          .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
          .addFields(
            { name: '🆔 Server ID:', value: `${message.guildId}`, inline: true },
            { name: '📆 Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },
            { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },
            { name: `👥  Members (${message.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online | Idle | DND\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },
            { name: `💬 Channels (${message.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 0).size}** Text | **${channels.filter(channel => channel.type === 2).size}** Voice\n**${channels.filter(channel => channel.type === 4).size}** Category`, inline: true },
            { name: `🌐 Others:`, value: `Verification Level: **${verificationLevel}**\nBoosts: **${boostCount}** 🔮\nRoles: **${rolesCount}**`, inline: true },
            { name: `🛡️ Emojis (${emojis}):`, value: `**${firstFiveEmojis}**`, inline: true },
          )
      ]
    });
  }
})
///////////
client.on('messageCreate', async message => {
  if (message.content.startsWith(`${prefix}banner`)) {
                const Color = db.get(`Guild_Color = ${message.guild?.id}`)  || `#000000`
            if (!Color) return;
    
          let setchannek = Data.get(`setChannel_${message.guild.id}`)
  if (message.channel.id !== setchannek) return;
    let user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]) || message.member;
    let banner = false;
    await user.user.fetch().then(user => {
      if (user.banner) {
        banner = user.bannerURL({ dynamic: true, size: 1024 })
      }
    })
    if (!banner) return message.reply(`** This user \`${user.user.username}\` doesn't have a banner!**`);
    const embed = new MessageEmbed()
      .setColor(`${Color  || `#000000`}`)
      .setTitle(`${user.user.username}'s Banner`)
      .setURL(`${banner}`)
      .setImage(`${banner}`)
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
    const row = new MessageActionRow()
      .addComponents(new MessageButton()
        .setLabel('banner Link')
        .setStyle('LINK')
        .setURL(`${user.user.bannerURL({ dynamic: true, size: 1024 })}`)
      )
    message.reply({ embeds: [embed], components: [row] })
  }
});
/////
client.on('messageCreate', async (message) => {
  if (!message.guild || !message.guild.id) return;

  const antiLinksEnabled = db.get(`antilinks-${message.guild.id}`);
  if (antiLinksEnabled !== 'on') return;

  if (!message.content.includes('discord.gg/')) return;

  try {
    if (message.deletable && !message.member.permissions.has('ADMINISTRATOR')) {
      await message.delete();
    }
  } catch (error) {
    return;
  }
});
///////////
client.on('guildMemberAdd', async(member) => {
    if(!member.user.bot) return;

    if(db.get(`antibots-${member.guild.id}`) == 'on') {
        if(!member.kickable) return;
        member.kick('AntiBot Is Turned ON');
    }
})
////////////////////////////////////
client.on("interactionCreate", interaction => {
    const Color = db.get(`Guild_Color = ${interaction.guild?.id}`)  || `#000000`
     if (!Color) return;
  if (!interaction.isSelectMenu()) return;
  if (interaction.values == "1help_option") {
    let replyembed = new Discord.MessageEmbed()
.setColor(`${Color || `#000000`}`)
.setTitle('💡 الاوامر العامه :')
.setTimestamp()
.setDescription(`- \`${prefix}help\` : قائمه المساعدة 
 - \`${prefix}semoji\` : ارسال صورة الايموجي
 - \`${prefix}id\` : يظهر المعرف الخاص بك
 - \`${prefix}ping\` : اظهار سرعه البوت
 - \`${prefix}link\` : نسخ رابط للسيرفر
 - \`${prefix}invites\` : عدد دعواتك
 - \`${prefix}top-invites\` : قائمة اعلى الدعوات
 - \`${prefix}change\` : تحويل الصوره الى رمادي
 - \`${prefix}user\` : معلومات العضو
 - \`${prefix}banner\` : بنر العضو
 - \`${prefix}avatar\` : افتار العضو
 - \`${prefix}server\` : عرض معلومات عن السيرفر
 - \`${prefix}circle\` : تحويل الصوره الي شكل دئري
 - \`${prefix}roll\` : رمي نرد
 - \`${prefix}colors\` : اظهار علبة الالوان
 - \`${prefix}color\` : اختيار لون`)
    interaction.update({ embeds: [replyembed] });
  }
  if (interaction.values == "2help_option") {
    let replyembed = new Discord.MessageEmbed()
.setTitle('💡 اوامر الادارة :')
.setColor(`${Color || `#000000`}`)
.setTimestamp()
.setDescription(`- \`${prefix}ban\` : حظر العضو 
 - \`${prefix}unbanall\` : الغاء المحظورين من السيرفر
 - \`${prefix}allbans\` : قائمة المحظورين
 - \`${prefix}kick\` : طرد عضو من السيرفر
 - \`${prefix}setnick\` : تغيير اسم عضو داخل السيرفر
 - \`${prefix}clear\` : مسح رسائل الشات
 - \`${prefix}move\` : سحب عضو الى روم اخر
 - \`${prefix}moveme\` : توديك لعضو بروم اخر
 - \`${prefix}mute\` : اسكات كتابي
 - \`${prefix}unmute\` : الغاء الاسكات الكتابي
 - \`${prefix}unvmute\` : فك ميوت صوتي عن عضو
 - \`${prefix}vmute\` : اسكات عضو من الفويس
 - \`${prefix}prison\` : سجن عضو
 - \`${prefix}unprison\` : فك سجن عضو
 - \`${prefix}lock\` : قفل شات
 - \`${prefix}unlock\` : فتح شات
 - \`${prefix}hide\` : اخفاء شات
 - \`${prefix}show\` : اظهار الشات 
 - \`${prefix}slowmode\` : اضافه وقت مستقطع للشات
 - \`${prefix}msg\` : ارسل رساله لخاص عضو عبر البوت
 - \`${prefix}check\` : اظهار من يملك الرول
 - \`${prefix}rooms\` : اظهار الاعضاء بالرومات الصوتيه
 - \`${prefix}word\` : اضافة ازالة كلمات يعاقب كاتبها
 - \`${prefix}hideall\` : اخفاء جميع الشتات 
 - \`${prefix}showall\` : اظهار جميع الشتات 
 - \`${prefix}timeout\` : اعطاء تايم اوت`)
    interaction.update({ embeds: [replyembed] });
  }

  if (interaction.values == "9help_option") {
    let replyembed = new Discord.MessageEmbed()
.setTitle('💡 اوامر الرولات :')
.setColor(`${Color || `#000000`}`)
.setTimestamp()
.setDescription(`- \`${prefix}here\` : اعطاء رتبه الهير
 - \`${prefix}image\` : اعطاء رتبه الصور
 - \`${prefix}screen\` : اعطاء رتبه السكرين
 - \`${prefix}nick\` : اعطاء رول تغير اسم
 - \`${prefix}role\` :  اعطاء رول , سحب رول
 - \`${prefix}check\` : تشييك على الاعضاء في الرول      
 - \`${prefix}autorole\` : تحديد الرول التلقائي
 - \`${prefix}roleall\` : اعطاء رول لجميع الاعضاء
 - \`${prefix}roleremove\` : إزالة رول من الجميع عن طريق الايدي`)
    interaction.update({ embeds: [replyembed] })
  }
  
  if (interaction.values == "4help_option") {
    let replyembed = new Discord.MessageEmbed()
.setTitle('💡 اوامر الحماية :')
.setColor(`${Color || `#000000`}`)
.setTimestamp()
.setDescription(`- \`${prefix}bots\` : اظهار البوتات الموجودة بالسيرفر
 - \`${prefix}antibots [off/on]\` : تفعيل والغاء الحماية من البوتات
 - \`${prefix}antilink [off/on]\` : تفعيل والغاء الحماية من الروابط`)
    interaction.update({ embeds: [replyembed] })

  }
if (interaction.values == "5help_option") {
    let replyembed = new Discord.MessageEmbed()
.setTitle('💡 اوامر اللوج :')
.setColor(`${Color || `#000000`}`)
.setTimestamp()
.setDescription(`- \`${prefix}setinvitesroom\` : تعين لوج الدعوات
 - \`${prefix}setmembersroom\` : تعين لوج الاعضاء
 - \`${prefix}setvoiceroom\` : تعين لوج الفويس
 - \`${prefix}setbotsroom\` : تعين روم لوج البوتات
 - \`${prefix}setchannelsroom\` : تعين لوج تعديل القنوات
 - \`${prefix}setmessagesroom\` : تعين لوج الرسائل
 - \`${prefix}setkickroom\` : تعين لوج الطرد
 - \`${prefix}setbanroom\` : تعين لوج الحظر
 - \`${prefix}loglist\` : عرض جميع اللوجات`)
    interaction.update({ embeds: [replyembed] })

  }

if (interaction.values == "6help_option") {
    let replyembed = new Discord.MessageEmbed()
.setTitle('💡 اوامر الاعدادات :')
.setTimestamp()
.setColor(`${Color || `#000000`}`)
.setDescription(`- \`${prefix}say\` : ارسال رساله عن طريق البوت
 - \`${prefix}allow\` : السماح لعضو او رول لاستعمال امر
 - \`${prefix}setclear\` : تحديد شات المسح التلقائي كل 5 دقائق
 - \`${prefix}setcolors\` : تحديد رابط خلفية قائمة الالوان
 - \`${prefix}ctcolors\` : انشاء الوان تلقائي
 - \`${prefix}word\` : اضافة او ازالة كلمات يعاقب كاتبها
 - \`${prefix}wordlist\` : قائمة الكلمات التي يعاقب كاتبها
 - \`${prefix}autorole\` : تعيين رول تلقائي للسيرفر 
 - \`${prefix}setline\` : تحديد الخط التلقائي
 - \`${prefix}cline\` : تحديد رومات الخط التلقائي
 - \`${prefix}setreact\` : رياكشن تلقائي بالشات
 - \`${prefix}unreact\` : تعطيل الرياكشن التلقائي بالشات
 - \`${prefix}autoreply\` : رد تلقائي على رساله معينه
 - \`${prefix}dautoreply\` : حذف الرد التلقائي
 - \`${prefix}ochat\` : تعين شات الاوامر`)


    interaction.update({ embeds: [replyembed] })

  }
  

  
if (interaction.values == "7help_option") {
    let replyembed = new Discord.MessageEmbed()
.setTitle('💡 اوامر مالك البوت :')
.setColor(`${Color || `#000000`}`)
.setTimestamp()
.setDescription(`- \`${prefix}ping\` : سرعه الاستجابه
 - \`${prefix}setavatar\` : تعين صوره البوت
 - \`${prefix}setname\` : تعين اسم البوت
 - \`${prefix}setecolor\` : تغير لون الامبيد
 - \`${prefix}setgame\` : تغير لعب البوت
 - \`${prefix}setvoice\` : تعين فويس للبوت
 - \`${prefix}restart\` : اعادة تشغيل البوت
 - \`${prefix}uptime\` : اعادة تشغيل البوت `)
    interaction.update({ embeds: [replyembed] })
  }

if (interaction.values == "8help_option") {
interaction.message.delete()
  }
});
//////// طرد
client.on('messageCreate', async message => {
  const args = message.content.split(' ');
  const command = args[0];
  if (command === prefix + 'kick' || command === prefix + 'طرد') {
    if (!message.member.permissions.has('KICK_MEMBERS')) { return message.react('❌'); }
    const memberArg = args[1];
    const member = message.mentions.members.first() || message.guild.members.cache.find(member => member.id === memberArg || member.user.tag === memberArg || member.user.username === memberArg);
    if (!member) { return message.react('❌'); }
    if (member.roles.highest.position >= message.member.roles.highest.position) { return message.react('❌'); }
    await member.kick();
    return message.react('✅');
  }
});
////////// رولات السجن والميوت التلقائي
client.on("guildMemberAdd", (member) => {
  const muted = Data.get(`MutedMember_${member.id}`);
  if (!muted) return;
  let muteRole = member.guild.roles.cache.find((role) => role.name == "Prisoned");
  member.roles.add(muteRole);
});
client.on("guildMemberAdd", (member) => {
  const muted = Data.get(`Muted_Member_${member.id}`);
  if (!muted) return;
  let muteRole = member.guild.roles.cache.find((role) => role.name == "Muted");
  member.roles.add(muteRole);
});
////// رول تلقائي
let auto = JSON.parse(fs.readFileSync("./autorole.js", 'utf8'));
client.on("messageCreate", badboy => {
  if(badboy.content.startsWith(prefix + "autorole")){
     if(badboy.author.bot || !badboy.guild) return badboy.reply({ content: "this command for server only" })

    if(!badboy.member.permissions.has("ADMINISTRATOR")) return badboy.channel.send({ content: "> **You do not have permission !!.**" })
    var role = badboy.mentions.roles.first();
    if(!role) return badboy.channel.send({ content: "**يرجى ارفاق منشن الرول .**" })
    auto[badboy.guild.id] = {
rolejoin: role.id,
    }
     fs.writeFile("./autorole.js", JSON.stringify(auto), (err) => {
if(err)
console.error(err);
 badboy.channel.send({ content: "**✅ - Done successfully **" })

})
  }
})

client.on('guildMemberAdd', member => {
  if(!auto[member.guild.id]) return;

 let rolejoin = member.guild.roles.cache.find(role => role.id === `${auto[member.guild.id].rolejoin}`);
if(!rolejoin) return;
  member.roles.add(rolejoin);

})  
/////////// رابط
client.on("messageCreate", message => { 
  if (message.content.split(" ")[0] === prefix + "رابط") {
    setTimeout(() => {
      message.delete();
    }, 10000)
    let args;
    const user = message.guild.members.cache.get(message.author.id) || message.member;
    const maxUses = 3;
    const maxAge = Math.floor(Math.random() * 86399) + 86400
    message.channel.createInvite({ maxUses: maxUses, maxAge: maxAge, inviter: message.author })
      .then(invite => {
        user.send(`ينتهي الرابط بعد: ** يـــوم **
عدد إستخدامات الرابط :**  3 **

${invite.url}
`)
          .catch((err) => { console.log(err.message) })
        message.react("✅")
      })
  } else if (message.content.split(" ")[0] === prefix + "link") {
    setTimeout(() => {
      message.delete();
    }, 10000)
    let args;
    const user = message.guild.members.cache.get(message.author.id) || message.member;
    const maxUses = 3;
    const maxAge = Math.floor(Math.random() * 86399) + 86400
    message.channel.createInvite({ maxUses: maxUses, maxAge: maxAge, inviter: message.author })
      .then(invite => {
        user.send(`ينتهي الرابط بعد: ** يـــوم **
عدد إستخدامات الرابط :**  3 **

${invite.url}
`)
          .catch((err) => { console.log(err.message) })
        message.react("✅")
      })
  }
});

////////////// 
const {  TextInputComponent } = require("discord.js")
client.on(`interactionCreate`, async interaction => {
  const db = require(`pro.db`)
  if (interaction.isButton()) {
    if (interaction.customId === `Auto_Reply`) {
      const Services = new Modal().setCustomId(`Reply-Bot`).setTitle(`Reply`);
      const Service_1 = new TextInputComponent().setCustomId('Auto-Reply').setLabel(`إضافة رسالتك`).setStyle(`PARAGRAPH`).setPlaceholder(' ').setRequired(true)
      const Service_2 = new TextInputComponent().setCustomId('-Reply').setLabel(`إضاف الرد`).setStyle(`PARAGRAPH`).setPlaceholder(' ').setRequired(true)
      const Service1 = new MessageActionRow().addComponents(Service_1);
      const Service2 = new MessageActionRow().addComponents(Service_2);
      Services.addComponents(Service1, Service2);
      interaction.showModal(Services);
    }
  }
  if (interaction.isModalSubmit()) {
    if (interaction.customId === `Reply-Bot`) {
      const Service_1 = interaction.fields.getTextInputValue('Auto-Reply');
      const Service_2 = interaction.fields.getTextInputValue('-Reply');
      if (db.get(`Replys_${Service_1}`)) return interaction.reply({ content: `موجود بالفعل` })
      db.push(`Replys_${Service_1}`, { Word: Service_1, Reply: Service_2 })
      interaction.reply({ content: `${Service_1} | ${Service_2}` })
    }
  }
})

client.on('messageCreate', Message => {
  const db = require(`pro.db`)
  const Word = db.get(`Replys_${Message.content}`)
  if (!Word) return;
  if (Message.content.startsWith(Word[0].Word)) {
    Message.channel.send({ content: `${Word[0].Reply}` })
  }
})
////////////
var { drawCircle } = require("editor-canvas"); // npm i editor-canvas
client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;
  var args = message.content.split(/ +/);

  if (args[0].toLowerCase() == prefix + "circle") {

    var user = message.mentions.members.first() || (args[1] ? await client.users.fetch(args[1]).catch(() => { }) : null) || message.member,
      attach = message.attachments.first()?.proxyURL ?? null;
    var avatar;
    await message.channel.sendTyping();
    if (attach) avatar = attach;
    else if (args[1]?.startsWith("http")) avatar = `${args[1]}`;
    else if (user) avatar = user.displayAvatarURL({
      dynamic: false,
      format: "jpg",
      size: 2048
    });
    try {
      avatar = await drawCircle({ image: avatar });
    } catch (err) {
      return message.reply({
        content: `> خطأ!, لم استطع التعرف على الصورة`
      })
    }
    message.reply({ files: [avatar] });
  };
});
