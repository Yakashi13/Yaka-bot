const YT = require("../../lib/ytdl-core.js");

module.exports = {
  name: "ytvd",
  alias:["mp4","ytmp4","ytvideo"],
  desc: "To download a song as mp4 from YouTube link",
  category: "Media",
  usage: `ytvd <song link>`,
  react: "👹",
  start: async (Yaka, m, { text, prefix, args }) => {

    if (!args[0])
        return Yaka.sendMessage(
          m.from,
          { text: `Please provide a YouTube Video link !` },
          { quoted: m }
        );
    
          const vid= await YT.mp4(text);
        const vidname = vid.title;
        await Yaka.sendMessage(m.from,{
            video: {url:vid.videoUrl},
            caption: vidname + ` By: *${botName}*`
        },{quoted:m})
        
            }
        }
