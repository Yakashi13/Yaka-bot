const maker = require('mumaker')

module.exports = {
    name: "joker",
    alias: ["joker"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}joker Yaka Bot*`);
        maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}