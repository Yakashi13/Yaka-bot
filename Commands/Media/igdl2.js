const {instagramdl, instagramdlv4, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
const { getBuffer } = require("../../lib/myfunc");

module.exports = {
    name: "igdl2",
    alias:["instagram2","instadl2","instagramdl2","igvid2"],
    desc: "To download an instagram video",
    category: "Media",
    usage: `igdl2 <video link>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args }) => {
  
      if (!args[0])
          return Miku.sendMessage(
            m.from,
            { text: `Please provide a Instagram Video link !` },
            { quoted: m }
          );
      if(!args[0].includes("instagram.com"))
          return Miku.sendMessage(
              m.from,
              { text: `Please provide a valid Instagram Video link !` },
              { quoted: m }
            );
            const results =await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0]))
            .catch(async _ => await instagramdlv3(args[0]))
            .catch(async _ => await instagramdlv4(args[0]))           
       
            for (const { url } of results){
              await Miku.sendMessage(m.from, {video: {url: url}, caption: `Downloaded by: *${botName}*` }, { quoted: m });
            }
          }}