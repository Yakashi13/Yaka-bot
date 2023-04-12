const maker = require('mumaker')

module.exports = {
    name: "chocolate",
    alias: ["choco"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Yaka, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}chocolate Yaka Bot*`);
        maker.textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [
    `${text}`,]).then((data) => Yaka.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}