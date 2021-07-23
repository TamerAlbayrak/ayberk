const db = require('quick.db')

exports.run = async (client, message, args) => {
if (args[0] == 'kapat') {

let zaten = db.fetch(`bhdrOtotag_${message.guild.id}`)
if(!zaten) return message.channel.send("Oto Tag zaten kapalı.")
    
db.delete(`bhdrOtotag_${message.guild.id}`)
    
message.channel.send("Oto Tag kapandı.")
  } else {
    let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send("Bir kanal etiketle. Örnek: `!ototag #kanal tag`")
    let tag = args[1]
    if(!tag) return message.channel.send("Bir tag yaz. Örnek: `!ototag #kanal tag`")
    message.channel.send('Oto Tag kanalı ' + kanal + ' olarak ayarlandı!\nOto Tag tagı `' + args[1] + '` olarak ayarlandı!')
    db.set(`bhdrOtotag_${message.guild.id}`, {log: kanal.id, otag: args[1]})
  }
}
/* Bahadır#0001 */
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: []
}

exports.help = {
  name: 'ototag',
  description: 'Yeni katılan kişilere otomatik tag verir.',
  usage: '!ototag kanal tag'
}