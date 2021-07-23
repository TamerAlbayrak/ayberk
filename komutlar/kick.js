const Discord = require('discord.js');
const moment = require('moment')
const talkedRecently = new Set();

exports.run = async (bot, message, args) => {
                       
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("<a:nop:717670889914630174> Bu komudu kullanabilmek için `Üyeleri At` yetkisine sahip olmanız gerek.");
    let reason = args.slice(1).join(' ')
    if (!args[0]) return message.channel.send("<a:nop:717670889914630174> Atmak istediğiniz kullanıcıyı etiketleyiniz.")
    let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.guild.members.cache.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user

    if (!user) return message.channel.send(`<a:nop:717670889914630174> Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`<a:nop:717670889914630174> Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:nop:717670889914630174> :Kendi yetkimin üstündeki kişileri uzaklaştıramam.`)
    if (!reason) reason = 'Neden belirtilmemiş.'

    message.channel.send(`<a:loading:717392566282354700> ${user.tag}, Bu kullanıcıyı sunucudan atmak için **evet** , Atmak istemiyorsanız **hayır** Yazınız..`)
    let uwu = false;
    while (!uwu) {
      const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
      const choice = response.first().content
      if (choice == 'hayır' || choice == 'h') return message.channel.send('<a:verif:717666194865258496> İşlem iptal **edildi.**')
      if (choice !== 'evet' && choice !== 'e') {
        message.channel.send('<a:loading:717392566282354700> Lütfen sadece **evet (e)** veya **hayır (h)** ile cevap verin.')
      }
    if (choice == 'evet' || choice == 'e') uwu = true
  }
  if (uwu) {
  try {
  await message.guild.member(user).kick(reason + ` | Yetkili: ${message.author.tag} - ${message.author.id}`)
  
  message.channel.send(`**${user.tag}** adlı kullanıcı sunucudan uzaklaştırıldı. `)
      

  user.send(`**${message.guild.name}** adlı sunucudan **atıldınız!**\n*Sebep:* \`\`\`${reason}\`\`\``)

  let embed = new Discord.MessageEmbed()
  .setColor("#FFB900")
  .setAuthor(`${user.username} adlı kişi atıldı!`, user.avatarURL()||user.defaultAvatarURL)
  .addField('Atılan Kullanıcı', `${user.tag}-[${user.id}]`, true)
  .addField('Atan Yetkili', `${message.author.tag}-[${message.author.id}]`, true)
  .addField('Atılma Nedeni', reason, true);
  } catch(e) {
    message.channel.send('<:no:663378512417128449> Bir hata var!')
  }
  } else return console.log('<:no:663378512417128449> Hata var')
   };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'nblm',
  usage: 'kick'
};