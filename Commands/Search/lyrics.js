const { lyrics, lyricsv2 } = require("@bochilteam/scraper");

module.exports = {
  name: "lyrics",
  alias: ["songlysics"],
  desc: "To get any song lyrics",
  category: "Search",
  usage: `lyrics <song name>`,
  react: "🧑‍🎤",
  start: async (Yaka, m, { text, prefix, args }) => {
    if (!args[0])
      return Yaka.sendMessage(
        m.from,
        { text: `Please provide a Search Term !` },
        { quoted: m }
      );
    var LyricssearchTerm = args.join(" ");

    const resultlyrics = await lyrics(LyricssearchTerm).catch(
      async (_) => await lyricsv2(LyricssearchTerm)
    );

    let resText = `  *『  ⚡️ Lyrics Search Engine ⚡️  』*\n\n\n_Search Term:_ *${LyricssearchTerm}*\n\n\n*📍 Lyrics:* \n\n${resultlyrics.lyrics}\n\n`;

    await Yaka.sendMessage(
      m.from,
      {
        image: {
          url: botImage3,
        },
        caption: resText,
      },
      { quoted: m }
    );
  },
};
