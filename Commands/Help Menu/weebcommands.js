module.exports = {
    name: "weebcommands",
    alias: ["weebc", "weebcommands"],
    desc: "Gives Help command list",
    react: "⭕",
    category: "Help Menu",
    start: async (Yaka, m, { prefix, pushName, NSFWstatus, args, commands, text }) => {
  
      if (args[0]) {
        let data = []
        let name = args[0].toLowerCase()
        let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
        if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
        else data.push(`👹Command : ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
        if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`)
        if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`)
        if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`)
        if (cmd.usage) data.push(`⭕Example : ${cmd.usage.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
        var buttonss = [
          { buttonId: `${prefix}help`, buttonText: { displayText: `Help` }, type: 1 },]
        let buth = {
          text: `ℹ️Command Info\n\n${data.join("\n")}`,
          footer: `${botName}`,
          buttons: buttonss,
          headerType: 1
        }
        return Yaka.sendMessage(m.from, buth, { quoted: m })
      } else {
  
        let textHelpMenu = `Hello, I'm *${botName}* Bot..
    
    Here's the list of Weeb Commands.\n
    
      | • ━━━━━━━━━━━━━━
      ╠ •
      ╠ •🧧 ${prefix}ᴀɴɪᴍᴇQᴜᴏᴛᴇ - get a random anime quote.
      ╠ •🧧 ${prefix}ᴄᴏꜱᴘʟᴀʏ - get a cosplay picture.
      ╠ •🧧 ${prefix}ᴄᴏꜱᴘʟᴀʏᴠɪᴅᴇᴏ - get a cosplay video.
      ╠ •🧧 ${prefix}ꜰᴏxɢɪʀʟ- get a foxgirl picture.
      ╠ •🧧 ${prefix}ᴍᴀɪᴅ - get a anime maid picture.
      ╠ •🧧 ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ - search a wallpaper.
      ╠ •🧧 ${prefix}ᴡᴀɪꜰᴜ - get an anime wifu piture.
      ╠ •
      | • ━━━━━━━━━━━━━━\n
      \n`

if (NSFWstatus == "true"){
textHelpMenu += `NSFW Menu :\n
| • ━━━━━━━━━━━━━━
╠ •
╠ • 👅💦 ᴘᴜꜱꜱʏ, ꜱᴘʀᴇᴀᴅᴘᴜꜱꜱʏ,
╠ • 👅💦 ɢᴇɴꜱʜɪɴ, ꜱQᴜɪʀᴛ,
╠ • 👅💦 ɢʟᴀꜱꜱᴇꜱ, ꜱᴜɴɢʟᴀꜱꜱᴇꜱ,
╠ • 👅💦 ꜱᴡɪᴍꜱᴜɪᴛ, ꜱᴄʜᴏᴏʟꜱᴡɪᴍꜱᴜɪᴛ,
╠ • 👅💦 ʜᴏʟᴏ ʟɪᴠᴇ, ᴀꜱꜱ,
╠ • 👅💦 ᴜɴᴅᴇʀᴡᴇᴀʀ, ɴɪᴘᴘʟᴇꜱ,
╠ • 👅💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ɴɪᴘᴘʟᴇꜱ,
╠ • 👅💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ꜱᴇx,
╠ • 👅💦 ꜱᴇx2, ꜱᴇx3,
╠ • 👅💦 ʙʟᴏɴᴅᴇ, ᴛᴡɪɴᴛᴀɪʟꜱ,
╠ • 👅💦 ʙʀᴇᴀꜱᴛꜱ, ᴛʜɪɢʜʜɪɢʜꜱ,
╠ • 👅💦 ꜱᴋɪʀᴛ, ɢᴀᴍᴇᴄɢ,
╠ • 👅💦 ᴀɴɪᴍᴀʟᴇᴀʀꜱ, ꜰᴏxɢɪʀʟ,
╠ • 👅💦 ᴅʀᴇꜱꜱ, ꜱᴄʜᴏᴏʟᴜɴɪꜰᴏʀᴍ,
╠ • 👅💦 ᴛᴡᴏɢɪʀʟꜱ, ɢʟᴏᴠᴇꜱ,
╠ • 👅💦 ᴠᴏᴄᴀʟᴏɪᴅ, ᴛᴏᴜʜᴏᴜ,
╠ • 👅💦 ᴡᴇᴀᴘᴏɴ, ᴡɪᴛʜꜰʟᴏᴡᴇʀꜱ,
╠ • 👅💦 ᴘɪɴᴋʜᴀɪʀ, ᴄʟᴏᴜᴅꜱᴠɪᴇᴡ,
╠ • 👅💦 ᴡʜɪᴛᴇ, ᴀɴɪᴍᴀʟ,
╠ • 👅💦 ᴛᴀɪʟ, ɴᴜᴅᴇ,
╠ • 👅💦 ᴘᴏɴʏᴛᴀɪʟ, ʙᴇᴅ,
╠ • 👅💦 ᴡʜɪᴛᴇ ʜᴀɪʀ, ʀɪʙʙᴏɴꜱ,
╠ • 👅💦 ᴊᴀᴘᴀɴᴇꜱᴇᴄʟᴏᴛʜꜱ, 
╠ • 👅💦 ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ,
╠ • 👅💦 ʙɪᴋɪɴɪ, ʙᴀʀᴇꜰᴏᴏᴛ,
╠ • 👅💦 ɴᴏʙʀᴀ, ꜰᴏᴏᴅ,
╠ • 👅💦 ᴡɪɴɢꜱ, ᴘᴀɴᴛʏʜᴏꜱᴇ,
╠ • 👅💦 ᴏᴘᴇɴꜱʜɪʀᴛ, ʜᴇᴀᴅʙᴀɴᴅ,
╠ • 👅💦 ᴘᴇɴɪꜱ, ᴄʟᴏꜱᴇ,
╠ • 👅💦 ᴡᴇᴛ, ᴄᴀᴛɢɪʀʟ,
╠ • 👅💦 ᴡᴏʟꜰɢɪʀʟ, ɴᴇᴋᴏ,
╠ • 👅💦 ʟᴏʟɪ, ꜱᴘʀᴇᴀᴅʟᴇɢꜱ,
╠ • 👅💦 ʙʀᴀ, ꜰᴀᴛᴇꜱᴇʀɪᴇꜱ,
╠ • 👅💦 ᴛʀᴇᴇ, ᴇʟʙᴏᴡɢʟᴏᴠᴇꜱ,
╠ • 👅💦 ɢʀᴇᴇɴʜᴀɪʀ, ʜᴏʀɴꜱ,
╠ • 👅💦 ᴡɪᴛʜᴘᴇᴛᴀʟꜱ, ᴅʀᴜɴᴋ,
╠ • 👅💦 ᴄᴜᴍ, ʜᴇᴀᴅ ᴅʀᴇꜱꜱ,
╠ • 👅💦 ᴛɪᴇ, ꜱʜᴏʀᴛꜱ,
╠ • 👅💦 ᴍᴀɪᴅ, ʜᴇᴀᴅᴘʜᴏɴᴇꜱ,
╠ • 👅💦 ᴀɴᴜꜱᴠɪᴇᴡ, ɪᴅᴏʟ,
╠ • 👅💦 ɢᴜɴ, ꜱᴛᴏᴄᴋɪɴɢꜱ,
╠ • 👅💦 ᴛᴇᴀʀꜱ, ʙʀᴇᴀꜱᴛʜᴏʟᴅ,
╠ • 👅💦 ɴᴇᴄᴋʟᴀᴄᴇ, ꜱᴇᴇᴛʜʀᴏᴜɢʜ,
╠ • 👅💦 ʙᴜɴɴʏᴇᴀʀꜱ, ʙᴜɴɴʏɢɪʀʟ,
╠ • 👅💦 ᴛᴏᴘʟᴇꜱꜱ, ʙᴇᴀᴄʜ,
╠ • 👅💦 ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇꜱ, ʏᴜʀɪ,
╠ • 👅💦 ᴠᴀᴍᴘɪʀᴇ, ꜱʜɪʀᴛ,
╠ • 👅💦 ᴘᴀɴᴛʏᴘᴜʟʟ, ᴛᴏʀɴᴄʟᴏᴛʜᴇꜱ,
╠ • 👅💦 ʙᴏɴᴅᴀɢᴇ, ꜰɪɴɢᴇʀɪɴɢ
╠ • 👅💦 ʙᴇʟʟ, ꜱʜɪʀᴛʟɪꜰᴛ,
╠ • 👅💦 ᴛᴀᴛᴛᴏᴏ, ᴄʜᴀɪɴ,
╠ • 👅💦 ꜰʟᴀᴛᴄʜᴇꜱᴛ, ᴏᴘᴘᴀɪ, 
╠ •
| • ━━━━━━━━━━━━━━\n\n`
}
        
        textHelpMenu += `*✨ _Help Menu by:_ ${botName} ✨*
    
    ☞ _Owned By_: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎 `;
  
    let buttons = [];
  
        let buttonMessage = {
          image: { url: botImage2 },
          caption: textHelpMenu,
          footer: `*${botName}*`,
          headerType: 4,
        };
  
        await Yaka.sendMessage(m.from, buttonMessage, { quoted: m });
      }
    }
  }
  