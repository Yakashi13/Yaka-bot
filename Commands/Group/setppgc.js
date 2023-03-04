const fs = require("fs");
const Jimp = require("jimp");
require("../../Core.js");

module.exports = {
  name: "setppgc",
  alias: ["setgcpp", "setppgroup"],
  desc: "Set a group profile picture.",
  category: "Group",
  usage: `Tag an Image and type -setppgc}`,
  react: "🍁",
  start: async (
    Miku,
    m,
    { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, mime, quoted }
  ) => {
    if (!isAdmin && !isBotAdmin)
      return Miku.sendMessage(m.from, { text: `*Bot* and *${pushName}* both must be Admin in order to use this Command!` }, { quoted: m });

    if (!/image/.test(mime))
      return Miku.sendMessage(
        m.from,
        {
          text: `Send/Reply Image With Caption ${
            prefix + "setgcpp"
          } to change the Profile Pic of this group.`,
        },
        { quoted: m }
      );
    if (/webp/.test(mime))
      return Miku.sendMessage(
        m.from,
        {
          text: `Send/Reply Image With Caption ${
            prefix + "setgcpp"
          } to change the Profile Pic of this group.`,
        },
        { quoted: m }
      );

      let quotedimage = await Miku.downloadAndSaveMediaMessage(quoted)
      var { preview } = await generatePP(quotedimage)   
      
      await Miku.query({
        tag: 'iq',
        attrs: {
            to: m.from,
            type:'set',
            xmlns: 'w:profile:picture'
        },
        content: [{
            tag: 'picture',
            attrs: { type: 'image' },
            content: preview
        }]
    })
    fs.unlinkSync(quotedimage)

    ppgc = await Miku.profilePictureUrl(m.from, "image");

    Miku.sendMessage(
        m.from,
        { image: {url: ppgc},caption: `\nGroup Profile Picture has been updated Successfully by *${pushName}* !` },
        { quoted: m }
      )
  },
};

async function generatePP(buffer) {
    const jimp = await Jimp.read(buffer)
    const min = jimp.getWidth()
    const max = jimp.getHeight()
    const cropped = jimp.crop(0, 0, min, max)
    return {
        img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
        preview: await cropped.normalize().getBufferAsync(Jimp.MIME_JPEG)
    }
}