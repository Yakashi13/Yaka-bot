const axios = require('axios')

module.exports = {
    name: "maid",
    alias: ["safemaid","smd"],
    desc: "Get anime maid girls picture.",
    react: "🥵",
    category: "Weeb",
    start: async(Miku, m,{pushName,prefix}) => {
        let maids = await axios.get('https://neko-maid-api.onrender.com');  

var Button = [
      {
        buttonId: `${prefix}smd`,
        buttonText: { displayText: `>>` },
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
    await Miku.sendMessage(m.from, neko, { quoted: m }).catch((err) => {
      return "Error!";
    });
}, 
};
