const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Omalısınız**"))
 let guild = message.guild
  let [link, ad] = args.join(" ").split(" - ");
  if (!link) return message.channel.send(`Bir link yazmalısın.`)
  if (!ad) return message.channel.send(`Bir isim yazmalısın.`)
 
  guild.emojis.create(link, ad)
    .then(emoji => message.channel.send(`${emoji.name} adında emoji oluşturuldu. (${emoji})`))
    .catch(console.error);
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-ekle','emojiekle','emoji-yükle'],
  permLevel: 3
};

exports.help = {
  name: 'emojiyükle',
  description: 'Belirttiğiniz link ve isimde emoji yükler.',
  usage: 'emojiyükle <link> - <isim>'
};