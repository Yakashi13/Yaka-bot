const { ringtone } = require("../../lib/scrapper.js");

module.exports = {
  name: "ringtone",
  alias: ["searchringtone","rt"],
  desc: "To search any ringtone",
  category: "Search",
  usage: `ringtone <search term>`,
  react: "👹",
  start: async (Yaka, m, { text, prefix, args,mime }) => {
    if (!args[0])
      return Yaka.sendMessage(
        m.from,
        { text: `Please provide a Search Term !` },
        { quoted: m }
      );
    var RTsearchTerm = args.join(" ");
        const resultRT = await ringtone(RTsearchTerm);
        let result = resultRT[Math.floor(Math.random() * resultRT.length)];
-
        Yaka.sendMessage(m.from, { audio: { url: result.audio }, fileName: RTsearchTerm+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
  },
};
