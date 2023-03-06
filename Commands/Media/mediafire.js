const { mediafireDl } = require('../../lib/mediaFireScrapper');

module.exports = {
    name: "mediafire",
    alias: ["mediafiredl"],
    desc: "To download a mediafire document",
    category: "Media",
    usage: `mediafire <link>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args, mime }) => {
      if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a Mediafire link !` },
          { quoted: m }
        );

        if(!args[0].includes("mediafire.com")){
          return m.reply("Please provide a valid Mediafire link!")
        }

        const MDF = await mediafireDl(text)
        if (MDF[0].size.split('MB')[0] >= 100) return m.reply('File is too large in size!');
        
        let txt =`        *『 Mediafire Downloader 』*
        
*🎀 File Name* : ${MDF[0].nama}
*🧩 File Size* : ${MDF[0].size}
*📌File Format* : ${MDF[0].mime}

Downloading...`

        m.reply(txt);
        Miku.sendMessage(m.from, { document: { url: MDF[0].url },mimetype: MDF[0].mime,fileName: MDF[0].nama,},{ quoted: m })
        },
    }
