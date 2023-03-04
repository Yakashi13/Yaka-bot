const { getBuffer } = require("../../lib/myfunc");

module.exports = {
  name: "hmiku",
  alias: ["nsfwmiku", "hentaimiku", "henmiku"],
  desc: "Hentai picture of miku",
  category: "Weeb",
  usage: `hmiku`,
  react: "🍁",
  start: async (Miku, m, { prefix,NSFWstatus }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    let Image = await getBuffer(`https://mikuhentai-api.onrender.com/`);
    let Button = [
      {
        buttonId: `${prefix}hmiku`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let bmffg = {
      image: Image,
      caption: `Miku Hentai API by *Team Atlas*\n\n*API link:* https://shubhapratimbiswas.tech\n`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };
    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
