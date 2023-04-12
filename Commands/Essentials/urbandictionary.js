const axios = require("axios");

module.exports = {
    name: "urbandictionary",
    alias: ["udictionary"],
    desc: "To search something in Urban Dictionary",
    usage: "udictionary <text>",
    react: "📚",
    category: "Essentials",
    start: async(Yaka, m,{pushName,prefix,args,text}) => {
        if(!args[0]) return m.reply(`Please provide me a text to search in Urban Dictionary !`);
        const query = args.join(" ");
        await axios.get(`https://api.urbandictionary.com/v0/define?term=${query}`).then((res) => {
            const text = `         *『  Urban Dictionary  』*\n\n📚 *Search term :* ${query}\n\n📖 *Definition :* ${res.data.list[0].definition
                .replace(/\[/g, "")
                .replace(/\]/g, "")}\n\n💬 *Example :* ${res.data.list[0].example
                .replace(/\[/g, "")
                .replace(/\]/g, "")}\n`;

             Yaka.sendMessage(m.from,  {image: {url: botImage1},caption: text}, {quoted: m });
                }).catch((err) => {
                    m.reply(`An error Occurd !`);
                }
            );
    }
}
