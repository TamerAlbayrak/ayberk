const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {

let pc = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("desktop")).size
let web = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("web")).size
let mobil = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("mobile")).size
message.channel.send(new Discord.MessageEmbed()
.setAuthor(`${message.guild.name}`, message.guild.iconURL())
.addField(`<a:739216668043247706:748575642437812294> Üyelerin Bağlandığı Cihazlar:`, `**${pc}** Kişi **__Bilgisayardan__**\n**${web}** Kişi **__Webden__**\n**${mobil}** Kişi İse **__Mobilden__** Bağlanıyor!`, true));

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pform'],
    permLevel: 0,
}

exports.help = {
    name: 'platform',
  category: 'kullanıcı',
    description: '',
    usage: ''
}
