const codare = require("discord.js")

exports.run = async function(client, message, args) {

if (!args.join(" ")) return message.reply("Öncelikle bir hediye girmelisin.")

const Hediye = args.join(" ");
const tanersins = message.guild.members.cache.filter(user => !user.user.bot).map(Member => Member.id)

const RastgeleKişiÇek = Math.floor(Math.random() * tanersins.size)

const Array = tanersins;
const RandomKişi = Array[RastgeleKişiÇek]

const Kazanan = client.users.cache.get(RandomKişi)

message.channel.send(`\`${Hediye}\` ödülü için kullanıcı çekiliyor... ${tanersins.size}`).then(m => {
const embed = new codare.MessageEmbed()
.setColor('GREEN')
.setAuthor(Kazanan.username, Kazanan.avatarURL()())
.addField(`**Kazanan:**`, `<@${Kazanan.id}>`)
.addField(`**Kazandığı Ödül**`, Hediye)
.setTimestamp()
.setFooter(`CodAre`)
m.edit({embed: embed})
})
}
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["random-kişi", "hızlı-çekiliş"],
permLevel: 0
}
exports.help = {
name: "rastgele-kişi",
description: 'Ratgele kişi seçer.',
usage: "rastgele-kişi"
}
