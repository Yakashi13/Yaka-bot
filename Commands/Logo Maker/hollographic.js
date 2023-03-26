const maker = require('mumaker')

module.exports = {
    name: "hollographic",
    alias: ["holographic"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}holographic Yaka Bot*`);
        maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}