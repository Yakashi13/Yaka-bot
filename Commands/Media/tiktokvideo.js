module.exports = {
    name: "tiktokvideo",
    alias: ["tiktokmp4"],
    desc: "To download a tiktok video",
    category: "Media",
    usage: `tiktokmp4 <link>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args, mime }) => {
      if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a Tiktok Video link !` },
          { quoted: m }
        );

        if(!args[0].includes("tiktok")){
          return m.reply("Please provide a valid Tiktok link!")
        }

        require('../../lib/tiktokScrapper').Tiktok(args[0]).then( data => {
        Miku.sendMessage(m.from, { video: { url: data.watermark },caption:`Downloaded by: *${botName}*`},{ quoted: m })
        })
        },
    }