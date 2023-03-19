module.exports = {
    name: "imageeditcommands",
    alias: ["imageeditc", "imageeditcommands"],
    desc: "Gives Help command list",
    react: "💡",
    category: "Help Menu",
    start: async (Miku, m, { prefix, pushName, args, commands, text }) => {
  
      if (args[0]) {
        let data = []
        let name = args[0].toLowerCase()
        let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
        if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
        else data.push(`🍁Command : ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
        if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`)
        if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`)
        if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`)
        if (cmd.usage) data.push(`💡Example : ${cmd.usage.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
        var buttonss = [
          { buttonId: `${prefix}help`, buttonText: { displayText: `Help` }, type: 1 },]
        let buth = {
          text: `ℹ️Command Info\n\n${data.join("\n")}`,
          footer: `${botName}`,
          buttons: buttonss,
          headerType: 1
        }
        return Miku.sendMessage(m.from, buth, { quoted: m })
      } else {
  
        let textHelpMenu = `Hello, I'm *${botName}* Bot..
    
    Here's the list of Image Edit Commands.\n
                  
    | • ━━━━━━━━━━━━━━
    ╠ •
    ╠ •💠 ${prefix}ʙʟᴜʀ - blur any image.
    ╠ •💠 ${prefix}ᴄɪʀᴄʟᴇ - circle any image.
    ╠ •💠 ${prefix}ᴊᴀɪʟ - send a user to horny jail. 
    ╠ •💠 ${prefix}ʀᴇᴍᴏᴠᴇʙɢ - remove image background.
    ╠ •💠 ${prefix}ᴛʀɪɢɢᴇʀ - make a trigger sticker.
    ╠ •
    | • ━━━━━━━━━━━━━━
  
    \n\n`
  
        textHelpMenu += `*✨ _Help Menu by:_ ${botName} ✨*
    
    ☞ _Owned By_: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎`;
  
        let buttons = [
          {
            buttonId: `${prefix}audioeditc`,
            buttonText: { displayText: "Next Menu List" },
            type: 1,
          }
        ];
  
        let buttonMessage = {
          video: botVideo, gifPlayback: true,
          caption: textHelpMenu,
          footer: `*${botName}*`,
          buttons: buttons,
          headerType: 4,
        };
  
        await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
      }
    }
  }
  