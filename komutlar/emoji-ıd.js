const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
 
exports.run = (client, message, args) => {
         let mesaj = args.slice(0).join(' ')
 
 
 
 
 
  if(mesaj === "id") {
     const emojiList = message.guild.emojis.map((e, x) => (x + ' | ' + e)).join('\n');
      var emojis = message.guild.emojis.array();
    if (emojiList.length > 2000) return message.reply("fazla emoji var")
  const embed2 = new Discord.MessageEmbed()
.setColor("RED")
  .setFooter(`Sadece emojileri görmek için s!emojiler`)
.setDescription(`\`\`\`js
Sunucuda Bulunan Emojiler (${emojis.length} adet)
${emojiList}
\`\`\``)
             .setTimestamp()
 message.channel.send(embed2);
        return
  }
          message.reply("Sunucuda Bulunan Emojiler" + message.guild.emojis.map(emoji => emoji).join(' | '))
         const embed = new Discord.MessageEmbed()
            .setDescription(`<a:owww:748575745558970399> Yukarıya Bak`)
            .setColor('RED')
            .setTimestamp()
          .setFooter(`Emojileri IDleri ile birlikte görmek için; s!emojiler id`)
        message.channel.send(embed)
 
 
}
 
 
 
exports.conf = {
    enabled: true,
    guildOnly: true,
  aliases: ["emoji"],
  permLevel: 0,
  }
 
exports.help = {
    name: 'emojiler',
    description: 'Sunucuda bulunan emojileri gösterir.',
    usage: 'emojiler'
}