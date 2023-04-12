const maker = require('mumaker')

module.exports = {
    name: "circuit",
    alias: ["cir"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Yaka, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}circuit Yaka Bot*`);
        maker.textpro("https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html", [
    `${text}`,]).then((data) => Yaka.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}