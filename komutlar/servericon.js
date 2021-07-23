const Discord = require('discord.js');
module.exports.run = (client, message) => {

let embed = new Discord.MessageEmbed()
.setImage(message.guild.iconURL())
.setColor('RANDOM');

message.channel.send(embed)
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sicon'],
  permLevel: 0
};

module.exports.help = {
  name: 'servericon',
  description: 'Sunucu resmini gösterir.',
  usage: 'servericon'
};