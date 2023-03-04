const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mkchar } = require("../../Database/dataschema.js");



module.exports = { 

    name: "setcharacter", 
    alias: ["setchar","setbotcharater","changechar","changecharacter","botchar","botcharacter"], 
    desc: "Ban a member", 
    category: "core", 
    usage: "setchar 0/1/2/3/4/5/6/7", 
    react: "✔️", 
    start: async ( 
      Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator,modStatus} 
    ) => { 

      if (modStatus=="false"&&!isCreator)  return m.reply('Sorry, only my *Owners* and "Mods" can use this command !');
      if (!text) return m.reply(`Please provide a character number to set (0/1/2/3/4/5/6/7).\n\nExample: ${prefix}setchar 0`);

      let charNum = text;

      await mkchar.create({id:'1', seletedCharacter: "0"});

/* ---Added Anime Characters list---  /

 0 --- Yaka
 1 --- Power
 2 --- Makima
 3 --- Denji
 4 --- Zero Two
 5 --- Chika
 6 --- Miku
 7 --- Marin Kitagawa
 8 --- Ayanokoji
 9 --- Ruka
10 --- Mizuhara
11 --- Rem
12 --- Sumi
13 --- Kaguya
14 --- Yumeko
15 --- Kurumi
16 --- Mai
17 --- Yor
18 --- Shinbou
19 --- Eiko
20 --- Benimaru
21 --- Hinata
22 --- Obito
23 --- Mikasa
24 --- Emilia
*/

      let botNames = ['𝐘𝐚𝐤𝐚', '𝐏𝐨𝐰𝐞𝐫', '𝐌𝐚𝐤𝐢𝐦𝐚', '𝐃𝐞𝐧𝐣𝐢', '𝐙𝐞𝐫𝐨 𝐓𝐰𝐨', '𝐂𝐡𝐢𝐤𝐚', '𝐌𝐢𝐤𝐮', '𝐌𝐚𝐫𝐢𝐧 𝐊𝐢𝐭𝐚𝐠𝐚𝐰𝐚', '𝐀𝐲𝐚𝐧𝐨𝐤𝐨𝐣𝐢', '𝐑𝐮𝐤𝐚', '𝐌𝐢𝐳𝐮𝐡𝐚𝐫𝐚', '𝐑𝐞𝐦', '𝐒𝐮𝐦𝐢', '𝐊𝐚𝐠𝐮𝐲𝐚', '𝐘𝐮𝐦𝐞𝐤𝐨', '𝐊𝐮𝐫𝐮𝐦𝐢', '𝐌𝐚𝐢', '𝐘𝐨𝐫', '𝐒𝐡𝐢𝐧𝐛𝐨𝐮', '𝐄𝐢𝐤𝐨', '𝐁𝐞𝐧𝐢𝐦𝐚𝐫𝐮', '𝐇𝐢𝐧𝐚𝐭𝐚', '𝐎𝐛𝐢𝐭𝐨', '𝐌𝐢𝐤𝐚𝐬𝐚', '𝐄𝐦𝐢𝐥𝐢𝐚']
      let botLogos =[
        'https://cdn.dribbble.com/users/2400955/screenshots/10843457/media/4853cc6ddfdd1f5400ea40a608f10fef.jpg',
        'https://wallpapercave.com/wp/wp11253614.jpg',
        'https://images5.alphacoders.com/126/1264439.jpg',
        'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/11/Chainsaw-Man-Denji-e-Power.webp?resize=1068%2C601&ssl=1',
        'https://images3.alphacoders.com/949/949253.jpg',
        'https://images4.alphacoders.com/100/1002134.png',
        'https://wallpapercave.com/wp/wp10524580.jpg',
        'https://images2.alphacoders.com/125/1257915.jpg',
        'https://wallpapers.com/images/file/kiyotaka-ayanokoji-in-pink-qs33qgqm79ccsq7n.jpg',
        'https://wallpapercave.com/wp/wp8228630.jpg',
        'https://images3.alphacoders.com/128/1288059.png',
        'https://images.alphacoders.com/711/711900.png',
        'https://moewalls.com/wp-content/uploads/2022/07/sumi-sakurasawa-hmph-rent-a-girlfriend-thumb.jpg',
        'https://wallpapercave.com/wp/wp6099650.png',
        'https://wallpapercave.com/wp/wp5017991.jpg',
        'https://wallpapercave.com/wp/wp2535489.jpg',
        'https://wallpapercave.com/wp/wp10128659.png',
        'https://images7.alphacoders.com/123/1236729.jpg',
        'https://wallpapercave.com/wp/wp4650481.jpg',
        'https://images8.alphacoders.com/122/1229829.jpg',
        'https://wallpapercave.com/wp/wp9179142.jpg',
        'https://wallpapercave.com/uwp/uwp985562.jpeg',
        'https://images3.alphacoders.com/105/1052843.jpg',
        'https://wallpapercave.com/wp/wp8142276.png',
        'https://wallpapercave.com/wp/wp8142276.png'
          
      ]

      await mkchar.findOne({id:'1'}).then(async (charInfo) => {

        
        if (charInfo.seletedCharacter == charNum) {
           
                await mkchar.findOne({id:'1'}).then(async(res) => {
                    console.log(res.seletedCharacter)
                    //console.log(animeCharacter)
                })
            
          return m.reply(`Character number ${charNum} - ${botName} is already set as the default character.`);
        }
        else if (charNum == '0') {
            await mkchar.findOneAndUpdate({ id: '1'}, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '1') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '2') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '3') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '4') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '5') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '6') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '7') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '8') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}

        else if (charNum == '9') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}

        else if (charNum == '10') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '11') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '12') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '13') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '14') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '15') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '16') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '17') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '18') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '19') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
           else if (charNum == '20') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
           else if (charNum == '21') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
           else if (charNum == '22') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
           else if (charNum == '23') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
           else if (charNum == '24') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        /*else {
            return m.reply(`Character number ${charNum} is not added.\n\ntype *${prefix}charlist* to see the list of added characters.`);
        }*/
    })    

    }
}       
