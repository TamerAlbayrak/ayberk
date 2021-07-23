const Discord = require('discord.js');
exports.run = async (client, message, args) => {
if(!message.member.hasPermission('MOVE_MEMBERS')) return message.channel.send(`Bu komutu kullanabilmek için \`Üyeleri Taşı\` yetkisine sahip olmalısın.`)
let kişi = message.mentions.members.first()
if(!kişi) return message.channel.send(`<a:nol:749274431066472480> Ses kanalından atacağın kullanıcıyı etiketlemelisin.`)
if(!kişi.voice.channel) return message.channel.send(`<a:nol:749274431066472480> Bu kullanıcı herhangi bir ses kanalında değil.`)
kişi.voice.kick()
message.channel.send(`<a:ticl:749274687132926004> ${kişi} adlı kullanıcıyı ses kanalından başarıyla attım.`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ses-at'],
  permLevel: 0
};

exports.help = {
  name: 'sesten-at',
  description: 'Etiketlenen kullanıcıyı bulunduğu ses kanalından atar.',
  usage: 'sesten-at @Kişi'
};