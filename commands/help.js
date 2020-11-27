const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "أمر اظهار الأوامر (واختصاراته , وصفها)",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("FRX SERVER V1.5")
      .setDescription("Translated from FRX_Qutaipah")
      .setColor("#ff0000");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `**${cmd.description}**`,
        true
      );
    });
    
    helpEmbed.setThumbnail(message.author.displayAvatarURL())
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
