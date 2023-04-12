const maker = require('mumaker')

module.exports = {
    name: "glitch",
    alias: ["glt"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Yaka, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}glitch Yaka Bot*`);
        maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${text}`,]).then((data) => Yaka.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}