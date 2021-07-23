

        const Discord = require("discord.js");
        const data = require('quick.db');
        exports.run = async (client, message, args) => {
        if(!message.member.hasPermission(`ADMINISTRATOR`)) return;
        // Sadece role sahip olanlar kullansın istiyorsanız 4. satır yerine:
        //if(!message.member.roles.cache.has("rol id")) return;
         
        if(!args[0]) return message.channel.send(`<a:tac:748575686813417514> Bir kişiyi etiketlemelisin.`)
         
        let role = message.mentions.roles.first()
        let unregistered = message.guild.roles.cache.get(`kayıtsız id`)
        let channel = message.guild.channels.cache.get(`log kanal id`) || message.channel//Boş bırakırsanız komutun kullanıldığı kanala logu yollar.
         
        let kullanıcı = message.mentions.users.first()
        if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
        if(kullanıcı.bot) return;
         
        let isim = args[1];
        if(!isim) return message.channel.send(`${args[0]}, için bir isim girmelisin.`)
        if(isim.length > 20) return message.channel.send(`Daha kısa bir isim yaz.`)
         
         
        const emb = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setColor(`#fffff0`)
        .setFooter(`#${message.channel.name} kanalında kullanıldı.`)
         
        message.guild.members.cache.get(kullanıcı.id).setNickname(`${isim}`)
        message.guild.members.cache.get(kullanıcı.id).roles.add(role.id)
        message.guild.members.cache.get(kullanıcı.id).roles.remove(unregistered.id)
        message.guild.members.cache.get(kullanıcı.id).send(emb.setDescription(`**${message.guild.name}** sunucusunda ${message.author} tarafından ${isim} olarak kayıt edildin.`))
         
        channel.send(
        emb.setDescription(`${kullanıcı}, kullanıcısı kayıt edildi.`)
        .addField(`Kayıt eden:`, message.author, true)
        .addField(`Adı:`, args[1], true)
        .addField(`Verilen rol:`, role.name, true)
        .addField(`Alınan rol:`, unregistered.name, true))
        // Çok isterseniz botun yolladığı mesaja tepki ekleyebilirsiniz.
        // .then(m => m.react(``))
        }
        exports.conf = {
          enabled: true,
          guildOnly: false,
          aliases: ['kayıt',"kayit"],
          permLevel: 1
        };
         
        exports.help = {
          name: 'kayıt'
        };//

