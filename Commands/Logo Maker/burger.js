const maker = require('mumaker')

module.exports = {
    name: "Burger",
    alias: ["burger"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Yaka, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}burger Yaka Bot*`);
        maker.textpro("https://textpro.me/create-burger-3d-text-effect-1111.html", [
    `${text}`,]).then((data) => Yaka.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}