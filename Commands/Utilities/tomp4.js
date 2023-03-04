const fs = require("fs");
const { webp2mp4File } = require('../../lib/uploader')

module.exports = {
  name: "tomp4",
  alias: ["tovideo", "stickertovideo"],
  desc: "To get Video from sticker",
  category: "Utilities",
  usage: "tomp4 <reply to animated sticker>",
  react: "🍁",
  start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {
    if (/webp/.test(mime)) {
      let mediaMess = await Miku.downloadAndSaveMediaMessage(quoted)
      let webpToMp4 = await webp2mp4File(mediaMess)

        await Miku.sendMessage(m.from, { video: {url:webpToMp4.result}, caption:`_Converted by:_  *${botName}*\n`}, { quoted: m });
        fs.unlinkSync(mediaMess);
    } else {
      Miku.sendMessage(
        m.from,
        {
          text: `Please mention an *Animated* sticker and type *${prefix}tomp4* to get Video from sticker.`,
        },
        { quoted: m }
      );
    }
  },

};
