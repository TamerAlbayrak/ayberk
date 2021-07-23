const Discord = module.require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Rastgele kullanıcı;')
    .setDescription(message.guild.members.random().displayName)
    .setThumbnail(message.author.avatarURL())
    .setFooter('Sppety')
    .setTimestamp()
    message.channel.send(embed).then(x => x.delete({timeout: 5000}))
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rastgele-kullanıcı'
};