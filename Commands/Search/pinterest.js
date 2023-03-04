const hxzapi = require("hxz-api");

module.exports = {
  name: "pinterest",
  alias: ["pin"],
  desc: "To get Pinterest image search result",
  category: "Search",
  usage: `pin <search term>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a Search Term !` },
        { quoted: m }
      );
    var PinsearchTerm = args.join(" ");
    hxzapi
      .pinterest(PinsearchTerm)
      .then(async (res) => {
        imgnyee = res[Math.floor(Math.random() * res.length)];
        let buttons = [
          {
            buttonId: `${prefix}pinterest ${args.join(" ")}`,
            buttonText: { displayText: ">>" },
            type: 1,
          },
        ];

        let txt = `     *『  Pinterest Search Engine  』*\n\n_🎀 Search Term:_ *${PinsearchTerm}*\n`;
        let buttonMessage = {
          image: { url: imgnyee },
          caption: txt ,
          footer: `*${botName}*`,
          buttons: buttons,
          headerType: 4,
        };
        Miku.sendMessage(m.from, buttonMessage, { quoted: m });
      })
      .catch((_) => _);
  },
};
