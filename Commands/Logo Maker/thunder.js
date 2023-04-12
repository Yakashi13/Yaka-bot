const maker = require('mumaker')

module.exports = {
    name: "thunder",
    alias: ["thd"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Yaka, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}thunder Yaka Bot*`);
        maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${text}`,]).then((data) => Yaka.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}