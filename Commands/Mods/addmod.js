const { mku } = require("../../Database/dataschema.js");

module.exports = { 

    name: "addmod", 
    alias: ["makemod"], 
    desc: "To made an user Mod", 
    category: "Mods", 
    usage: "addmod @user", 
    react: "🎀", 
    start: async ( 
      Miku, 
      m, 
      { text, prefix, mentionByTag, pushName, isCreator,owner,modStatus} 
    ) => { 


      if (modStatus=="false"&&!isCreator)  return Miku.sendMessage(m.from, { text: 'Sorry, only my *Owner* and *Mods* can use this command !' }, { quoted: m });
      //var TaggedUser = mentionByTag[0];

      if (!text && !m.quoted) {
        return Miku.sendMessage( 
          m.from, 
          { text: `Please tag a user to make *Mod*!` }, 
          { quoted: m } 
        )}
        else if(m.quoted){
          var mentionedUser = m.quoted.sender;
        }
        else{
          var mentionedUser = mentionByTag[0];
        }
      //var mentionedUser = mentionByTag; 
      let userId = (await mentionedUser) || m.msg.contextInfo.participant; 
      try { 
        var ownerlist = global.owner;
         mku.findOne({id:userId}).then(async (user) => {
          //if(!user.addedMods) await mku.create({id:userId, addedMods: false});
          if (!user) {
            await mku.create({id:userId, addedMods: true});
            return Miku.sendMessage( 
              m.from, 
              { text: `@${mentionedUser.split("@")[0]} has been added to *Mods* Successfully !`, mentions: [mentionedUser] }, 
              { quoted: m } 
            );
          }
          else if (user.addedMods === null || ownerlist.includes(`${mentionedUser.split("@")[0]}`)) {
              await mku.findOneAndUpdate({ id: userId }, { addedMods: true }, { new: true });
              return Miku.sendMessage( 
                m.from, 
                { text: `@${mentionedUser.split("@")[0]} has been added to *Mods* Successfully !` , mentions: [mentionedUser]}, 
                { quoted: m } 
              );
          }
          else if (user.addedMods === true) {
              return Miku.sendMessage(m.from, { text: `@${mentionedUser.split("@")[0]} is already a *Mod* !` , mentions: [mentionedUser]  }, { quoted: m });
          }
          else {
            if (user.addedMods == "true" || ownerlist.includes(`${mentionedUser.split("@")[0]}`)) return Miku.sendMessage(m.from, { text: `@${mentionedUser.split("@")[0]} is already a *Mod* !` , mentions: [mentionedUser]  }, { quoted: m });

            if (!user && !ownerlist.includes(`${mentionedUser.split("@")[0]}`)) {
              await mku.create({id:userId, addedMods: true});
              return Miku.sendMessage( 
                m.from, 
                { text: `@${mentionedUser.split("@")[0]} has been added to *Mods* Successfully !`, mentions: [mentionedUser] }, 
                { quoted: m } 
              );
            }else{
                await mku.findOneAndUpdate({ id: userId }, { addedMods: true }, { new: true });
                return Miku.sendMessage( 
                  m.from, 
                  { text: `@${mentionedUser.split("@")[0]} has been added to *Mods* Successfully !` , mentions: [mentionedUser]}, 
                  { quoted: m } 
                );
            }
          }
          
         }).catch(error => {
           console.log(error)
           return Miku.sendMessage(m.from, { text: `An internal error occurred while adding the user.` }, { quoted: m });
         });
      } catch (err) { 
        console.log(err);
        return Miku.sendMessage(m.from, { text: `An internal error occurred while adding the user.` }, { quoted: m });
      } 
    }, 
  };