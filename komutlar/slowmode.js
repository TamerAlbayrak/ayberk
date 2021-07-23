const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      " Bu komutu kullanabilmek için `Mesajları Yönet` yetkisine sahip olmanız gerek."
    );
  if (message.channel.type !== "text") return;
  const limit = args[0] ? args[0] : 0;
  if (!limit) {
    var embed = new Discord.MessageEmbed()
      .setDescription(`<a:loadingl:749274424804376656> Doğru kullanım: \`s!slowmode [0/10]\``)
      .setColor("RANDOM")
      .setTimestamp();
    message.channel.send({ embed });
    return;
  }
  if (limit > 10) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<a:nop:717670889914630174> Süre limiti maksimum **10** saniye olabilir.")
        .setColor("RANDOM")
    );
  }
  message.channel.send(
    new Discord.MessageEmbed()
      .setDescription(`<a:ticl:749274687132926004> Yazma süre limiti başarıyla **${limit}** saniye olarak ayarlanmıştır.`)
      .setColor("RANDOM")
  );
  var request = require("request");
  request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
      rate_limit_per_user: limit
    },
    headers: {
      Authorization: `Bot ${client.token}`
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "yavas-mod", "yavasmod", "yavaşmod"],
  permLevel: 1
};
 
exports.help = {
  name: "slowmode",
  description: "Sohbete yazma sınır (süre) ekler.",
  usage: "slowmode [1/10]"
};