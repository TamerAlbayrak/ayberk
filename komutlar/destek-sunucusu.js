const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Destek sunucusu yükleniyor...').then(message => {
      var espriler = ['https://discord.gg/3xNFgKw'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['desteksunucusu', 'ds', 'destek-sunucusu', 'd-s'],
  permLevel: 0
};

exports.help = {
  name: 'destek-sunucusu',
  description: 'destek-sunucusu',
  usage: 'destek-sunucusu'
};