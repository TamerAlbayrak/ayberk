const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
 
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için birşey yazman gerek.');
 
    const yaz = new Discord.MessageEmbed()
      .setColor('#fff000')
      .addField(`Mesajın:`, `${mesaj}`)
    return message.channel.send(yaz);
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'yazdır',
  description: '',
  usage: ''
};
 