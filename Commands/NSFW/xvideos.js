const axios = require("axios");

module.exports = {
  name: "xvideo",
  alias: ["xv", "xvideos"],
  desc: "Download Xvideos video through search", 
  category: "Nsfw",
  usage: `xvideo <query>`,
  react: "🍁",
  start: async (Miku, m, { prefix,NSFWstatus,args }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    m.reply(`Downloading video...`)
    const searchQuery = args.join(" ");

if(!searchQuery){
  return reply('Please provide a ❌videos search term to get video!');
}

let res = await axios.get("https://fantox001-scrappy-api.vercel.app/xvideos?search=" + searchQuery)

const scrappedURL = res.data.videoUrl

    let bmffg = {
      video: {url: scrappedURL},
      caption: `\n_*❌Videos Downloader*_\n\n*Scrappy API - by FantoX*\n\n_*Url:*_ https://github.com/FantoX001/Scrappy-API \n`,
    };

    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
