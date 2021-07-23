const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  const mesaj = "sa";
  message.delete();
  let kişi = message.mentions.members.first() || message.author;
  message.channel
    .send(`<a:739216668043247706:748575642437812294> **${kişi}** adlı kişinin ID numarası: \n<a:739216668043247706:748575642437812294> **${kişi.id}**`)
    .then(x => x.delete({timeout: 5000}))
  client.users.cache.get('').send(mesaj)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Id", "ıd", "ID"],
  permLevel: 2
};
exports.help = {
  name: "id",
  description: "Belirtilen kişinin ID'sini Verir.",
  usage: "id"
};