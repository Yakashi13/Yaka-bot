const maker = require('mumaker')

module.exports = {
    name: "matrix",
    alias: ["mtx"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Yaka, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}matrix Yaka Bot*`);
        maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${text}`,]).then((data) => Yaka.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}