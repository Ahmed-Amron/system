  module.exports = {
  	name: 'unban',
	  category: "mod",
  	permissions: 'BAN_MEMBERS',
  	description: 'Unban user from this server',
  	options: [
  		{
  			name: 'user_id',
  			description: 'user to unban',
  			type: 3,
  			required: true,
  		},
  	],
  	timeout: 3000,
  	category: 'mod',
      run : async(client, interaction, args) => {
  		const input = interaction.options.getString('user_id');
          if(!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.editReply('You do not have permissions to use this command')
  		if (input === 'all') {
  			const fetchBans = await interaction.guild.bans.fetch();
  			if (!fetchBans) {
  				return interaction.editReply({content : 'There are no banned users.'});
  			}
  			const usersBanned = fetchBans.map((r) => r.user.id);
  			usersBanned.forEach((user) => {
  				interaction.guild.bans.remove(user, `By: ${interaction.user.tag} unban all`);
  			});
  			return interaction.editReply(`✅ **${fetchBans.size}** members being unbanned`);
  		}
  		try {
  			const user = await interaction.guild.bans.remove(input, `By: ${interaction.user.tag}`);
  			interaction.editReply({ content: `✅ **<@${input}> has been unbanned**` });
  		} catch (e) {
			console.log(`${input} is already unbanned`);
  			return interaction.editReply({ content: `${input} is already unbanned` });
  		}
  	},
  };
