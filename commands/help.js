module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("NYPD help system")
  .setDescription("This menu is a list of commands you can use with NYPD Bot.")
  .addField("Do you expect me to have commands allready? /nCheck back later please.")
  .setColor("RED")
  .setThumbnail(bot.user.avatarURL)
  .settimestamp()
  
   message.channel.send({embed: em})
}

module.exports.help = {
  name: "help"
}
