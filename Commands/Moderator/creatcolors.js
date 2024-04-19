module.exports = {
    name: 'ctcolors', // هنا اسم الامر
 // aliases: ["",""],
    run: async (client, message) => {


const roles = [
  { name: '1', color: '#050505' },
  { name: '2', color: '#2a2a2a' },
  { name: '3', color: '#aaa7a7' },
  { name: '4', color: '#c3b7bd' },
  { name: '5', color: '#a796a9' },
  { name: '6', color: '#f6caeb' },
  { name: '7', color: '#fa9195' },
  { name: '8', color: '#00ffff' },
  { name: '9', color: '#93bb99' },
  { name: '10', color: '#ffffff' }
];


              const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command ctcolors = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('ADMINISTRATOR')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react('❌')
}

      
  //  if(!message.member.permissions.has(`ADMINISTRATOR`)) return;
    const existingRoles = message.guild.roles.cache.filter(role => roles.some(r => r.name === role.name));
    if (existingRoles.size > 0) {
      message.reply({ content : `**بعض الرُولات موجودة بالفعل !**`});
      return;
    }


    const createdRoles = [];
    for (const roleData of roles) {
      const createdRole = await message.guild.roles.create({
        name: roleData.name,
        color: roleData.color
      });
      createdRoles.push(createdRole);
    }
    message.react(`✅`);
  

      

    }
}
