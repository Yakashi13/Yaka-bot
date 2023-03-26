const maker = require('mumaker')

module.exports = {
    name: "neongreen",
    alias: ["gereenneon","gerenneon","ngreen"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}ngreen Yaka Bot*`);
        maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}