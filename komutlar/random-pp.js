 const Discord = require("discord.js");
//DCS Ekibi
exports.run = function(client, message, args) {
  setInterval(() => {
    const dcss = message.guild.members.random().user.avatarURL();
    const dcs = new Discord.MessageEmbed()
      .setImage('' + dcss + '')
      .setColor("RANDOM")
      .setTimestamp();
    message.channel.send(dcs);
  }, 5000); //Bu Zaman Aralığıdır! Her 1000 = 1 Saniye 
}; //Not: Bot Resetlenince Durur!


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};
//Dcs Ekibi
exports.help = {
  name: "random-pp"
}; 