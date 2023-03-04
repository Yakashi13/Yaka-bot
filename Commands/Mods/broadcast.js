const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mk, mku } = require("../../Database/dataschema.js");



module.exports = {
    name: "broadcast",
    alias: ["bc","bcmessage"],
    desc: "Broadcast a message in all groups where that bot is present",
    category: "Mods",
    usage: "bc <message>",
    react: "🎀",
    start: async (Miku, m, { text, prefix, isBotAdmin, participants, pushName, isCreator , args,modStatus}) => {
    
    if (modStatus == "false" && !isCreator) return Miku.sendMessage(m.from, { text: 'Sorry, only my *Devs* and *Mods* can use this command !' }, { quoted: m });

    if(!text && !m.quoted) return Miku.sendMessage(m.from, { text: `Please provide a message to broadcast !\n\nExample: ${prefix}bc Hello everyone!` }, { quoted: m });

    const broadcastText = m.quoted ? m.quoted.msg : args ? args.join(" ") : "" ;

    let FetchGC = await Miku.groupFetchAllParticipating()
    let group = Object.entries(FetchGC).slice(0).map(entry => entry[1])
    let anu = group.map(v => v.id)
    m.reply(`*Broadcasting message to ${anu.length} groups...*`)

    for (let i of anu) {
        let txt = `*「  🧣 ${botName} Broadcast 🧣  」*\n\n*🧩 Message:* ${broadcastText}\n\n\n*🔰 Regards ~ ${pushName}*`
        setTimeout(function(){
            Miku.sendMessage(i, {video:botVideo, caption: txt, mentions:participants.map(a => a.id)});
        }, 1500);
    }

    m.reply(`*Broadcasting message to ${anu.length} groups completed !*`)
}
}