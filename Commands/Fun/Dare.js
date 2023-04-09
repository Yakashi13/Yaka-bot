const axios = require("axios");

module.exports = {
  name: "dare",
  alias: ["givedare", "d"],
  desc: "give a dare",
  cool: 3,
  react: "🙄",
  category: "Fun",
  start: async (Miku, m, { text, prefix }) => {
    const shibam = await axios.get(
      "https://dull-plum-panda-gear.cyclic.app/dare"
    );
    
    await Miku.sendMessage(m.from, {image: { url: botImage4 },caption: `*${shibam.data}*`,}, { quoted: m });
  },
};
