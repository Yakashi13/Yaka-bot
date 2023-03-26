const axios = require('axios')

module.exports = {
    name: 'truth',
    alias: ['t'],
    desc: 'truth',
    cool: 3,
    react: '🙄',
    category: 'Fun',
    start: async (Miku, m, { text, prefix }) => {
        const shibam = await axios.get('https://dull-plum-panda-gear.cyclic.app/truth')
        
        const buttons = [
            { buttonId: `${prefix}dare`, buttonText: { displayText: 'Dare' }, type: 1 },
            { buttonId: `${prefix}truth`, buttonText: { displayText: '⏩💦' }, type: 1 }
        ]
        const buttonMessage = {
            image: { url: botImage3 },
            caption: `*${shibam.data}*`,
            footer: `*${botName}*`,
            buttons: buttons,
            headerType: 4
        }
        return await Miku.sendMessage(m.from, buttonMessage, { quoted: m })
    }
}
