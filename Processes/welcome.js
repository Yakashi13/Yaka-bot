require("../Core.js");
const { mk } = require("../Database/dataschema.js");

module.exports = async (Miku, anu) => {
  try {
    let metadata = await Miku.groupMetadata(anu.id);
    let participants = anu.participants;
    let desc = metadata.desc;
    if (desc == undefined) desc = "No Description";

    for (let num of participants) {
      try {
        ppuser = await Miku.profilePictureUrl(num, "image");
      } catch {
        ppuser = botImage4;
      }

      if (anu.action == "add") {
        let WELstatus = await mk.findOne({ id: m.from });

        var WelcomeFeature = "false";
        if (WELstatus) {
          WelcomeFeature = WELstatus.switchWelcome || "false";
        }
        let WAuserName = num;
        console.log(
          `\n+${WAuserName.split("@")[0]} Joined/Got Added in: ${
            metadata.subject
          }\n`
        );
        mikutext = `
Hello @${WAuserName.split("@")[0]} -Kun,

Welcome to *${metadata.subject}*.

*🌀 Group Description 🌀*

${desc}

*Thank You.*
  `;
        if (WelcomeFeature == "true") {
          Miku.sendMessage(anu.id, {
            image: { url: ppuser },
            caption: mikutext,
            mentions: [num],
          });
        }
      } else if (anu.action == "remove") {
        let WELstatus = await mk.findOne({ id: m.from });

        var WelcomeFeature = "false";
        if (WELstatus) {
          WelcomeFeature = WELstatus.switchWelcome || "false";
        }
        let WAuserName = num;
        console.log(
          `\n+${WAuserName.split("@")[0]} Left/Got Removed from: ${
            metadata.subject
          }\n`
        );
        mikutext = `
  @${WAuserName.split("@")[0]} -Kun left the group.
  `;
        if (WelcomeFeature == "true") {
          Miku.sendMessage(anu.id, {
            image: { url: ppuser },
            caption: mikutext,
            mentions: [num],
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
