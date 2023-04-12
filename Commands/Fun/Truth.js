const axios = require('axios')

module.exports = {
    name: 'truth',
    alias: ['t'],
    desc: 'truth',
    cool: 3,
    react: '🙄',
    category: 'Fun',
    start: async (Yaka, m, { text, prefix }) => {
        const shibam = await axios.get('https://dull-plum-panda-gear.cyclic.app/truth')
        
        await Yaka.sendMessage(m.from, {image: { url: botImage3 },caption: `*${shibam.data}*`,}, { quoted: m });
    }
}
