const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'react-love',
    run : async(client, message) => {
        const embed = new MessageEmbed()
            .setTitle('ความรักจากเค้า ❤️')
            .setDescription('')
            .setColor('#F496FA')

        const msg = await message.channel.send(embed)
        await msg.react('❤️')
        await msg.react('❤️')
    }
}