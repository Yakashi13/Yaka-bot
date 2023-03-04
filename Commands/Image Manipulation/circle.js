const { getBuffer } = require("../../lib/myfunc");
const fs = require("fs");
const  Canvacord  = require("canvacord");

module.exports = {
  name: "imagecircle2",
  alias: ["circle2"],
  desc: "To make circle sized image",
  category: "Image Manipulation",
  usage: "circle <reply to image>",
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

    const result = await Canvacord.Canvacord.circle(userPfp, false);

    await Miku.sendMessage(m.from, { image: result, caption:"Here it is...\n" }, { quoted: m });


    }}