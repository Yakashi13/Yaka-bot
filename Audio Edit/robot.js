const { exec, spawn, execSync } = require("child_process")
const fs = require("fs");
const {getRandom}=require('../../lib/myfunc')

module.exports = {
    name: "robot",
    alias: ["roboteffect"],
    desc: "To add robotic effect in a song",
    category: "Audio Edit",
    usage: "robot <reply to audio>",
    react: "🍁",
    start: async (Miku, m, { text, prefix,quoted,pushName,mime,body }) => {

     let media = await Miku.downloadAndSaveMediaMessage(quoted)
     let set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
     let ran = getRandom('.mp3')
     try{
        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return m.reply('An error Occurd !')
            let buff = fs.readFileSync(ran)
            Miku.sendMessage(m.from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
            fs.unlinkSync(ran)
            })

     }catch(e){
         m.reply('An error Occurd ! Please mention an Audio!')
        }
        
    }
}
