const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

  if (!db.fetch(`goldpuan_${message.author.id}`)) {
    const Embed = new Discord.MessageEmbed()
 
 .setAuthor(message.author.username, message.author.avatarURL())
.setColor("BLUE")
.setThumbnail(message.author.avatarURL())
.addField(":bust_in_silhouette: Ad", message.author.tag, true)
 .addField(":game_die: ID", message.author.id, true)
 .addField("<a:dfret:739098279106576494> Durumu", message.author.presence.status.replace("dnd", "Rahatsız Etmeyin").replace("idle", "Boşta").replace("offline", "Çevrimdışı").replace("online", "Çevrimiçi"), true)
        .addField(':video_game: Oynuyor bölümü', message.author.presence.activites ? message.author.presence.activites.name : 'Boş.', true)
.addField(":calendar_spiral: Hesabın oluşturulduğu tarih", message.author.createdAt.toUTCString().replace("Nov", "Kasım").replace("Jan", "Ocak").replace("Feb", "Şubat").replace("Mar", "Mart").replace("Aug", "Ağustos").replace("Sep", "Eylül").replace("Oct", "Ekim").replace("Fri", "Cuma").replace("Mon", "Pazartesi").replace("Sun", "Pazar").replace("Sat", "Cumartesi").replace("Tue", "Salı").replace("Wed", "Çarşamba").replace("Thu", "Perşembe"))
 
 return message.channel.send(Embed)
  }
 
    const Embed2 = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setColor("BLUE")
.setThumbnail(message.author.avatarURL())
.addField(":bust_in_silhouette: Ad", message.author.tag, true)
.addField(":game_die: ID", message.author.id, true)
.addField("<a:dfret:739098279106576494> Durumu", message.author.presence.status.replace("dnd", "Rahatsız Etmeyin").replace("idle", "Boşta").replace("offline", "Çevrimdışı").replace("online", "Çevrimiçi"), true)
        .addField(':video_game: Oynuyor bölümü', message.author.presence.activites ? message.author.presence.activites.name : 'Boş.', true)
.addField(":calendar_spiral: Hesabın oluşturulduğu tarih", message.author.createdAt.toUTCString().replace("Nov", "Kasım").replace("Jan", "Ocak").replace("Feb", "Şubat").replace("Mar", "Mart").replace("Aug", "Ağustos").replace("Sep", "Eylül").replace("Oct", "Ekim").replace("Fri", "Cuma").replace("Mon", "Pazartesi").replace("Sun", "Pazar").replace("Sat", "Cumartesi").replace("Tue", "Salı").replace("Wed", "Çarşamba").replace("Thu", "Perşembe"))
 
 
 return message.channel.send(Embed2)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profıl"],
  permLevel: 0
};

module.exports.help = {
  name: "profil",
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'profil'
};