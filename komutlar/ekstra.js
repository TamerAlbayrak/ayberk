const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» s!profil', 'Profilinizi gösterir.')
.addField('» s!sunucubilgi', 'Sunucu bilgisini gösterir.')
.addField('» s!servericon', 'Sunucu resmini gösterir.')
.addField('» s!link-kısalt','Girdiğiniz URL yi kısaltır.')
.addField('» s!yetkilerim','Sunucudaki yetkilerini gösterir.')

          
.setFooter('© 2020 Sizler İçin Uğraşıyoruz.', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['extra'], 
  permLevel: 0 
};

exports.help = {
  name: 'ekstra',
  description: 'Tüm komutları gösterir.',
  usage: 'ekstra'
}; 