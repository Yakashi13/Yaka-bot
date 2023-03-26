const maker = require('mumaker')

module.exports = {
    name: "thunder2",
    alias: ["thd2"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}thunder2 Yaka Bot*`);
        maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}