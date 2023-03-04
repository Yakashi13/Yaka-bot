const fs = require("fs");
require("../../config.js");
require("../../Core.js");
const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();
module.exports = {
    name: "wallpaper",
    alias: ["animewallpaper"],
    usage: `${prefa}wallpaper <query>`,
    desc: "Gives you the wallpaper...",
    category: "Weeb",
    react: "✅",
  
    start: async (Miku, m, { command, prefix, text, args }) => {
        const im = args.join(" ").split("#");
        const noi = Number(im[1]) || 1;
        if (!im[0]) return m.reply("No wallpaper found...");
        let wallpapers;
        try {
          wallpapers = await wall.getAnimeWall5(im[0]);
        } catch (error) {
          try {
            wallpapers = await wall.getAnimeWall3(im[0]);
          } catch (error) {
            return m.reply("No wallpaper found...");
          }
        }
        if (!wallpapers) return m.reply("No wallpaper found...");
        for (let i = 0; i < Math.min(wallpapers.length, noi); i++) {
          const randomIndex = Math.floor(Math.random() * wallpapers.length);
      
          Miku.sendMessage(m.from, {
            image: {
              url: wallpapers[randomIndex].image,
            },
            caption: `*Search term:* ${im[0]}`,
            footer: `*${botName}*`,
          }, {
            quoted: m,
          });
        }
      },
    }
  
  
