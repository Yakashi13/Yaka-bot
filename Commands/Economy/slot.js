const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const fs = require("fs");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = { 
    name: "slot",  
    desc: "play slot game", 
    alias: ["slot"],
    category: "Economy",  
    react: "🎰", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
      var today = new Date();
      if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
          if (text == 'help') return m.reply(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 🪙100 in your wallet\n\n*3:* If you don't have money in wallet then withdraw from your bank\n\n*4:* If you don't have money in your bank too then use economy features to gain money`)
          if (text == 'money') return m.reply(`*1:* Small Win --> +🪙20\n\n*2:* Small Lose --> -🪙20\n\n*3:* Big Win --> +🪙100\n\n*4:* Big Lose --> -🪙50\n\n*5:* 🎉 JackPot --> +🪙1000`)
          const fruit1= ["🥥", "🍎", "🍇"]
          const fruit2 = ["🍎", "🍇", "🥥"]  
          const fruit3 = ["🍇", "🥥", "🍎"]         
          const fruit4 = ["🍇", "🥥", "🍎"]
          const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
          const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
          const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']             
          const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']          
          const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 🪙1000*']
          const user = m.sender
          const cara = "cara"
          const k = 100
          const balance1  = await eco.balance(user, cara)
          
          if (k > balance1.wallet) return m.reply(`You are going to be spinning on your wallet, you need at least 🪙100`);
          const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
          const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
          const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
          const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
          const mess1 = lose[Math.floor(Math.random() * lose.length)];
          const mess2 = won[Math.floor(Math.random() * won.length)];
          const mess3 = near[Math.floor(Math.random() * near.length)];
          const mess4 = jack[Math.floor(Math.random() * jack.length)];
          const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
          
          if ((f1 !== f2) && f2 !== f3){
             const deduct1 = await eco.deduct(user, cara, 50);
                    m.reply(`${mess1}\n\n*Big Lose -->* _🪙50_`)
          }
          else if ((f1 == f2) && f2 == f3){
             const give1 = await eco.give(user, cara, 100); 
                   m.reply(`${mess2}\n*_Big Win -->* _🪙100_`)
          }
          else if ((f1 == f2) && f2 !== f3){
             const give2 = await eco.give(user, cara, 20);
                   m.reply(`${mess3}\n*Small Win -->* _🪙20_`)
          }
          else if ((f1 !== f2) && f1 == f3){
             const deduct2 = await eco.deduct(user, cara, 20);
                   m.reply(`${mess5}\n\n*Small Lose -->* _🪙20_`)
          }
          else if ((f1 !== f2) && f2 == f3){
             const give4 = eco.give(user, cara, 20); 
                   m.reply(`${mess3}\n\n*Small Win -->* _🪙20_`)
          }
          else if (((f1 == f2) && f2 == f3) && f3 == f4){
             const give5 = eco.give(user, cara, 1000);
                  m.reply(`${mess4}\n\n_🎊 JackPot --> _🪙1000_`)
          }
          else { 
                  m.reply(`Do you understand what you are doing?`)
          }
       }
       else{
                m.reply(`*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*`)
         }
    }
}
