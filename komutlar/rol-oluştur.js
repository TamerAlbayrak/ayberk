//---Bu Kod komutlar klasörüne atılacak atılacaktır.
//CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //Sadista

const Discord = require('discord.js')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES")) 
  return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Rolleri yönet` yetkisine sahip olmanız gerek")
  
let guild = message.guild;
let isim = args.slice(0).join(" ");
if (!isim) 
  return message.channel.send("<a:yeahl:749274424108122294> Bir isim girmeniz gerek")

guild.roles.create({
  name: isim
})
  .then(role => message.channel.send(`<a:heartly:749286274321481990> _${role.name}_ adında yeni rol oluşturuldu`))
  .catch(console.error)
  
}

exports.conf = {
  aliases: [ 'rololuştur' ],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'createrole',
  description: 'Yeni rol oluşturur',
  usage: 'rololuştur ',
};