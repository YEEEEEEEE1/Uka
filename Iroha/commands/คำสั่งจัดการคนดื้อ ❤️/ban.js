module.exports = {
    name : 'ban',
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('คุณไม่มีสิทธิ์เพียงพอที่จะใช้คำสั่งนี้ค่ะ ❤️');


        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('โปรดเลือก member ที่ต้องการจะแบนค่ะ ❤️');
        
        await Member.ban({ reason : args.slice(1).join(" ")})

        message.channel.send(`${Member.user.tag} โดนแบนออกจากเซิฟเวอร์เรียบร้อยแล้วค่ะ ❤️`)

    }
}