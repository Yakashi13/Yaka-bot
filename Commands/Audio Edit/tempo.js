const { exec, spawn, execSync } = require("child_process")
const fs = require("fs");
const {getRandom}=require('../../lib/myfunc')

module.exports = {
    name: "tempo",
    alias: ["tempoeffect"],
    desc: "To add tempo effect in a song",
    category: "Audio Edit",
    usage: "tempo <reply to audio>",
    react: "👹",
    start: async (Yaka, m, { text, prefix,quoted,pushName,mime,body }) => {

     let media = await Yaka.downloadAndSaveMediaMessage(quoted)
     let set = '-filter:a "atempo=0.9,asetrate=65100"'
     let ran = getRandom('.mp3')
     try{
        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return m.reply('An error Occurd !')
            let buff = fs.readFileSync(ran)
            Yaka.sendMessage(m.from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
            fs.unlinkSync(ran)
            })

     }catch(e){
         m.reply('An error Occurd ! Please mention an Audio!')
        }
        
    }
}
