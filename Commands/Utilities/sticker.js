const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')

module.exports = {
    name: "sticker",
    alias: ["s"],
    desc: "To make sticker",
    category: "Utilities",
    usage: "sticker <reply to image>",
    react: "🍁",
    start: async (Miku, m, { text, prefix,quoted,pushName,mime,body }) => {
        if (/image/.test(mime)) {
            let mediaMess = await quoted.download();
            let stickerMess = new Sticker(mediaMess, {
                pack: packname,
                author: pushName,
                type: StickerTypes.FULL,
                categories: ['🤩', '🎉'],
                id: '12345',
                quality: 70,
                background: 'transparent'
            });
            const stickerBuffer = await stickerMess.toBuffer()
            Miku.sendMessage(m.from, {sticker:stickerBuffer}, { quoted: m })
        }
        else if (/video/.test(mime)) {
            let mediaMess = await quoted.download();
            if ((quoted.msg || quoted).seconds > 15)  return Miku.sendMessage(m.from,{text:'Please send video less than 15 seconds.'},{quoted:m})
            let stickerMess = new Sticker(mediaMess, {
                pack: packname,
                author: pushName,
                type: StickerTypes.FULL,
                categories: ['🤩', '🎉'],
                id: '12345',
                quality: 70,
                background: 'transparent'
            });
            const stickerBuffer2 = await stickerMess.toBuffer()
             Miku.sendMessage(m.from, {sticker:stickerBuffer2}, { quoted: m })
    }else{
        Miku.sendMessage(m.from,{text:`Please mention an *image/video* and type *${prefix}s* to create sticker.`},{quoted:m})
    } 
}}