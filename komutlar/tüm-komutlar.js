const Discord = require("discord.js");
//CodAre RuffLys#1006
module.exports.run = async (client, message, args) => {
  try {
    const commands = new Discord.MessageEmbed()
    await message.channel.send(
      `**_Toplam Komut Sayısı:_**` +
        `\`${client.commands.size}\`` +
        `\n**Komutlar:** \n${client.commands
          .map(props => `\`${props.help.name}\``)
          .join(" | ")}`

    );
  } catch (e) {
    throw e;
  }
};//CodAre RuffLys#1006

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["amkcommands"],
  permLevel: 0
};//CodAre RuffLys#1006

module.exports.help = {
  name: "answercommand",
  description: "Bota eklenmiş tüm komutları listeler.",
  usage: "tümkomutlar"
};//CodAre RuffLys#1006