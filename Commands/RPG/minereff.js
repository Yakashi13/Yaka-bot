const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);
const fs = require("fs");


module.exports = {
    name: "hunt2",
    desc: "Hunt, mine, dig or chop for resources.",
    alias: ["hunt3"],
    category: "RPG",
    usage: "hunt/mine/dig/chop [axe]",
    react: "🔨",
    start: async (Miku, message, { text, prefix, args }) => {
      const user = await player.findOne({ id: message.sender });
      if (!user) {
        return Miku.sendMessage(message.from, { text:` 😕 You don't have an inventory. Use ${prefix}reg-inv to register.` }, { quoted: message });
      }
    
      const axeUsed = args[0]
      if (!axeUsed) {
        return Miku.sendMessage(message.from, { text: `😕 You need to specify which axe to use (woodenAxe, woodPickaxe, stonePickaxe, ironPickaxe, diamondPickaxe).` }, { quoted: message });
      }
    
      if (!user.inventory[axeUsed]) {
        return Miku.sendMessage(message.from, { text:` 😕 You don't have a ${axeUsed}. Use ${prefix}buy to purchase one.` }, { quoted: message });
      }
      let loot;
      switch (axeUsed) {
        case "woodenaxe":
          user.inventory.woodenaxe -= 1;
           loot = {
            wood: Math.floor(Math.random() * 4) + 8,
            stone: Math.floor(Math.random() * 2) + 2,
            iron: Math.floor(Math.random() * 1) + 1,
            diamonds: Math.floor(Math.random() * 1)
          };
          user.inventory.wood += loot.wood;
          user.inventory.stone += loot.stone;
          user.inventory.iron += loot.iron;
          user.inventory.diamonds += loot.diamonds;
          await user.save();
          Miku.sendMessage(message.from, { text: `[ 🐺MINE RESULT🐺 ]\n\n used: ${axeUsed}\n\n *🔮Stone*: ${loot.stone}\n*🔥Wood*: ${loot.wood}\n*🔩Iron*: ${loot.iron}\n*💎Diamonds*: ${loot.diamonds}`}, { quoted: message });
          break;
            case "stonepickaxe":
            user.inventory.stonepickaxe -= 1;
             loot = {
            wood: Math.floor(Math.random() * 2) + 2,
            stone: Math.floor(Math.random() * 2) + 4,
            iron: Math.floor(Math.random() * 1) + 2,
            diamonds: Math.floor(Math.random() * 1) + 1
            };
            user.inventory.wood += loot.wood;
            user.inventory.stone += loot.stone;
            user.inventory.iron += loot.iron;
            user.inventory.diamonds += loot.diamonds;
            await user.save();
            Miku.sendMessage(message.from, { text: `[ 🐺MINE RESULT🐺 ]\n\n used: ${axeUsed}\n\n *🔮Stone*: ${loot.stone}\n*🔥Wood*: ${loot.wood}\n*🔩Iron*: ${loot.iron}\n*💎Diamonds*: ${loot.diamonds}`}, { quoted: message });
            break;
            case "ironpickaxe":
                user.inventory.ironpickaxe -= 1;
                 loot = {
                wood: Math.floor(Math.random() * 1) + 1,
                stone: Math.floor(Math.random() * 2) + 4,
                iron: Math.floor(Math.random() * 1) + 4,
                diamonds: Math.floor(Math.random() * 1) + 2
                };
                user.inventory.wood += loot.wood;
                user.inventory.stone += loot.stone;
                user.inventory.iron += loot.iron;
                user.inventory.diamonds += loot.diamonds;
                await user.save();
                Miku.sendMessage(message.from, { text: `[ 🐺MINE RESULT🐺 ]\n\n used: ${axeUsed}\n\n *🔮Stone*: ${loot.stone}\n*🔥Wood*: ${loot.wood}\n*🔩Iron*: ${loot.iron}\n*💎Diamonds*: ${loot.diamonds}`}, { quoted: message });
                break;
                case "diamondpickaxe":
                user.inventory.diamondpickaxe -= 1;
                loot = {
                wood: Math.floor(Math.random() * 1),
                stone: Math.floor(Math.random() * 2) + 4,
                iron: Math.floor(Math.random() * 1) + 4,
                diamonds: Math.floor(Math.random() * 1001) + 7000
                };
                if (Math.random() <= 0.05) {
                  loot.goldenApple = 1;
                  user.inventory.goldenApple += 1;
                }
                user.inventory.wood += loot.wood;
                user.inventory.stone += loot.stone;
                user.inventory.iron += loot.iron;
                user.inventory.diamonds += loot.diamonds;
                await user.save();
                let lootMessage = `[ 🐺MINE RESULT🐺 ]\n\n used: ${axeUsed}\n\n *🔮Stone*: ${loot.stone}\n*🔥Wood*: ${loot.wood}\n*🔩Iron*: ${loot.iron}\n*💎Diamonds*: ${loot.diamonds}`;
                if (loot.goldenApple) {
                  lootMessage += `\n\n🍎You found a Golden Apple!🍎`;
                }
                Miku.sendMessage(message.from, { text: lootMessage }, { quoted: message });
                break;
                default:
                Miku.sendMessage(message.from, { text: `😕 Invalid axe specified, valid axes are (woodenAxe, woodPickaxe, stonePickaxe, ironPickaxe, diamondPickaxe). `}, { quoted: message });
                break;
                }
                }
                };
    
