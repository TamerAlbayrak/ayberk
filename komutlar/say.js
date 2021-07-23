const Discord = require("discord.js");

module.exports.run = async (client, message, args,) => {

  const voiceChannels = message.guild.channels.cache.filter(c => c.type === "voice");
  let count = 0;

  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.cache.size;
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.guild.name}`, `${message.author.displayAvatarURL()}`)
    .setDescription(
     `**<a:dfret:739098279106576494> Sunucuda \`${message.guild.memberCount}\` kişi bulunmaktadır!**
     \n**Ses kanallarında \`${count}\` kişi bulunmaktadır!**
     \n**<:online:739099673385631845> Sunucudaki Online (İnsan)Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'online').size}\`
     \n**<:2267_status_dnd:748877318453329920> Sunucudaki DND (İnsan)Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'dnd').size}\`
     \n**<:bosta:739099775500156928> Sunucudaki Idle (İnsan)Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'idle').size}\`
     \n**<:cevrimdisi:739099854390689793> Sunucudaki Offline Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'offline').size}\`
     \n**<:7214_chlora:748877820490678272> Sunucudaki Bot Sayısı:** \`${message.guild.members.cache.filter(m => m.user.bot).size}\``) 

    .setThumbnail(message.guild.iconURL())
    .setFooter(client.user.username,client.user.avatarURL())
    .setTimestamp();

  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["total", "toplamüye", "toplamkişi", "totalmember"],
  permLevel: 0
};
exports.help = {
  name: "say",
  description: "- ",
  usage: "say"
};
   