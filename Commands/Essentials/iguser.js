const axios = require("axios");

module.exports = {
  name: "iguser",
  alias: ["instagramuser", "instauser", "iginfo"],
  desc: "To get details of an instagram user",
  category: "Essentials",
  usage: "iguser <instagram username>",
  react: "🍁",
  start: async (Miku, m, { text, prefix, pushName,args }) => {
    if (!text)
      return m.reply(
        `Please provide me a instagram username ${pushName} senpai !`
      );
    let igSearchTeram = text;
    try {
      fids = await axios.get(
        `https://api.popcat.xyz/instagram?user=${igSearchTeram}`
      );

      console.log(fids.data)
      const reply = `
*⚡Name:* ${fids.data.full_name}
*🔗 Username:* ${fids.data.username}
*🧒 Followers:* ${fids.data.followers}
*✨ Type:* ${fids.data.private}
*✔ Verified:* ${fids.data.verified}
*🙋 Following:* ${fids.data.following}
*👤 Post:* ${fids.data.posts}
*🍭Bio:* ${fids.data.biography}\n`;
      Miku.sendMessage(
        m.from,
        { image: { url: fids.data.profile_pic }, caption: reply },
        { quoted: m }
      );
    } catch (err) {
      console.log(err);
      return m.reply(
        `An error occurd ! Please check instagram username ${pushName} senpai !`
      );
    }
  },
};
