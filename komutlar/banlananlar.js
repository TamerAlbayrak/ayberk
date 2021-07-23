const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(`Sunucunuzda Banlanan Kişi Bulunmamaktadır ''`)
       .setColor("RED");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle("<a:ban:717707004247801918>  Sunucudan Banlananlar")
       .setColor("RED");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(`<a:739216668043247706:748575642437812294> **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banned","banliste"],
  permLevel: 0
};
module.exports.help = {
  name: 'banlananlar',
  description: 'Sunucundan Banlanan üyeleri gösterir.',
  usage: 'banlananlar'
};