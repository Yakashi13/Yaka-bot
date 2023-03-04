const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mk } = require("../../Database/dataschema.js");



module.exports = {
    name: "nsfw",
    alias: ["nsfwswitch","nsfwmode"],
    desc: "Enable or disable NSFW commands in a group",
    category: "Group",
    usage: "nsfw [on/off]",
    react: "🎀",
    start: async (
      Miku,
      m,
      { args, isBotAdmin, isAdmin, isCreator, reply,prefix,pushName }
    ) => {
      
        if (!isAdmin)
        return Miku.sendMessage(
          m.from,
          {
            text: `*${pushName}* must be *Admin* to turn ON/OFF NSFW !`,
          },
          { quoted: m }
        );
  
      let checkdata = await mk.findOne({ id: m.from });
      var groupe = await Miku.groupMetadata(m.from);
      var members = groupe["participants"];
      var mems = [];
      members.map(async (adm) => {
        mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
      });

      if (args[0] === "on") {
        if (!checkdata) {
          await new mk({ id: m.from, switchNSFW: "true" }).save();
          Miku.sendMessage(
            m.from,
            {
              text: `*NSFW* has been *Activated* in this group!`,
              contextInfo: { mentionedJid: mems },
            },
            { quoted: m }
          );
          return Miku.sendMessage(
            m.from,
            { text: `*NSFW* has been *Activated* in this group!` },
            { quoted: m }
          );
        } else {
          if (checkdata.switchNSFW == "true")
            return Miku.sendMessage(
                m.from,
                { text: `*NSFW* is already *Activated* in this group !` },
                { quoted: m }
              );
          await mk.updateOne({ id: m.from }, { switchNSFW: "true" });
          return Miku.sendMessage(
            m.from,
            { text: `*NSFW* has been *Activated* in this group!` },
            { quoted: m }
          );
        }
      } else if (args[0] === "off") {
        if (!checkdata) {
          await new mk({ id: m.from, switchNSFW: "false" }).save();
          return Miku.sendMessage(
            m.from,
            { text: `*NSFW* has been *De-Activated* in this group !` },
            { quoted: m }
          );
        } else {
          if (checkdata.switchNSFW == "false") return Miku.sendMessage(
            m.from,
            { text: `*NSFW* is already *De-Activated* in this group !` },
            { quoted: m }
          );
          await mk.updateOne({ id: m.from }, { switchNSFW: "false" });
          return Miku.sendMessage(
            m.from,
            { text: `*NSFW* has been *De-Activated* in this group !` },
            { quoted: m }
          );
        }
      } else {
        let buttonsntilink = [
          {
            buttonId: `${prefix}nsfw on`,
            buttonText: { displayText: "On" },
            type: 1,
          },
          {
            buttonId: `${prefix}nsfw off`,
            buttonText: { displayText: "Off" },
            type: 1,
          },
        ];
        let bmffg = {
          image: {url : botImage5} ,
          caption: `\nPlease click the button below\n*On / Off*\n`,
          footer: `*${botName}*`,
          buttons: buttonsntilink,
          headerType: 4,
        };
        await Miku.sendMessage(m.from, bmffg, { quoted: m });
    }
  },
};
