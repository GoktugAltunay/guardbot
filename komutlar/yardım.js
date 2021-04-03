const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const synx = new Discord.MessageEmbed()

             .setColor('#fff000')
             .addField(`T E N R A Guard Yardım Komutları`, `
             • <a:yldzlar:826880850225922049> ${prefix}antiraid aç
             • <a:yldzlar:826880850225922049> ${prefix}capsengel aç
             • <a:yldzlar:826880850225922049> ${prefix}emojikoruma aç
             • <a:yldzlar:826880850225922049> ${prefix}everengel aç
             • <a:yldzlar:826880850225922049> ${prefix}kanalkoruma aç
             • <a:yldzlar:826880850225922049> ${prefix}küfürengel aç
             • <a:yldzlar:826880850225922049> ${prefix}modlog #kanal
             • <a:yldzlar:826880850225922049> ${prefix}reklamengel aç
             • <a:yldzlar:826880850225922049> ${prefix}rolkoruma aç
             • <a:yldzlar:826880850225922049> ${prefix}sohbet-aç
             • <a:yldzlar:826880850225922049> ${prefix}sohbet-kapat
             • <a:yldzlar:826880850225922049> ${prefix}sil-üye @üye miktar
             • <a:yldzlar:826880850225922049> ${prefix}sil miktar
             • <a:yldzlar:826880850225922049> ${prefix}yavaşmod süre
             • <a:yldzlar:826880850225922049> ${prefix}ban @üye sebep
             • <a:yldzlar:826880850225922049> ${prefix}kick @üye sebep             
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