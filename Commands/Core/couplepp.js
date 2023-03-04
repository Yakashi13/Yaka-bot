const {fetchJson} = require('../../lib/myfunc')

module.exports = {
    name: "couplepp",
    alias: ["ppcouple","couplepfp"],
    desc: "Get matching couple profile picture.",
    react: "💞",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');
        let randompplink = anu[Math.floor(Math.random() * anu.length)];
        Miku.sendMessage(m.from, { image: { url: randompplink.male }, caption: `_For Him..._` }, { quoted: m })
        Miku.sendMessage(m.from, { image: { url: randompplink.female }, caption: `_For Her..._` }, { quoted: m })

    }
}