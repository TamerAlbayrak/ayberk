const talkedRecently = new Set();
client.on("message", async msg => {  
 
  if (msg.author.id !== '591653390958985236') return;
  if (talkedRecently.has(msg.author.id)) {
} else {
 
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} `, client.user.avatarURL)
   .setColor('#0090ff')
   .setDescription(`**<a:tac:748575686813417514> Hizzaya Geçin** <@${msg.author.id}> **Geldi** `)
 msg.channel.sendEmbed(embed).then(msg => msg.delete(8000));
 
 talkedRecently.add(msg.author.id);
 setTimeout(() => {
  //msg.delete();
   // Removes the user from the set after a minute
   talkedRecently.delete(msg.author.id);
 }, 600000);// Şuan 10 dakikadır Değiştirebilirsiniz.
}
  }
)

