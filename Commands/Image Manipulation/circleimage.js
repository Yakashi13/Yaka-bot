const { getBuffer } = require("../../lib/myfunc");
const Jimp = require("jimp");


module.exports = {
  name: "imagecircle",
  alias: ["circle", "circleimage", "icircle"],
  desc: "To make circle sized image",
  category: "Image Manipulation",
  usage: "circle <reply to image>",
  react: "🍁",
  start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {
    if (/image/.test(mime)) {
      let mediaMess = await quoted.download();
      
       await Jimp.read(mediaMess)
        .then((image) => {
          return image.circle().getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
            if (!err) {
                 Miku.sendMessage(m.from, {image:buffer,caption: `_Created by:_ *${botName}*`}, { quoted: m })
            } else {
                console.error(err);
            }
        });
        })
        
    } else {
      Miku.sendMessage(
        m.from,
        {
          text: `Please mention an *imade* and type *${prefix}circle* to create circle image.`,
        },
        { quoted: m }
      );
    }
  },
};
