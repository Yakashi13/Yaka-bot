const fs = require("fs");
const { webp2mp4File } = require('../../lib/uploader')

module.exports = {
  name: "togif",
  alias: ["stickertogif"],
  desc: "To get GIF from sticker",
  category: "Utilities",
  usage: "togif <reply to animated sticker>",
  react: "👹",
  start: async (Yaka, m, { text, prefix, quoted, pushName, mime, body }) => {
    if (/webp/.test(mime)) {
      let mediaMess = await Yaka.downloadAndSaveMediaMessage(quoted)
      let webpToMp4 = await webp2mp4File(mediaMess)

        await Yaka.sendMessage(m.from, { video: {url:webpToMp4.result}, caption:`_Converted by:_  *${botName}*\n` ,gifPlayback: true}, { quoted: m });
        fs.unlinkSync(mediaMess);
    } else {
      Yaka.sendMessage(
        m.from,
        {
          text: `Please mention an *Animated* sticker and type *${prefix}togif* to get GIF from sticker.`,
        },
        { quoted: m }
      );
    }
  },

};
