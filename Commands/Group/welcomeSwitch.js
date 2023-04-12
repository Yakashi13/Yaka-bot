const { mk } = require("../../Database/dataschema.js");

module.exports = {
  name: "welcome",
  alias: ["welcomemess", "welcomeswitch"],
  desc: "Enable or disable Welcome/Goodbye messages in a group",
  category: "Group",
  usage: "welcome [on/off]",
  react: "✨",
  start: async (
    Yaka,
    m,
    { args, isBotAdmin, isAdmin, isCreator, reply, prefix, pushName }
  ) => {
    if (!isAdmin)
      return Yaka.sendMessage(
        m.from,
        {
          text: `*${pushName}* must be *Admin* to turn ON/OFF *Welcome/Goodbye* mesages !`,
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
        await new mk({ id: m.from, switchWelcome: "true" }).save();
        Yaka.sendMessage(
          m.from,
          {
            text: `*Welcome/Goodbye* messages has been *Activated* in this group!`,
            contextInfo: { mentionedJid: mems },
          },
          { quoted: m }
        );
        return Yaka.sendMessage(
          m.from,
          {
            text: `*Welcome/Goodbye* messages has been *Activated* in this group!`,
          },
          { quoted: m }
        );
      } else {
        if (checkdata.switchWelcome == "true")
          return Yaka.sendMessage(
            m.from,
            {
              text: `*Welcome/Goodbye* messages is already *Activated* in this group!`,
            },
            { quoted: m }
          );
        await mk.updateOne({ id: m.from }, { switchWelcome: "true" });
        return Yaka.sendMessage(
          m.from,
          {
            text: `*Welcome/Goodbye* messages has been *Activated* in this group!`,
          },
          { quoted: m }
        );
      }
    } else if (args[0] === "off") {
      if (!checkdata) {
        await new mk({ id: m.from, switchWelcome: "false" }).save();
        return Yaka.sendMessage(
          m.from,
          {
            text: `*Welcome/Goodbye* messages has been *De-Activated* in this group!`,
          },
          { quoted: m }
        );
      } else {
        if (checkdata.switchWelcome == "false")
          return Yaka.sendMessage(
            m.from,
            { text: `*Welcome/Goodbye* is not *Activated* in this group!` },
            { quoted: m }
          );
        await mk.updateOne({ id: m.from }, { switchWelcome: "false" });
        return Yaka.sendMessage(
          m.from,
          {
            text: `*Welcome/Goodbye* messages has been *De-Activated* in this group!`,
          },
          { quoted: m }
        );
      }
    } else {
      let buttonsntilink = [
        {
          buttonId: `${prefix}welcome on`,
          buttonText: { displayText: "✨ On ✨" },
          type: 1,
        },
        {
          buttonId: `${prefix}welcome off`,
          buttonText: { displayText: "✨ Off ✨" },
          type: 1,
        },
      ];
      let bmffg = {
        image: { url: botImage2 },
        caption: `\n*「 Welcome Configuration 」*\n\nPlease click the button below\n`,
        footer: `*${botName}*`,
        buttons: buttonsntilink,
        headerType: 4,
      };
      await Yaka.sendMessage(m.from, bmffg, { quoted: m });
    }
  },
};
