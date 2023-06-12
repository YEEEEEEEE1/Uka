const { MessageEmbed } = require('discord.js')

module.exports ={
    name : 'discord่japan',
    aliases : ['discordjapan'],
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle('Kazama Iroha  風真いろは :heart: ')
        .setDescription('いろは ようこそみなさん :heart:')
        .setColor('FF9AFA')
        .setThumbnail('https://imgur.com/a/NBC1aNm')

        // message.channel.send()
        //message.reply()

        message.channel.send(embed)
    }
}