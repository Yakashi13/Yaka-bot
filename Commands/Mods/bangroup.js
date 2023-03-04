const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mk, mku } = require("../../Database/dataschema.js");



module.exports = {
    name: "bangroup",
    alias: ["bangc"],
    desc: "Ban a group",
    category: "core",
    usage: "bangroup",
    react: "🎀",
    start: async (Miku, m, { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator , groupName,modStatus}) => {
    
    if (modStatus == "false" && !isCreator) return Miku.sendMessage(m.from, { text: 'Sorry, only my *Devs* and *Mods* can use this command !' }, { quoted: m });

    let checkdata = await mk.findOne({ id: m.from })
    try {
        if (!checkdata) {
            await new mk({ id: m.from, bangroup: "true" }).save()
            return m.reply(`*${groupName}* is now *Banned* from using *${global.botName}*`)
        } else {
            if (checkdata.bangroup == "true") return m.reply(`*${groupName}* is *Already Banned* from using *${global.botName}*`)
            await mk.updateOne({ id: m.from }, { bangroup: "true" })
            return m.reply(`*This Group Is Banned From Using Bot.*`)
        }
    } catch (err) {
        console.log(err);
        return Miku.sendMessage(m.from, { text: `An internal error occurred while banning the user.` }, { quoted: m });
    }
}
}