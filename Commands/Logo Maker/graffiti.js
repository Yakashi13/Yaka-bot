const maker = require('mumaker')

module.exports = {
    name: "graffiti",
    alias: ["grafiti"],
    desc: "Make text logo.",
    react: "👹",
    category: "Logo Maker",
    start: async(Yaka, m,{pushName,prefix,text}) => {
        if(!text.includes("|")) return m.reply(`Example: *${prefix}graffiti Yaka MD | Yakashi*`);
        teks1 = text.split("|")[0]
        teks2 = text.split("|")[1]
        maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
            `${teks1}`,`${teks2}`]).then((data) => Yaka.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}