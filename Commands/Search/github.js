const axios = require("axios");
module.exports = {
  name: "github",
  alias: ["gh"],
  desc: "Search an username on github",
  category: "Search",
  usage: `gh <github username>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, pushName, args,mime }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a GitHub username !` },
        { quoted: m }
      );
    var newGCdesc = args.join(" ");

    var GHuserInfo = await axios
      .get(`https://api.github.com/users/${newGCdesc}`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    let GhUserPP = GHuserInfo.avatar_url;
    let resText = `*『 GitHub User Info 』*\n\n_🔷 Username:_ *${GHuserInfo.login}*\n\n_🔷 Name:_ *${GHuserInfo.name}*\n\n_🔷 Bio:_ *${GHuserInfo.bio}*\n\n_🔷 Tatal Followers:_ *${GHuserInfo.followers}*\n\n_🔷 Following:_ *${GHuserInfo.following}*\n\n_🔷 Total Public Repos:_ *${GHuserInfo.public_repos}*\n\n_🔷 Total Public Gists:_ *${GHuserInfo.public_gists}*\n\n_🔷 User Location:_ *${GHuserInfo.location}*\n\n_🔷 Company/Organisation:_ *${GHuserInfo.company}*\n\n🔷 _Website:_ ${GHuserInfo.blog}`;

    await Miku.sendMessage(
      m.from,
      {
        image: { url: GhUserPP, mimetype: "image/jpeg" },
        caption: resText,
      },
      { quoted: m }
    );
  },
};
