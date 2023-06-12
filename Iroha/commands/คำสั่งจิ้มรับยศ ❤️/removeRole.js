const { Message } = require('discord.js')

module.exports = {
    name : 'removerole',
    run : async(client, message, args) => {
        //Lets use parameters (optionaL)
        /**
         * @param {Message} message
         */
        //so firstly we will check whether the author of the message has permssions
        //this Line means if the author doesn't have manage roles permission it will stop the precress and send the follow text
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('คุณไม่มีสิทธิ์เพียงพอในการใช้คำสั่งนี้ค่ะ ❤️')
        //next we define some variables
        const target = message.mentions.members.first() //member = mentions
        if(!target) return message.channel.send('ไม่มี member ดังกล่าวค่ะ ลองเช็คดูใหม่อีกทีน้า ❤️') //when no member is pinged
        const role = message.mentions.roles.first() // roles = mentions
        if(!role) return message.channel.send('ไม่มี role ดังกล่าวค่ะ ลองเช็คใหม่ดูอีกทีน้า ❤️') //when no role is specified or pinged
        //now the code!
        await target.roles.remove(role) // removeing the role to the user
        message.channel.send(`${target.user.username} role ถูกขโมยไปแล้วง่าาาา ❤️`)
    }
}