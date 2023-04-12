require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "grouplink",
  alias: ["gclink"],
  desc: "To get concurrent group link.",
  category: "Group",
  usage: "gclink",
  react: "👹",
  start: async (
    Yaka,
    m,
    { prefix, isBotAdmin, isAdmin, metadata,mime }
  ) => {
    if (!isAdmin)
      return Yaka.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    var link = await Yaka.groupInviteCode(m.from);
    var linkcode = `https://chat.whatsapp.com/${link}`;

    try {
      ppgc = await Yaka.profilePictureUrl(m.from, "image");
    } catch {
      ppgc = botImage1;
    }

    try {
      await Yaka.sendMessage(
        m.from,
        {
          image: { url: ppgc, mimetype: "image/jpeg" },
          caption: `\n_🍃 Group Name:_ *${metadata.subject}*\n\n_🔷 Group Link:_\n${linkcode}\n`,
        },
        { quoted: m }
      );
    } catch (err) {
      Yaka.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
