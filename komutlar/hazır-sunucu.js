const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Yükleniyor...').then(message => {
      var espriler = ['<a:loading:717392566282354700> Sunucu kurulumu başlatılıyor...'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-kur'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-kur',
  description: 'Sunucu kurar.',
  usage: 'sunucu-kur'
};