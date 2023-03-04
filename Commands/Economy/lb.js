const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const fs = require("fs");
const { economy } = require("discord-mongoose-economy/models/economy.js");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);
 
 module.exports = { 
    name: "leaderboard", 
    desc: "To view the leaderboard of current users", 
    alias: ["lb"],
    category: "Economy", 
    usage: "leaderboard", 
    react: "📈", 
    start: async (Miku, m,{ text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} ) => { 
        try { 
            let h = await eco.lb('cara', 10);
            if(h.length === 0) {
                return Miku.sendMessage(m.from, { text: 'No users found on leaderboard.' }, { quoted: m });
            }
            let str = `*Top ${h.length} users with more money in wallet.*\n`;
            let arr = [];
            for(let i = 0; i < h.length; i++){
                let username = await mku.findOne({ id: h[i].userID, name: m.pushName });
                var tname;
                if (username && username.name) {
                    tname = username.name;
                } else {
                    tname = Miku.getName(h[i].userID);
                }
                str += `*${i+1}*\n╭─────────────◆\n│ *🎀 Name:-* _${tname}_\n│ *⚜️ User:-* _@${h[i].userID.split('@')[0]}_\n│ *💳 Wallet:-* _${h[i].wallet}_\n│ *📄 Bank Amount:-* _${h[i].bank}_\n│ *📊 Bank Capacity:-* _${h[i].bankCapacity}_\n╰─────────────◆\n\n`;  	 
                arr.push(h[i].userID);
            }
            Miku.sendMessage(m.from, { text: str, mentions: arr }, { quoted: m });
        } catch (err) {
            console.log(err);
            return Miku.sendMessage(m.from, { text: `An internal error occurred while fetching the leaderboard.` }, { quoted: m });
        }
    }
}