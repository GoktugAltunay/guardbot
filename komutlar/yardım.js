const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const synx = new Discord.MessageEmbed()

             .setColor('#fff000')
             .addField(`Synx - Guard Bot Yardım Komutları`, `
             ${prefix}antiraid aç
             ${prefix}capsengel aç
             ${prefix}emojikoruma aç
             ${prefix}everengel aç
             ${prefix}kanalkoruma aç
             ${prefix}küfürengel aç
             ${prefix}modlog #kanal
             ${prefix}reklamengel aç
             ${prefix}rolkoruma aç
             ${prefix}sohbet-aç
             ${prefix}sohbet-kapat
             ${prefix}sil-üye @üye miktar
             ${prefix}sil miktar
             ${prefix}yavaşmod süre
             ${prefix}ban @üye sebep
             ${prefix}kick @üye sebep             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(synx);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}