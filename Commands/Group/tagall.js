require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "tagall",
  alias: ["tag", "all"],
  desc: "Tag all group member",
  category: "Group",
  usage: "tagall",
  react: "👹",
  start: async (
    Yaka,
    m,
    { text, prefix, isBotAdmin, isAdmin, participants, args }
  ) => {
    if (!isAdmin)
      return Yaka.sendMessage(m.from, { text: `Only *Admins* can use this command.` }, { quoted: m });

    let message = args ? args.join(' ') :  m.quoted ? m.quoted.msg : 'No Message';

    let mess = `               *『 Attention Here 』*
    
*Tagged by:* @${m.sender.split("@")[0]}
    
*Message:* ${message}\n\n`;

    for (let mem of participants) {
      mess += `♢ @${mem.id.split("@")[0]}\n`;
    }
    mess += `\n\n                    *Thank You*\n`;

    await Yaka.sendMessage(m.from, { text: mess,mentions: participants.map(a => a.id) }, { quoted: m });
  },
};

