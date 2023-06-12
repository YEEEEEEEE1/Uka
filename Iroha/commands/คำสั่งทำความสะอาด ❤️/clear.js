module.exports = {
    name : 'clear',
    aliases : ['purge'],
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGAE_MESSAGES')) return message.channel.send('คุณไม่มีสิทธิ์เพียงพอที่จะใช้คำสั่งนี้ค่ะ ❤️')
        if(!args[0]) return message.channel.send('โปรดเลือกจำนวนข้อความที่ต้องการลบค่ะ ❤️')
        if(isNaN(args[0])) return message.channel.send('ใช้ได้แค่สำหรับตัวเลขน้า ❤️')
        if(parseInt(args[0]) > 100) return message.channel.send('นายท่านสามารถลบข้อความได้มากสุด 100 ข้อความนะคะ ❤️')
        //not Lets delete the messages
            await message.channel.bulkDelete(parseInt(args[0]) + 1)
                .catch(err => console.log(err))
            message.channel.send(`ลบข้อความจำนวน ${args[0]} เรียบร้อยแล้วค่ะ ❤️`).then(m => m.delete({ timeout : 5000 }))
    }
}