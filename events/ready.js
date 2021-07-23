const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');


const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`Kaptan Tamer`);
  console.log(`Komutlar Yüklendi. Bot Giriş Yaptı. Gerekli Ayarlar Yapıldı. Hay Hay Kaptan. ${client.user.username} Bot Göreve Hazır. Yelkenler Fora...`);
  client.user.setStatus("idle");
  client.user.setPresence({ activity: { name: "Taxperia" }, status: "online" });
  client.channels.cache.get("674284694807773198").join()
    console.log(`Bu Saatten Sonra Bizi Kimse Tutamaz Herşey Aktif.`);

};



