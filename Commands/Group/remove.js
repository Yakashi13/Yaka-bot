require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "remove",
  alias: ["rem"],
  desc: "Remove a member from group",
  category: "Group",
  usage: "remove @user",
  react: "👹",
  start: async (
    Yaka,
    m,
    { text, prefix, isBotAdmin, isAdmin, mentionByTag,pushName}
  ) => {
    if (!text && !m.quoted) return m.reply(`Please tag a user to *Remove* from group!`)
    if (!isAdmin) return Yaka.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    if (!text && !m.quoted) {
      return Yaka.sendMessage(
        m.from,
        { text: `Please tag a user to *Remove* !` },
        { quoted: m }
      );
    } else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }

    let users = (await mentionedUser) || m.msg.contextInfo.participant;

    try {
      await Yaka.groupParticipantsUpdate(m.from, [users], "remove").then(
        (res) =>
          Yaka.sendMessage(
            m.from,
            { text: `User has been *Removed* Successfully by *${pushName}*` },
            { quoted: m }
          )
      );
    } catch (err) {
      Yaka.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
