const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
const embed = new Discord.MessageEmbed()
.setAuthor("Sppety BOT", client.user.avatarURL())
.setTitle("Sppety BOT")
.setURL("https://discord.com/api/oauth2/authorize?client_id=675660427631394826&permissions=8&scope=bot")
.setDescription("Botu kendi sunucuna davet edebilirsin :)")
.setColor("BLUE")
.setTimestamp()
.setFooter("© Sppety", client.user.avatarURL())
.addField("Davet Linki", `[Tıkla](https://discord.com/api/oauth2/authorize?client_id=675660427631394826&permissions=8&scope=bot)`)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['davet'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'davet', 
  usage: 'davet'
};