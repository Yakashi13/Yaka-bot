const { getBuffer } = require("../../lib/myfunc");
const Jimp = require("jimp");


module.exports = {
  name: "blur",
  alias: ["imageblur"],
  desc: "To make a blurred image",
  category: "Image Manipulation",
  usage: "blur <reply to image>",
  react: "🍁",
  start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {
    if (!m.quoted && !/image/.test(mime)) return m.reply('Please tag someone ! or mention a picture !');


    if(/image/.test(mime)){
        userPfp = await quoted.download();
    }
    else if(m.quoted){
        try {
            userPfp = await Miku.profilePictureUrl(m.quoted.sender, "image");
          } catch (e) {
            return m.reply("User profile pic is Private ! or User doesn't have any profile picture !")
          }
    }
    else{
        return m.reply('Please tag someone ! or mention a picture !');
    }  


      let level = text.split(" ")[1] || 5;
      const img = await Jimp.read(userPfp);
      img.blur(isNaN(level) ? 5 : parseInt(level))
      
      img.getBuffer(`image/png`, (err, buffer) => {
            if (!err) {
                 Miku.sendMessage(m.from, {image:buffer,caption: `_Created by:_ *${botName}*`}, { quoted: m })
            } else {
                console.error(err);
                m.reply("An error occurd !");
            }
        });
    
    },
};
