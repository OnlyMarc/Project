const Discord = require("discord.js");
const Prefix = "p!"

var eightball = [
  "Yea, duh",
  "No, cuz ur bad",
  "No, deal with it",
  "Ur stupid",
  "Stop asking me things",
  "Obviously... yes.",
  "Go away",
  "Ye, idiot.",
  ":thinking: No",
  ":thinking: Ye"
];

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`p!help`);
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;
  
  if (!message.content.startsWith(Prefix)) return;
  
  var args = message.content.substring(Prefix.length).split(" ");
  
  switch (args[0].toLowerCase()) {
    case "ping":
      message.channel.sendMessage("Pong!");
      break;
    case "help":
      var embed = new Discord.RichEmbed()
        .addField("Title1", "Text1", true)
        .addField("Title2", "Text2", true)
        .addField("Title3", "Text3", true)
        .addField("Title4", "Text4". true)
        .addField("Title5", "Text5", true)
        .addField("Title5", "Text5", true)
        .setColor(0xFF0000)
        .setFooter("Bot")
        .setThumbnail(message.author.avatarURL)
      message.channel.sendEmbed(embed);
      break;
    case "8ball":
      if (args[1]) message.channel.sendMessage(eightball[Math.floor(Math.random() * eightball.length)]);
      else message.channel.sendMessage("Did you even bother to write a message?");
      break;
  }
});

bot.login(process.env.token);
