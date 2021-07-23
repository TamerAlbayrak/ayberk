const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter("© Sppety", bot.user.avatarURL())

    .setDescription(
      `<a:tac:748575686813417514>  **Botun Yapımcısı**\n**• \`Ayberk#0263\`**\n \n**<a:dfret:739098279106576494>  Toplam Kullanıcı:** __` +
        bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
        `\n__**<a:dfret:739098279106576494>  Toplam Sunucu:** __` +
        bot.guilds.cache.size.toLocaleString() +
        `\n__**<a:dfret:739098279106576494> Toplam Kanal:** __` +
        bot.channels.size.toLocaleString() +
        `__\n \n` +
        `<a:dfret:739098279106576494>  **Bellek Kullanımı: **__` +
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        ` MB__\n` +
        `<a:dfret:739098279106576494>   **Çalışma Süresi: **__${seksizaman}__\n \n` +
        `<a:dfret:739098279106576494> **Discord.JS Sürüm:** __v` +
        Discord.version +
        `__`
    );

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "statistics", "istatistik"],
  permLevel: 0,
  katagori: ""
};

exports.help = {
  name: "botbilgi",
  description: "Bot Statics!",
  usage: "botbilgi"
};