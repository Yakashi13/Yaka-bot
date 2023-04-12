const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mk } = require("../../Database/dataschema.js");



module.exports = {
    name: "antilinkgc",
    alias: ["alinkgc","antilink"],
    desc: "Enable or disable the antilink feature in a group",
    category: "Group",
    usage: "antilinkgc [on/off]",
    react: "🔐",
    start: async (
      Yaka,
      m,
      { args, isBotAdmin, isAdmin, isCreator, reply,prefix,pushName }
    ) => {
        if (!isAdmin && !isBotAdmin)
        return Yaka.sendMessage(
          m.from,
          {
            text: `Bot and *${pushName}* both must be admin in order to use this command !`,
          },
          { quoted: m }
        );
  
      let checkdata = await mk.findOne({ id: m.from });
      var groupe = await Yaka.groupMetadata(m.from);
      var members = groupe["participants"];
      var mems = [];
      members.map(async (adm) => {
        mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
      });
  
      if (args[0] === "on") {
        if (!checkdata) {
          await new mk({ id: m.from, antilink: "true" }).save();
          Yaka.sendMessage(
            m.from,
            {
              text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`,
              contextInfo: { mentionedJid: mems },
            },
            { quoted: m }
          );
          return Yaka.sendMessage(
            m.from,
            { text: `*Successfully activated antilink*` },
            { quoted: m }
          );
        } else {
          if (checkdata.antilink == "true")
            return Yaka.sendMessage(
                m.from,
                { text: `*Already activated.*` },
                { quoted: m }
              );
          await mk.updateOne({ id: m.from }, { antilink: "true" });
          return Yaka.sendMessage(
            m.from,
            { text: `*Antilink is enabled in this group*` },
            { quoted: m }
          );
        }
      } else if (args[0] === "off") {
        if (!checkdata) {
          await new mk({ id: m.from, antilink: "false" }).save();
          return Yaka.sendMessage(
            m.from,
            { text: `*Successfully deactivated antilink*` },
            { quoted: m }
          );
        } else {
          if (checkdata.antilink == "false") return Yaka.sendMessage(
            m.from,
            { text: `*Already deactivated.*` },
            { quoted: m }
          );
          await mk.updateOne({ id: m.from }, { antilink: "false" });
          return Yaka.sendMessage(
            m.from,
            { text: `*Antilink is disabled in this group*` },
            { quoted: m }
          );
        }
      } else {
        let buttonsntilink = [
          {
            buttonId: `${prefix}antilinkgc on`,
            buttonText: { displayText: "✅✅" },
            type: 1,
          },
          {
            buttonId: `${prefix}antilinkgc off`,
            buttonText: { displayText: "❎❎" },
            type: 1,
          },
        ];
        let bmffg = {
          image: {url : botImage6} ,
          caption: `\n*「 Group Antilink configuration 」*\n\nPlease click the button below\n*On / Off*\n\n⚠️ Note: This will *delete* all links from groups and *remove* someone if they send any other *"WhatsApp Group"* Link.`,
          footer: `*${botName}*`,
          buttons: buttonsntilink,
          headerType: 4,
        };
        await Yaka.sendMessage(m.from, bmffg, { quoted: m });
    }
  },
};
