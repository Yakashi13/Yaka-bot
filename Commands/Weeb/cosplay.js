const { getBuffer } = require("../../lib/myfunc");

module.exports = {
  name: "cosplay",
  alias: ["crosplay", "cos", "cplay"],
  desc: "To get a random Cosplay image",
  category: "Weeb",
  usage: `cosplay`,
  react: "👹",
  start: async (Yaka, m, { prefix }) => {
    var cosplayImage = await getBuffer(`https://fantox-cosplay-api.onrender.com/`);
    var cosplayButton = [
      {
        buttonId: `${prefix}cosplay`,
        buttonText: { displayText: `⏩💦` },
        type: 1,
      },
    ];
    let bmffg = {
      image: cosplayImage,
      caption: `Cosplay API by *Team Atlas*\n\n*API link:* https://shubhapratimbiswas.tech\n`,
      footer: `*${botName}*`,
      buttons: cosplayButton,
      headerType: 4,
    };
    await Yaka.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
