require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "revoke",
  alias: ["resetlink","resetgclink","resetlinkgroup","resetlinkgc"],
  desc: "Reset group link",
  category: "Group",
  usage: "revoke",
  react: "👹",
  start: async (
    Yaka,
    m,
    { prefix, isBotAdmin, isAdmin}
  ) => {
    if (m.from == '120363071838447699@g.us') return m.reply('Sorry, this command is not allowed in *Yaka Support Group* !\n\nYou are not allowed to change support group link !' );
    
    if (!isAdmin)
      return Yaka.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    try {
      await Yaka.groupRevokeInvite(m.from).then(
        (res) =>
          Yaka.sendMessage(
            m.from,
            { text: `Group link has been *Updated* Successfully!` },
            { quoted: m }
          )
      );
    } catch (err) {
      Yaka.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
