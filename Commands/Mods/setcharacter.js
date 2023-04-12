const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mkchar } = require("../../Database/dataschema.js");



module.exports = {

    name: "setcharacter",
    alias: ["setchar", "setbotcharater", "changechar", "changecharacter", "botchar", "botcharacter"],
    desc: "Ban a member",
    category: "core",
    usage: "setchar 0/1/2/3/4/5/6/7",
    react: "✔️",
    start: async (
        Yaka,
        m,
        { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator, modStatus }
    ) => {

        if (modStatus == "false" && !isCreator) return m.reply('Sorry, only my *Owners* and "Mods" can use this command !');
        if (!text) return m.reply(`Please provide a character number to set (0/1/2/3/4/5/6/7).\n\nExample: ${prefix}setchar 0`);

        let charNum = text;

        await mkchar.create({ id: '1', seletedCharacter: "0" });

/* ---Added Anime Characters list---  /
        
  0 --- Yaka Bot
  1 --- Benimaru
  2 --- Power
  3 --- Hinata
  4 --- Obito
  5 --- Mikasa
  6 --- Emilia
  7 --- Ayane 
  8 --- Yotsuba
  9 --- Mai
 10 --- Tohru
 11 --- Marin
 12 --- Rem
 13 --- Makima
 14 --- Nezuko
 15 --- Ochaco
 16 --- Aqua
 17 --- Fubuki
 18 --- Gojo
 19 --- Hayase
 20 --- Itachi
 21 --- Shoko
 22 --- Kurumi
 23 --- Mitsuri
 24 --- coming soon..
*/

        let botNames = [
            '𝐘𝐚𝐤𝐚', '𝐁𝐞𝐧𝐢𝐦𝐚𝐫𝐮',
            '𝐏𝐨𝐰𝐞𝐫', '𝐇𝐢𝐧𝐚𝐭𝐚',
            '𝐎𝐛𝐢𝐭𝐨', '𝐌𝐢𝐤𝐚𝐬𝐚',
            '𝐄𝐦𝐢𝐥𝐢𝐚', '𝐀𝐲𝐚𝐧𝐞',
            '𝐘𝐨𝐭𝐬𝐮𝐛𝐚', '𝐌𝐚𝐢',
            '𝐓𝐨𝐡𝐫𝐮', '𝐌𝐚𝐫𝐢𝐧',
            '𝐑𝐞𝐦', '𝐌𝐚𝐤𝐢𝐦𝐚',
            '𝐍𝐞𝐳𝐮𝐤𝐨', '𝐎𝐜𝐡𝐚𝐜𝐨',
            '𝐀𝐪𝐮𝐚', '𝐅𝐮𝐛𝐮𝐤𝐢',
            '𝐆𝐨𝐣𝐨', '𝐇𝐚𝐲𝐚𝐬𝐞',
            '𝐈𝐭𝐚𝐜𝐡𝐢', '𝐒𝐡𝐨𝐤𝐨',
            '𝐊𝐮𝐫𝐮𝐦𝐢', '𝐌𝐢𝐭𝐬𝐮𝐫𝐢'
        ]
        let botLogos = [
            'https://cdn.dribbble.com/users/2400955/screenshots/10843457/media/4853cc6ddfdd1f5400ea40a608f10fef.jpg', 
      'https://wallpapercave.com/wp/wp5950608.png', 
      'https://wallpapercave.com/wp/wp11998979.jpg',
      'https://wallpapercave.com/wp/wp8526286.jpg',
      'https://wallpapercave.com/wp/wp2714940.jpg', 
      'https://wallpapercave.com/uwp/uwp2564410.jpeg', 
      'https://wallpapercave.com/uwp/uwp1074204.jpeg', 
      'https://i.pinimg.com/564x/a9/98/c8/a998c8653cd690080c2c2232355fadd2.jpg', 
      'https://wallpapercave.com/wp/wp9494921.png', 
      'https://wallpapercave.com/wp/wp8435260.png', 
      'https://wallpapercave.com/wp/wp7579400.jpg',  
      'https://wallpapercave.com/wp/wp10917529.jpg', 
      'https://wallpapercave.com/wp/wp1860711.png', 
      'https://images6.alphacoders.com/112/1126221.jpg', 
      'https://wallpapercave.com/wp/wp9269166.jpg', 
      'https://images6.alphacoders.com/919/919193.jpg', 
      'https://images8.alphacoders.com/790/790834.png', 
      'https://wallpapercave.com/wp/wp8354244.jpg', 
      'https://images5.alphacoders.com/124/1245177.jpg', 
      'https://wallpapercave.com/wp/wp8869413.png', 
      'https://wallpapercave.com/wp/wp8241464.jpg', 
      'https://images2.alphacoders.com/117/1172959.png', 
      'https://wallpapercave.com/wp/wp5894889.jpg', 
      'https://wallpapercave.com/wp/wp10959288.jpg' 
        ]

        await mkchar.findOne({ id: '1' }).then(async (charInfo) => {


            if (charInfo.seletedCharacter == charNum) {

                await mkchar.findOne({ id: '1' }).then(async (res) => {
                    console.log(res.seletedCharacter)
                    //console.log(animeCharacter)
                })

                return m.reply(`Character number ${charNum} - ${botName} is already set as the default character.`);
            }
            else if (charNum == '0') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '1') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '2') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '3') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '4') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '5') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '6') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '7') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '8') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }

            else if (charNum == '9') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }

            else if (charNum == '10') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '11') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '12') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '13') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '14') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '15') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '16') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '17') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '18') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '19') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '20') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '21') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '22') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else if (charNum == '23') {
                await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async (res) => {
                    await Yaka.sendMessage(m.from, { image: { url: botLogos[charNum] }, caption: `Character number ${charNum} - ${botNames[charNum]} is now Activated!.\n` }, { quoted: m })
                }).catch(error => {
                    return m.reply(`An error occurred while updating the character number.`)
                })
            }
            else {
                return m.reply(`Character number ${charNum} is not added.\n\ntype *${prefix}charlist* to see the list of added characters.`);
            }
        })

    }
}       
