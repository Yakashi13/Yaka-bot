const maker = require('mumaker')

module.exports = {
    name: "3dchristmas",
    alias: ["3dchristmastree"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}3dchristmas Atlas Bot*`);
        maker.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}