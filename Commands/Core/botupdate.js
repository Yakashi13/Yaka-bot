const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "botupdate",
    alias: ["update"],
    desc: "Get the last bot updated time.",
    react: "📅",
    category: "Core",
    
     start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/yaka.jpg')
        let repoInfo = await axios.get('https://api.github.com/repos/Yakashi13/Yaka-bot')
        let repo = repoInfo.data
        let txt = `*Y A K A  B O T Last Updated :*\n\n⭕️ ${repo.updated_at}\n\n*Make Sure to up Date!*`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}
