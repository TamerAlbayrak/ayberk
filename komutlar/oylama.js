///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

const Discord = require("discord.js");

const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR"))

    return message.reply(

      "Bu komutu kullanabilmek için **ADMINISTRATOR** yetkisi gerekir"

    );

 

  let question = args.join(" ");

  if (!question)

    return message.channel.send(

      new Discord.MessageEmbed()

        .setColor("RANDOM")

        .addField("<a:739216668043247706:748575642437812294> __Doğru Kullanım__ ", `=> s!oylama **mesaj**`)

    );

 

  message.channel.send(

    `<a:739216668043247706:748575642437812294> everyone - here atılsın mı?\n**<a:739216668043247706:748575642437812294> evet** veya **hayır** olarak cevap veriniz. \n<a:739216668043247706:748575642437812294> Kalan süre 10 saniye`

  );

  message.channel

    .awaitMessages(response => response.content === "evet", {

      max: 1,

      time: 10000,

      errors: ["time"]

    })

    .then(collected => {

      message.channel

        .send(

          new Discord.MessageEmbed()

 

            .setColor("RANDOM")

            .setThumbnail(message.author.avatarURL())

            .setTimestamp()

            .setFooter("Sppety Oylama", client.user.avatarURL())

            .addField(`<a:tac:748575686813417514> __OYLAMA__ `, `=> **${question}** `)

        )

 

        .then(function(message) {

          message.react("👍").then(sıra => {

            message.react("👎");

          });

        })

        .then(everyone => {

          message.channel.send(" @everyone @here ").then(m => m.delete(50));

        });

    });

  message.channel

    .awaitMessages(response => response.content === "hayır", {

      max: 1,

      time: 10000,

      errors: ["time"]

    })

    .then(collected => {

      message.channel

        .send(

          new Discord.MessageEmbed()

 

            .setColor("RANDOM")

            .setThumbnail(message.author.avatarURL())

            .setTimestamp()

            .setFooter("Sppety Oylama", client.user.avatarURL())

            .addField(`<a:tac:748575686813417514> __OYLAMA__ `, `=> **${question}** `)

        )

        .then(function(message) {

          message.react("👍").then(sıra => {

            message.react("👎");

          });

        });

    });

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["anket"],

  permLevel: 0

};

exports.help = {

  name: "oylama",

  description: "Espri yapar.",

  usage: "oylama sex yapalım mı?"

};

///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

