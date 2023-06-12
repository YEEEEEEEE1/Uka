const { MessageEmbed } = require('discord.js')

module.exports ={
    name : 'discord่',
    aliases : ['discord'],
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle('Kazama Iroha  คาซามะ อิโรฮะ :heart: ')
        .setDescription('ยินดีต้อนรับทุกคนนะคะ :heart:')
        .setColor('FF9AFA')
        .setThumbnail('https://imgur.com/a/NBC1aNm')

        // message.channel.send()
        //message.reply()

        message.channel.send(embed)
    }
}