const fs = require("fs");
const remobg = require('remove.bg')
const {getRandom} = require("../../lib/myfunc");
require('../../index.js');

module.exports = {
  name: "removebg",
  alias: ["backgroungerase"],
  desc: "To remove backgroung of an image",
  category: "Image Manipulation",
  usage: "removebg <reply to image>",
  react: "🍁",
  start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {
    if (!m.quoted&&!/image/.test(mime)) return m.reply (`Send/Reply Image With Caption *${prefix}removebg* to remove background of an image`);
	if (/webp/.test(mime)) return m.reply (`Send/Reply Image With Caption *${prefix}removebg* to remove background of an image`);

        let rbgKEYS = ['cHLxHkyovvnFKA46bWDoy5ab0','tgrhopqLJG5cz17zr9GFVRSP','dCtKvWzkwn4eAYkxF3jUg95h','FxhCoWrhbjE5rGdQcQXrR6L1','xw2tzRUfTwNpPCqApBk3PMgP','bCnoXofBNXHhwSeWibivduAX','mjU2LCkHRuLgd3k9NK93LsL1','P3SisAFSGsziMmYv3tpkDLQu','V5mjnCXBaT58rHiuZ3pCTop7','UTs581jS1xMJ87biGKtpK6UL','pcmigrMzg2H3nzd85eQ68U8Q','pTF2W31Ntre5Ec97p9fD1Nap','vXJLm54AGNRooqi88NXYUuqJ','8j8rHjhPjaFj9qeJqQJmLJCo','YG1Yx54XvFTeP6jgYoMZ3yra','HFvTxMoL774caaXKXKtDiAbw','wdCwvvbEDeLUvR2XBDCzSWxR','9KgH3vFP23NGQKzUYZhyL16Y','5aCUhqDEKWUgqpSXWCsPDRRM','ciyXBRKUd5mmUEfcraF1WZTN','Bfx67bQNp1Lgash3ataGuDYw','HxdQxBahc9rynzSU8RFdenf8','1RPRXsyt9rWmk3NDeELpc5G2','ogbK8qR76TwPkqWwixd9Wnhi','5CDjT5zPwieCFeHiThsTuEvT','JLzxsmoky8YmqdGM4eBa86wx','SrpQNJ6ssj6toDkcwhA5uxKv','ZCSfHCPEe4RQuBgdy5LbjUxL','PFkSukBFzFStuBKHapALVttj','Rr3sRLQAekVRCAcaGuBTbaxr','BbVBkKMMp59qXLCRoSvtm5Tp','xXuiVxrAS3Qk7Si51UWprQeG','Whr6m2QSkjasePMyMU4orrAU','E4vWPfH3byqwSTkfggPQRqmL','a5n2sDUsvtWEARYcvwaY4EiB','MJmfELQUKrsGxu2R3hUTssKf','TqEXtH2h6nZCFhmCrQ2gcE9J','NedwN3261hZyRAnCVhfzCqJ1','zsCdiRN4wudN7jYAwY1GERvm','8tWCT9HwwvNTCgjRDsSNgsHX','rESyw5wJ1CqpcxR6aMPdB1ha','Je1FxvZB3a6C8JKz13bKhSuS','YEX4hMCDrmS2NaZpnNspWFhf','TC5JudsLRVdgFGqtWFtgrsnX','7gf3ewFyRzLG2z8zL9zhDAeR','gBrCeHBUHctye4fjMoJjFwkR','bEFeCrEUQzAKzaQfMCkMoS1y','sg1Cha6PNzSpaLgYQxiAegNZ','EpRzXpncobaNKATWLppj5v8s','cX3yucYC6KGb9U7ZqetGz91z'];
        let rbgKEY = rbgKEYS[Math.floor(Math.random() * rbgKEYS.length)];
        let filename = await './Assets/removeBgIN-'+ getRandom('');
        let outputFile = await './Assets/removeBgOUT-'+ getRandom('.png');
        let qFile =await Miku.downloadAndSaveMediaMessage(quoted, filename)


        var bgRempic = await remobg.removeBackgroundFromImageFile({
            path: qFile,
            apiKey: rbgKEY,
            size: 'regular',
            type: 'auto',
            scale: '100%',
            outputFile
        })

        await Miku.sendMessage(m.from, {image: fs.readFileSync(outputFile),caption:`_Created by: *${botName}*_`}, {quoted: m}).then (async () => {
            await fs.unlinkSync(filename+'.png');
            await fs.unlinkSync(outputFile);
        }) 
    }
}

