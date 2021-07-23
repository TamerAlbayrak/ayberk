const Discord = require('discord.js'); // \n

exports.run = (client, message, args) => {

let pages = [
 '**<a:tac:748575686813417514> Bot Hakkında Kısa Bilgi**\n\n\n **<a:tac:748575686813417514>s!yardım** \n **<a:tac:748575686813417514>s!davet** \n **<a:tac:748575686813417514>s!tavsiye** \n **<a:tac:748575686813417514>s!şikayet** \n **<a:tac:748575686813417514>s!canlıdestek** \n **<a:tac:748575686813417514>s!sunucutanıt**',
 '**<a:tac:748575686813417514> Moderasyon Komutları**\n\n\n **<a:tac:748575686813417514>s!ban** \n **<a:tac:748575686813417514>s!unban** \n **<a:tac:748575686813417514>s!kick** \n **<a:tac:748575686813417514>s!slowmode **\n **<a:tac:748575686813417514>s!reklam-taraması** \n **<a:tac:748575686813417514>s!sunucu-kur (beta)** \n **<a:tac:748575686813417514>s!oylama** \n **<a:tac:748575686813417514>s!isimdeğiştir ** \n **<a:tac:748575686813417514>s!temizle** \n **<a:tac:748575686813417514>s!kayıt ** \n **<a:tac:748575686813417514>s!kanalaç** \n **<a:tac:748575686813417514>s!pp** \n **<a:tac:748575686813417514>s!söyle** \n **<a:tac:748575686813417514>s!sunucubilgi** \n **<a:tac:748575686813417514>s!id** \n **<a:tac:748575686813417514>s!say** \n **<a:tac:748575686813417514>s!rololuştur**',
 '**<a:tac:748575686813417514>Moderasyon Komutları 2**\n\n**<a:tac:748575686813417514>s!çekiliş** \n **<a:tac:748575686813417514>s!yetkilerim** \n **<a:tac:748575686813417514>s!taşı** \n **<a:tac:748575686813417514>s!ses-at** \n **<a:tac:748575686813417514>s!banlananlar** \n **<a:tac:748575686813417514>s!korona** \n **<a:tac:748575686813417514>s!yazdır** \n **<a:tac:748575686813417514>s!emojiler** \n **<a:tac:748575686813417514>s!platform** \n **<a:tac:748575686813417514>s!gold**',
 ];
  let page = 1;

  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail('')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⏪')
  .then(r => {
    msg.react('⏩')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["Yardım", "sy", "sayfalıyardım", "yardım"],
permLevel: 0
};

exports.help = {
name: 'sayfalıyardım',
description: 'Yardım Listesini Gösterir',
usage: 'sayfalıyardım'
};