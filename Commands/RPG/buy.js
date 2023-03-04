const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);
const fs = require("fs");

module.exports = {
    name: "buy",
    desc: "Buy mining equipment.",
    alias: ["buy", "purchase"],
    category: "RPG",
    usage: "buy <item>",
    react: "💰",
    start: async (Miku, m, { text, prefix }) => {
        let user = await player.findOne({id:m.sender});
        if(!user) {
            return Miku.sendMessage(m.from, { text:` 😕 You don't have an inventory. Use ${prefix}reg-inv to register.` }, { quoted: m });
        }
    const cara = "cara"
    const balance = await eco.balance(m.sender, cara);
    let item = text
        if(!item) {
            return Miku.sendMessage(m.from, { text:` 😕 Please specify an item to purchase. Use ${prefix}buy <item>` }, { quoted: m });
        }
        if(item === "woodenaxe") {
            if(balance.wallet < 250) {
                return Miku.sendMessage(m.from, { text:` 😕 You don't have enough coins to purchase a wooden axe.` }, { quoted: m });
            }
            let deduct = await eco.deduct(m.sender, cara, 250);
            user.inventory.woodenaxe += 1;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a wooden axe!`}, { quoted: m });
        }
        else if(item === "stonepickaxe") {
            if(balance.wallet < 500) {
                return Miku.sendMessage(m.from, { text:` 😕 You don't have enough coins to purchase a stone pickaxe.` }, { quoted: m });
            }
            let deduct = await eco.deduct(m.sender, cara, 500);
            user.inventory.stonepickaxe += 1;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a stone pickaxe!`}, { quoted: m });
}
else if(item === "gold") {
    if(user.inventory.goldenApple < 1) {
        return Miku.sendMessage(m.from, { text:` 😕 You don't have a Golden Apple to purchase 100k Gold.` }, { quoted: m });
    }
    const give = await eco.give(m.sender, cara, 100000);
    user.inventory.goldenApple -= 1;
    await user.save();
    Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased 100k Gold!`}, { quoted: m });
}
else if(item === "ironpickaxe") {
if(balance.wallet < 2000) {
return Miku.sendMessage(m.from, { text: `😕 You don't have enough coins to purchase an iron pickaxe. `}, { quoted: m });
}
let deduct = await eco.deduct(m.sender, cara, 2000);
user.inventory.ironpickaxe += 1;
await user.save();
Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased an iron pickaxe!`}, { quoted: m });
}
else if(item === "diamondpickaxe") {
if(balance.wallet < 5000) {
return Miku.sendMessage(m.from, { text: `😕 You don't have enough coins to purchase a diamond pickaxe.` }, { quoted: m });
}
let deduct = await eco.deduct(m.sender, cara, 5000);
user.inventory.diamondpickaxe += 1;
await user.save();
Miku.sendMessage(m.from, { text: `[ *💰PURCHASE RESULT💰* ]\n\n Successfully purchased a diamond pickaxe!`}, { quoted: m });
}
else {
return Miku.sendMessage(m.from, { text: `😕 Invalid item. Please use ${prefix}buy /item to purchase an item.` }, { quoted: m });
}
}
};

              
              
             
              
              
              
              