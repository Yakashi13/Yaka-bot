const pTable = require("ptable"); 
const npt = require("node-periodic-table");


module.exports = {
    name: "element",
    alias: ["elementinfo"],
    desc: "To get info of an element from priodic table", 
    usage: "element br",
    react: "🍁",
    category: "Essentials",
    start: async(Miku, m,{pushName,prefix,args,text}) => {
        if(!args[0]) return m.reply(`Please use this command like this: ${prefix}element br`);
        const query = args.join(" ");
       const search = await pTable(query);
       if (search === undefined) return m.reply(`Please provide me a valid element by visiting here !\n\nhttps://en.m.wikipedia.org/wiki/Periodic_table`);

       const response = await npt.getByNumber(search.number);
       let caption  = "";
        caption = "              *『  Element Details  』*\n\n";
        caption += `🔴 *Elelment:* ${response.name}\n`;
		caption += `⬜ *Atomic Number:* ${response.number}\n`;
		caption += `🟡 *Atomic Mass:* ${response.atomic_mass}\n`;
		caption += `⬛ *Symbol:* ${response.symbol}\n`;
		caption += `❓ *Appearance:* ${response.apearance}\n`;
		caption += `🟢 *Phase:* ${response.phase}\n`;
		caption += `♨️ *Boiling Point:* ${response.boil} K\n️`;
		caption += `💧 *Melting Point:* ${response.melt} K\n`;
		caption += `🟣 *Density:* ${response.density} g/mL\n`;
		caption += `⚫ *Shells:* ${response.shells.join(", ")}\n`;
		caption += `🌐 *URL:* ${response.source}\n\n`;
		caption += `💬 *Summary:* ${response.summary}\n`;
        await Miku.sendMessage(m.from,  {image: {url: botImage1},caption: caption}, {quoted: m });
    }
}