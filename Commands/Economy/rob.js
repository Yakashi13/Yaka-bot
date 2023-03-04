const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const fs = require("fs");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = { 
    name: "rob",  
    desc: "rob bank amount", 
    alias: ["rob"],
    category: "Economy",  
    react: "💶", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
        if (!text && !m.quoted) {
        return Miku.sendMessage( 
          m.from, 
          { text: `Please tag a user to *Ban*!` }, 
          { quoted: m } 
        )}
       
        if(m.quoted){
          var mentionedUser = m.quoted.sender;
        }
        else{
          var mentionedUser = mentionByTag[0];
        }
        const cara = "cara";
        const user1 = m.sender;
        const user2 = mentionedUser;
        const k = 100;
        const amount = Math.floor(Math.random() * 200) + 1;
        const balance1 = await eco.balance(user1, cara);
        const balance2 = await eco.balance(user2, cara);
        const typ = ['ran','rob','caught'];
        const random = typ[Math.floor(Math.random() * typ.length)];
        if (k > balance1.wallet) return Miku.sendMessage(m.from, { text: '*☹️ You don\'t have enough money to pay fine incase you get caught*' }, { quoted: m }); 
        if (k > balance2.wallet) return Miku.sendMessage(m.from, { text: '*Sorry, your victim is too poor 🤷🏽‍♂️ let go.*' }, { quoted: m }); 

        switch (random) {
            case 'ran':
                return Miku.sendMessage(m.from, { text: `*Lets leave this poor soul alone.*\n\nHe's toooo poor.` }, { quoted: m });
            case 'rob':
                await eco.deduct(user2, cara, amount);
                await eco.give(user1, cara, amount); 
                return Miku.sendMessage(m.from, { text: `*🤑 You have stolen ${amount} successfully .🗡️*` }, { quoted: m });
            case 'caught':
                await eco.deduct(user1, cara, balance1.wallet); 
                return Miku.sendMessage(m.from, { text: `*Sorry FBI👮 caught up with you, you lost all 🪙 in wallet.*` }, { quoted: m });
                default:
                return Miku.sendMessage(m.from, { text: 'What are you trying to do?' }, { quoted: m });
                }
                }
                }
