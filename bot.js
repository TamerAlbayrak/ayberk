
// -------------------------------------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const Jimp = require('jimp');
const db = require('quick.db');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`Knavenin Komutları ${files.length} bu kdr simdi yuklenio`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Taxperia: ${props.help.name}`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.on("message", msg => {
var dm = client.channels.cache.get("708954955876139048")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Dm`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});


//////////////////
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
/////////////////////////////////



//////////////////////////////////////////
//////////////////
client.on(`userUpdate`, (oldUser, newUser) => {

 

  let kişi = client.users.cache.get(oldUser.id)

  let avatar = kişi.avatarURL()

  let kanal = client.channels.cache.find(ch => ch.id === '675669452070715402')

 

  const emb = new Discord.MessageEmbed()

  .setImage(avatar)

  .setFooter(`${kişi.tag}`)

  .setTimestamp()

  .setDescription(`Fotoğrafa gitmek için [tıkla](${kişi.avatarURL()})!`)

  kanal.send(emb)

 

})


///////////////////////
const talkedRecently = new Set();
client.on("message", async msg => {  
 
  if (msg.author.id !== '533247357878403092') return;
  if (talkedRecently.has(msg.author.id)) {
} else {
 
  const embed = new Discord.MessageEmbed()
  .setAuthor(`${client.user.username} `, client.user.avatarURL())
   .setColor('#0090ff')
   .setDescription(`**<a:tac:748575686813417514> Hizzaya Geçin** <@${msg.author.id}> **Geldi** `)
 msg.channel.send(embed).then(msg => msg.delete(8000));
 
 talkedRecently.add(msg.author.id);
 setTimeout(() => {
  //msg.delete();
   // Removes the user from the set after a minute
   talkedRecently.delete(msg.author.id);
 }, 600000);// Şuan 10 dakikadır Değiştirebilirsiniz.
}
  }
)

/////////////////////
const TalkedRecently = new Set();
client.on("message", async msg => {  
 
  if (msg.author.id !== '591653390958985236') return;
  if (talkedRecently.has(msg.author.id)) {
} else {
 
  const embed = new Discord.MessageEmbed()
  .setAuthor(`${client.user.username} `, client.user.avatarURL())
   .setColor('#0090ff')
   .setDescription(`**<a:tac:748575686813417514> Hizzaya Geçin** <@${msg.author.id}> **Geldi** `)
 msg.channel.send(embed).then(msg => msg.delete(8000));
 
 talkedRecently.add(msg.author.id);
 setTimeout(() => {
  //msg.delete();
   // Removes the user from the set after a minute
   talkedRecently.delete(msg.author.id);
 }, 600000);// Şuan 10 dakikadır Değiştirebilirsiniz.
}
  }
)














client.login(ayarlar.token);