const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField(':warning: Uyarı :warning:', '`unban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.members.unbanReason = reason;
  client.members.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.cache.find('name', 'mod-log');
  if (!modlog) return message.reply('`mod-log` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Ban kaldırma sebebini yazmalısın.');
  if (!user) return message.reply('Banı kaldırılacak kişinin ID numarasını yazmalısın.').catch(console.error);
  message.guild.members.unban(user);

  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('<a:739216668043247706:748575642437812294> Eylem:', 'Ban kaldırma')
    .addField('<a:739216668043247706:748575642437812294> Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('<a:739216668043247706:748575642437812294> Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('<a:739216668043247706:748575642437812294> Sebep', reason);
  return guild.channels.cache.get(modlog.id).send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};
