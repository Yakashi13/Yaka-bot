const { getBuffer } = require("../../lib/myfunc");

module.exports = {
    name: "screenshot",
    alias: ["ss"],
    desc: "Take a screenshot of a website without visiting it.",
    usage: "ss <link>",
    react: "📷",
    category: "Essentials",
    start: async(Miku, m,{pushName,prefix,args,text}) => {       
        if(!args[0]) return m.reply(`Please provide me a link to lookup !`);
        if (!args[0].includes("http")){
            lookupURL= `https://${args[0]}`;
        }
        else{
            lookupURL = args[0];
        }   
        try {
            const resImage = await getBuffer(`https://api.popcat.xyz/screenshot?url=${lookupURL}`);
            await Miku.sendMessage(m.from, {image: resImage, caption: `_Here's how this url looks like:_\n${args[0]}\n`}, {quoted: m});
        } catch (error) {
            m.reply(`An error occured while processing your request !\n\nPlease recheck your link and try again !`);
        }
    }
}

        