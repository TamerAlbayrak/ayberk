const Discord = require("discord.js"); 

exports.run = (client, message, args) => { 

if (!message.member.hasPermissions("MOVE_MEMBERS")) return message.channel.send("<a:nol:749274431066472480> Bu komutu kullana bilmek için `Üyeleri taşı` yetkisine sahip olmanız gerek") 
let kanal = args[1]; 
let kullanici = message.mentions.members.first() 
if (!kanal) return message.channel.send("<a:739216668043247706:748575642437812294> Doğru Kullanım\n <a:739216668043247706:748575642437812294> s!taşı [kullanıcı] [kanal id]") 

kullanici.voice.setChannel(`${kanal}`)
.then(() => message.channel.send(`${kullanici} <#${kanal}> adlı kanala taşındı`)) 
.catch(console.error); 
} 


exports.conf = { 

enabled: true,
guildOnly: true, 
aliases: ['üyeyitaşı'], 
permLevel: 0
 }; 

exports.help = { 
name: 'taşı', 
description: 'İstediğiniz kişiniyi bir sesli kanaldan diğerine taşır.', 
usage: 'taşı [kullanıcı] [kanal id]' 
};