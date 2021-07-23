const Discord = require('discord.js');

exports.run = async(client, message) => {

    const rules = new Discord.MessageEmbed()
    
      .setColor('RED')
      .addField(`<a:dfret:739098279106576494> Kurallar`, [`
      
<a:rok:739099420913827920> HAFİF DERECELİ KURALLAR
• Ekip üyelerinin gereksiz yere etiketlenmesi yasaktır.
• Komutların, bot komut hariç diğer kanallarda kullanılması yasaktır.
• Ses kanallarında geçiş (hızlı değiştirme) yasaktır.
• Spam yapmak yasaktır.

<a:rok:739099420913827920> AĞIR DERECELİ KURALLAR
• Cinsel veya rahatsız edici içerikler paylaşmak yasaktır.
• Tartışma çıkarmak, dahil olmak yasaktır.
• Din, dil ve ırk ayrımı yapmak, dini konuları açmak ve değerlere hakaret etmek yasaktır.
• Başka bir sunucunun ya da hotel ve retronun reklamını yapmak yasaktır.
• Bir yasa ihlalini mümkün kılan veya teşvik eden içerikler yasaktır.
• Siyaset yapmak yasaktır.
• Sohbette reklam veya spam haricinde personel etiketlemek yasaktır.

<a:nop:717670889914630174>  CEZALAR
• Hafif dereceli kural ihlalleri uyarı ile sonuçlanır.
• Ağır dereceli kural ihlalleri kalıcı ban ile sonuçlanır.

      `])

       

    return message.channel.send(rules).then(keleS => keleS.react("✅>"));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rules'],
    permLevel: 0
}

exports.help = {
    name : 'kurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}