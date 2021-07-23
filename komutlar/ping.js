const Discord = require('discord.js');
 
exports.run = async(client, message) => {
 
    message.channel.send(`<a:tac:748575686813417514> Pingim : ` + client.ws.ping + `ms`);
 
}
 
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['lpm'],
    permLevel : 0
}
 
exports.help = {
    name : 'ping',
    description : '',
    usage : '!ping'
}