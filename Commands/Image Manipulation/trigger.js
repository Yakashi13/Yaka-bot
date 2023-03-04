const GIFEncoder = require('gifencoder')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const Canvas = require('canvas')
const fs = require('fs')


module.exports = {
    name: "trigger",
    alias: ["triggered"],
    desc: "To make a triggered image",
    category: "Image Manipulation",
    usage: "trigger <reply to image / mention user>",
    react: "🍁",
    start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {
      if (!m.quoted && !/image/.test(mime)) return m.reply('Please tag someone ! or mention a picture !');
  
  
      if(/image/.test(mime)){
          image = await quoted.download();
      }
      else if(m.quoted){
          try {
              image = await Miku.profilePictureUrl(m.quoted.sender, "image");
            } catch (e) {
              return m.reply("User profile pic is Private ! or User doesn't have any profile picture !")
            }
      }
      else{
          return m.reply('Please mention a picture or tag a non-sticker or non-video message !');
      } 


      let triggerd = await fs.readFileSync('./Assets/Img/triggered.png')

      const getImage = async (image, timeout = 15) => {
        const img = await Canvas.loadImage(image)
        const GIF = new GIFEncoder(256, 310)
        GIF.start()
        GIF.setRepeat(0)
        GIF.setDelay(timeout)
        const canvas = Canvas.createCanvas(256, 310)
        const ctx = canvas.getContext(`2d`)
        const BR = 20
        const LR = 10
        for (let i = 0; i < 9; i++) {
            ctx.clearRect(0, 0, 256, 310)
            ctx.drawImage(
                img,
                Math.floor(Math.random() * BR) - BR,
                Math.floor(Math.random() * BR) - BR,
                256 + BR,
                310 - 54 + BR
            )
            ctx.fillStyle = `#FF000033`
            ctx.fillRect(0, 0, 256, 310)
            ctx.drawImage(
                await Canvas.loadImage(triggerd || Buffer.from('')),
                Math.floor(Math.random() * LR) - LR,
                310 - 54 + Math.floor(Math.random() * LR) - LR,
                256 + LR,
                54 + LR
            )
            GIF.addFrame(ctx)
        }
        GIF.finish()
        return GIF.out.getData()
    }
    try {
        const stickerm = new Sticker(await getImage(image), {
            pack: `Triggered`,
            author: m.sender.username || `${botName}`,
            type: "full",
            categories: ["💢"],
        })

        if (!stickerm) return  m.reply(`I couldn't find an image to trigger.`);
    const stickerBuffer2 = await stickerm.toBuffer()
    await Miku.sendMessage(m.from, {sticker:stickerBuffer2}, { quoted: m })

    
    } catch (error) {
        m.reply(`Please mention a picture or tag a non-sticker or non-video message !`)
    }
    


    
}
}
