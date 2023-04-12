module.exports = {
    name: "utilitiescommands",
    alias: ["utilitiesc", "utilitiscommands"],
    desc: "Gives Help command list",
    react: "⭕",
    category: "Help Menu",
    start: async (Yaka, m, { prefix, pushName, args, commands, text }) => {
  
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
    
    Here's the list of Utility Commands.\n
                  
    | • ━━━━━━━━━━━━━━
    ╠ •
    ╠ •🎗 ${prefix}ᴇᴍᴏᴊɪᴍɪx - mix any two emojies (curruntly under the development)
    ╠ •🎗 ${prefix}Q / Qᴜᴏᴛᴇ - quote sticker.
    ╠ •🎗 ${prefix}ꜱᴛɪᴄᴋᴇʀ - make a sticker.
    ╠ •🎗 ${prefix}ꜱᴛɪᴄᴋᴇʀᴄʀᴏᴘ - crop a sticker.
    ╠ •🎗 ${prefix}ꜱᴛᴇᴀʟ - steal any sticker with your name.
    ╠ •🎗 ${prefix}ᴛᴏᴀᴜᴅɪᴏ - turn any video into audio. 
    ╠ •🎗 ${prefix}ᴛᴏᴍᴘ3 - turn anything to audio.
    ╠ •🎗 ${prefix}ᴛᴏᴍᴘ4 - turn a sticker into video.
    ╠ •🎗 ${prefix}ᴛᴏᴜʀʟ - upload to the cloud and give you a url.
    ╠ •
    | • ━━━━━━━━━━━━━━
  
    \n\n`
  
        textHelpMenu += `*✨ _Help Menu by:_ ${botName} ✨*
    
    ☞ _Owned By_: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎`;
  
        let buttons = [];
  
        let buttonMessage = {
          image: {url: botImage1},
          caption: textHelpMenu,
          footer: `*${botName}*`,
          headerType: 4,
        };
  
        await Yaka.sendMessage(m.from, buttonMessage, { quoted: m });
      }
    }
  }
  
