const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "help",
  aliases : ['h'],
  description: "Shows all available bot commands.",
  run: async (client, message, args) => {


    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "คำสั่งยังไม่เสร็จ รออีกหน่อยน้า :heart:" ;

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "คำสั่งยังไม่เสร็จ รออีกหน่อยน้า :heart:" : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("ต้องการความช่วยเหลือหรอคะ? :heart:")
        .addFields(categories)
        .setDescription(
          `ใช้ \`${prefix}help\` และตามด้วยประเภทของคำสั่งสิคะ :heart:
          ตัวอย่างเช่น \`${prefix}help ping\` ค่ะ :heart:`
        )
        .setFooter(
          `Requested By ${message.author.tag} ❤️`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`ไม่มีคำสั่งดังกล่าวนะคะ:heart: พิมพ์ \`${prefix}help\` เพื่อดูคำสั่งทั้งหมดค่ะ :heart:`)
          .setColor("F496FA");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("รายละเอียดคำสั่ง ดังนี้ค่ะ ❤️")
        .addField("สัญลักษณ์ ❤️", `\`${prefix}\``)
        .addField(
          "คำสั่ง ❤️",
          command.name ? `\`${command.name}\`` : "คำสั่งผิดพลาดค่ะ ลองพิมพ์ใหม่น้า :heart:"
        )
        .addField(
          "วิธีการใช้ ❤️",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .setFooter(
          `Requested By ${message.author.tag} ❤️`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};
