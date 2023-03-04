const { mku } = require("../../Database/dataschema.js");

module.exports = {
  name: "delmod",
  alias: ["removemod", "unmod", "deleteMod"],
  desc: "To remove an user from Mod",
  category: "Mods",
  usage: "delmod @user",
  react: "🎀",
  start: async (
    Miku,
    m,
    { text, prefix, mentionByTag, pushName, isCreator, owner,modStatus }
  ) => {

      if (modStatus=="false"&&!isCreator)  return Miku.sendMessage(m.from, { text: 'Sorry, only my *Owner* and *Mods* can use this command !' }, { quoted: m });
    //var TaggedUser = mentionByTag[0];

    if (!text && !m.quoted) {
      return Miku.sendMessage(
        m.from,
        { text: `Please tag a *Mod* to remove from *Moderation* !` },
        { quoted: m }
      );
    } else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }
    //var mentionedUser = mentionByTag;
    let userId = (await mentionedUser) || m.msg.contextInfo.participant;
    try {
      var ownerlist = global.owner;
      mku
        .findOne({ id: userId })
        .then(async (user) => {
          if (!user) {
            await mku.create({id:userId, addedMods: false});
            return m.reply("User is not a *Mod* !");
            /*Miku.sendMessage( 
              m.from, 
              { text: `@${mentionedUser.split("@")[0]} has been removed from *Mods* Successfully !`, mentions: [mentionedUser] }, 
              { quoted: m } 
            );*/
          }
          else if (user.addedMods=="false" && !ownerlist.includes(`${mentionedUser.split("@")[0]}`)) {
            return Miku.sendMessage(
              m.from,
              {
                text: `@${mentionedUser.split("@")[0]} is not a *Mod* !`,
                mentions: [mentionedUser],
              },
              { quoted: m }
            );
          }
          else if (ownerlist.includes(`${mentionedUser.split("@")[0]}`)) {
            return Miku.sendMessage(
              m.from,
              {
                text: `@${mentionedUser.split("@")[0]
                  } is an *Owner* and cannot be removed from mod !`,
                mentions: [mentionedUser],
              },
              { quoted: m }
            );
          } else {
            await mku.findOneAndUpdate({ id: userId }, { addedMods: false }, { new: true }).then((user) => {

              Miku.sendMessage(
                m.from,
                {
                  text: `@${mentionedUser.split("@")[0]
                    } has been removed from *Mods* Successfully !`,
                  mentions: [mentionedUser],
                },
                { quoted: m }
              );
            })
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
