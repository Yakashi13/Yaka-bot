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

    name: "daily",  
    desc: "daily gold.", 
    alias: ["daily"],
    category: "Economy",  
    react: "💷", 
    start: async ( 
        Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
         if (!m.isGroup) return Miku.sendMessage(m.from, { text: '*Group command ' }, { quoted: m });
         let user = m.sender 
         const cara = "cara"
         const daily  = await eco.daily(user, cara, 500); //give 500 for daily, can be changed
         if(daily.cd) {

            let buttons = [
                {
                  buttonId: `${prefix}wallet`,
                  buttonText: { displayText: "Wallet 💳" },
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
                caption: `\n🧧 You already claimed your daily revenue today, Come back in ${daily.cdL} to claim again 🫡`,
                footer: `*${botName}*`,
                buttons: buttons,
                type: 4
              };
            
              await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
            
            } else {
   
              return Miku.sendMessage( 
                m.from, 
                { text: `You have successfully claimed your daily revenue ${daily.amount} 💴 today 🎉.` }, 
                { quoted: m } 
            )}
      }
   }
