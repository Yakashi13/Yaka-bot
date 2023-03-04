const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku } = require("../../Database/dataschema.js");


module.exports = { 

    name: "banlist", 
    alias: ["listbanned"], 
    desc: "List all banned members", 
    category: "core", 
    usage: "banlist", 
    start: async ( 
      Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator,modStatus} 
    ) => { 
      
      try { 
        
        var banlist = await mku.find({ban: true});
        var banlistString = "";
        banlist.forEach((ban, index) => {
            banlistString += ban.id ? `\n ${index+1}\n╭─────────────◆\n│ *Name:* ${ban.name}\n│ *Tag:* @${ban.id.split("@")[0]}\n│ *Reason:* ${ban.reason}\n╰─────────────◆\n\n` : '';
          });
        var mention = banlist.map(ban => ban.id)
        if(banlistString == "") banlistString = "No banned members found.";
        return Miku.sendMessage( 
          m.from, 
          { text: `Current banned members: ${banlistString}`, mentions: mention }, 
          { quoted: m } 
        );
      } catch (err) { 
        console.log(err);
        return Miku.sendMessage(m.from, { text: `An internal error occurred while fetching the banned list.` }, { quoted: m });
      } 
    }, 
}