const maker = require('mumaker')

module.exports = {
    name: "wall",
    alias: ["thewall","wallstyle"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}wall Yaka Bot*`);
        maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}