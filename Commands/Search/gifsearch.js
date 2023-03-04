const axios = require("axios");
require("../../config.js");


module.exports = {
  name: "gifsearch",
  alias: ["gif","getgif"],
  desc: "To search any gif",
  category: "Search",
  usage: `gif <search term>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a Search Term !` },
        { quoted: m }
      );
    var gifSearchTerm = args.join(" ");
        const gif = await axios.get(`https://tenor.googleapis.com/v2/search?q=${gifSearchTerm}&key=${tenorApiKey}&client_key=my_project&limit=8&media_filter=mp4`);

        let result = Math.floor(Math.random() *8)
        let gifUrl = gif.data.results[result].media_formats.mp4.url;
        //console.log(gifUrl);

    
        let buttons = [
          { buttonId: `${prefix}gifsearch ${gifSearchTerm}`, buttonText: { displayText: ">>" }, type: 1 },
        ];
        let buttonMessage = {
          video: { url: gifUrl }, gifPlayback:true,
          caption: `Gif serach result for: *${gifSearchTerm}*\n`,
          footer: `*${botName}*`,
          buttons: buttons,
          headerType: 4,
        };
        await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
       
}}
