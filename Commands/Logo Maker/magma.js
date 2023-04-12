const maker = require('mumaker')

module.exports = {
    name: "magma",
    alias: ["mg"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Yaka, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}magma Yaka Bot*`);
        maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${text}`,]).then((data) => Yaka.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}