const Discord = require('discord.js');

exports.run = (client, message, args) => {
message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('<a:yeahl:749274424108122294> Reboot;').setDescription('Eğer Kabul Ediyorsan => `onay` <=').setFooter('15 Saniye İçinde İptal!', client.user.avatarURL()).setTimestamp())
.then(() => {
message.channel.awaitMessages(response => response.content === 'onay', {
max: 1,
time: 15000,
errors: ['time'],
})
.then((collected) => {
  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('Reboot;').setDescription('Onay Verildi! Yeniden Başlatılıyorum...').setFooter('Sppety', client.user.avatarURL()).setTimestamp()).then(msg => {
console.log(`BOT : Yeniden Başlatılıyor...`);
process.exit(0);
})
})
.catch(() => {
  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('Yeniden Başlatma;').setDescription('Komut İptal Edildi!').setFooter('Sppety', client.user.avatarURL()).setTimestamp())
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: '{Sadece yapımcım}.',
  usage: 'reboot'
};