module.exports = {
  name: "setgcdesc",
  alias: ["setdescgc", "setdesc","setgroupdesc","setgroupdescription"],
  desc: "Change the group description",
  category: "Group",
  usage: `setdesc <New group description>`,
  react: "👹",
  start: async (
    Yaka,
    m,
    { text, prefix, isBotAdmin, isAdmin, pushName, metadata, args,mime}
  ) => {
    if (!isAdmin && !isBotAdmin)
        return Yaka.sendMessage(m.from, { text: `*Bot* and *${pushName}* both must be *Admin* in order to use this Command!` }, { quoted: m });
    if (!args[0])
        return Yaka.sendMessage(m.from, { text: `Please provide a new group description !` }, { quoted: m });
    
    var newGCdesc = args.join(" ");

    try {
        ppgc = await Yaka.profilePictureUrl(m.from, "image");
      } catch {
        ppgc = botImage1;
      }

    await Yaka.groupUpdateDescription(m.from, newGCdesc).then((res) => Yaka.sendMessage(
        m.from,
        {
          image: { url: ppgc, mimetype: "image/jpeg" },
          caption: `*『 Group Description Changed 』*\n\n_🧩 New Description:_\n*${args.join(" ")}*`,
        },
        { quoted: m }
      )).catch((err) => replay(jsonformat(err)))
    
  },
};

