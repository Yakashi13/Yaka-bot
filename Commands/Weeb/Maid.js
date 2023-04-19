const axios = require("axios")

module.exports = {
    name: "maid",
    alias: ["safemaid","smd"],
    desc: "Get anime maid girls picture.",
    react: "🥵",
    category: "Weeb",
    start: async(Yaka, m,{pushName,prefix}) => {
        let maids = await axios.get('https://zany-teal-alligator-suit.cyclic.app/maid');  

var Button = [
      {
        buttonId: `${prefix}smd`,
        buttonText: { displayText: `⏩💦` },
        type: 1,
      },
    ];
    let neko = {
      image: {url:maids.data.url},
      caption: `Here I am Oujou...Sama...!!`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };
    await Yaka.sendMessage(m.from, neko, { quoted: m }).catch((err) => {
      return "Error!";
    });
}, 
};
