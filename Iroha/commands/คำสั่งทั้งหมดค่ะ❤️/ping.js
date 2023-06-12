const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Returns latency and API ping',
    
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`กำลังประมวลผลค่ะ :heart:...`)
        const embed = new MessageEmbed()
            .setTitle('อ๊ะ! :heart:')
            .setDescription(`ความเร็วในการเข้าเว็บไซต์ ${client.ws.ping}MS :heart:\nความเร็วในการส่งข้อความ ${Math.floor(msg.createdAt - message.createdAt)}MS :heart:`)
            await message.channel.send(embed)
            msg.delete()

    }
}
