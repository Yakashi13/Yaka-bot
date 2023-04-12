const { Manga } =require("@shineiichijo/marika")
const client = new Manga();

module.exports = {
  name: "manga",
  alias: ["mangasearch"],
  desc: "To get a manga search result",
  category: "Search",
  usage: `manga <search term>`,
  react: "👹",
  start: async (Yaka, m, { text, prefix, args }) => {
    if (!args[0])
      return Yaka.sendMessage(
        m.from,
        { text: `Please provide a manga name to search !` },
        { quoted: m }
      );

    var MangasearchTerm = args.join(" ");
    let manga = await client.searchManga(MangasearchTerm);

    let result = manga.data[0];
    let details = `*『  Manga Search Engine  』*\n\n\n*🍃 Manga Title:* ${result.title}\n`;
    details += `\n*🎋 Type:* ${result.type}\n`;
    details += `*📈 Status:* ${result.status.toUpperCase().replace(/\_/g, " ")}\n`;
    details += `*🍥 Volumes:* ${result.volumes}\n`;
    details += `*🍥 Chapters:* ${result.chapters}\n`;
    details += `*🧧 Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t${result.genres[i].name}\n`;
    }
   details += `*🧧 Themes:*\n`;
    for (let i = 0; i < result.themes.length; i++) {
      details += `\t\t\t${result.themes[i].name}\n`;
    }
    details += `*📍 Authors:*\n`;
    for (let i = 0; i < result.authors.length; i++) {
      details += `\t\t\t${result.authors[i].name}\n`;
    }
    details += `\n*🎐 Score:* ${result.score}\n`;
    details += `*🎏 Favorites:* ${result.favorites}\n`;
    details += `*🎇 Rank:* ${result.rank}\n`;
    details += `*🏅 Popularity:* ${result.popularity}\n\n`;
    details += `\n*🌐 URL:* ${result.url}\n\n`;

      await Yaka.sendMessage(m.from,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m});
    
  },
};
