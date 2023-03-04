let {toAudio} = require('../../lib/File-Converter.js');

module.exports = {
    name: "toaudio",
    alias: ["getaudio"],
    desc: "To get audio file from a voice note or video",
    category: "Utilities",
    usage: "toaudio <reply to audio/video>",
    react: "🍁",
    start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {
        if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Send/Reply Video/Audio You Want To Convert Into Audio With Caption *${prefix}tomp3*`);
        if (!m.quoted) return m.reply(`Send/Reply Video/Audio You Want To Convert Into Audio With Caption ${prefix}tomp3`);
        let media = await quoted.download()
        let audio = await toAudio(media, 'mp4')
        Miku.sendMessage(m.from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
    }
}