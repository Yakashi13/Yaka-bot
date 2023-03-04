const axios = require("axios");

module.exports = {
  name: "yuri",
  alias: ["nsfwyuri"],
  desc: "Hentai picture of yuri waifu",
  category: "Nsfw",
  usage: `yuri`,
  react: "🍁",
  start: async (Miku, m, { prefix, NSFWstatus }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    m.reply(mess.waiting)
    let buff = await axios.get(`https://fantox-apis.vercel.app/yuri`)
    let imgURL = buff.data.url


    let Button = [
      {
        buttonId: `${prefix}nsfwmenu`,
        buttonText: { displayText: `NSFW Menu` },
        type: 1,
      },
      {
        buttonId: `${prefix}yuri`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let bmffg = {
      image: { url: imgURL },
      caption: `\n* Here What you are looking for 👀..*\n\n*`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };

    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
