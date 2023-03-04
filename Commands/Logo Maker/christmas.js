const maker = require('mumaker')

module.exports = {
    name: "christmas",
    alias: ["christmastree"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}christmas Yaka Bot*`);
        maker.textpro("https://textpro.me/christmas-tree-text-effect-online-free-1057.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}