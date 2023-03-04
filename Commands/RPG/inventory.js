const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);
const fs = require("fs");


module.exports = {
    name: "inventory",
    desc: "View your mine inventory.",
    alias: ["inv", "items"],
    category: "RPG",
    usage: "inventory",
    react: "💹",
    start: async (Miku, m) => {
        let user = await player.findOne({id:m.sender});
        if(!user) {
            return Miku.sendMessage(m.from, { text: "You don't have any items in your inventory yet. Use `mine` command to get some." }, { quoted: m });
        }
        let inventory = user.inventory;
        Miku.sendMessage(m.from, { text: `[🐺 INVENTORY 🐺]\n\n*🍎 Golden Apple*: ${inventory.goldenApple}\n*🔥 Wood*: ${inventory.wood}\n*🔮 Stone*: ${inventory.stone}\n*⚒ Iron*: ${inventory.iron}\n*💎 Diamonds*: ${inventory.diamonds}\n\n*🔨Tools🔨*\n\n*Wooden axe*: ${inventory.woodenaxe}\n*Iron axe*: ${inventory.ironpickaxe}\n*Stone axe*: ${inventory.stonepickaxe}\n*Diamond axe*: ${inventory.diamondpickaxe}` }, { quoted: m });
    }
}



