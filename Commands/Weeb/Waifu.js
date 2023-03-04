const axios = require('axios');

module.exports = {
    name: "waifu",
    alias: ["swaifu","wify"],
    desc: "Get anime girls picture.",
    react: "🥵",
    category: "Weeb",
    start: async(Miku, m,{pushName,prefix}) => {
        let waifus = await axios.get('https://api.waifu.pics/sfw/waifu');  

var Button = [
      {
        buttonId: `${prefix}waifu`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let waf = {
      image: {url:waifus.data.url},
      caption: `Here I am senpai!!😜`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };
    await Miku.sendMessage(m.from, waf, { quoted: m }).catch((err) => {
      return "Error!";
    });
}, 
};
