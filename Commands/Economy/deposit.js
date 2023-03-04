const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const fs = require("fs");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = { 

    name: "deposit",  
    desc: "deposit gold.", 
    alias: ["deposit"],
    category: "Economy",  
    react: "💵", 
    start: async ( 
        Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
        if(!text)  {
            return Miku.sendMessage( 
                m.from, 
                { text: `Baka!! Provide the 💰amount you want to deposit!` }, 
                { quoted: m } 
            );
        }
        let d = parseInt(text)
        const pushname = m.pushName //|| 'NO name'
        const texts = text.trim();
		const user = m.sender;
		const cara = 'cara'
    const deposit = await eco.deposit(m.sender, "cara", texts);
    const balance = await eco.balance(m.sender, "cara")
        if(deposit.noten) return m.reply('You can\'t deposit what you don\'t have.');
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
            caption: `\n⛩️ Sender: ${m.pushName}\n\n🍀Successfully Deposited 💴 ${deposit.amount} to your bank.\n`,
            footer: `*${botName}*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }
