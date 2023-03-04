const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const fs = require("fs");
require("../../Database/dataschema.js");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);


module.exports = { 

    name: "wallet",  
    desc: "Shows Wallet.",
    alias: ["wallet"], 
    category: "Economy",  
    react: "💲", 
    start: async ( 
        Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
        let user = m.sender 
         const cara = "cara"
         const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
         let buttons = [
            {
              buttonId: `${prefix}deposit ${balance.wallet}`,
              buttonText: { displayText: `Deposit All 💴` },
              type: 1,
            },
            {
                buttonId: `${prefix}Bank`,
              buttonText: { displayText: "Bank 🏦" },
              type: 1,

            },
          ];
          let buttonMessage = {
            image: fs.readFileSync("./Assets/Img/card.png"), 
            caption: `\n💳 *${m.pushName}'s Wallet:*\n\n_💴 ${balance.wallet}_`,
            footer: `*${botName}*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }