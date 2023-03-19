module.exports = {
    name: "audiocommands",
    alias: ["audioc", "audiocommands"],
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
    ╠ •🎧 ${prefix}ʙᴀꜱꜱ - Effect. use for mp3.
    ╠ •🎧 ${prefix}ʙʟᴏᴡɴ - Effect. use for mp3.
    ╠ •🎧 ${prefix}ᴅᴇᴇᴘ - Effect. use for mp3.
    ╠ •🎧 ${prefix}ꜰᴀᴛ - Effect. use for mp3.
    ╠ •🎧 ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ - Effect. use for mp3.
    ╠ •🎧 ${prefix}ʀᴇᴠᴇʀꜱᴇ - Effect. use for mp3.
    ╠ •🎧 ${prefix}ʀᴏʙᴏᴛ - Effect. use for mp3.
    ╠ •🎧 ${prefix}ꜱʟᴏᴡ - Effect. use for mp3.
    ╠ •🎧 ${prefix}ꜱᴍᴏᴏᴛʜ - Effect. use for mp3.
    ╠ •🎧 ${prefix}ᴛᴇᴍᴘᴏ - Effect. use for mp3.
    ╠ •
    | • ━━━━━━━━━━━━━━
  
    \n\n`
  
        textHelpMenu += `*✨ _Help Menu by:_ ${botName} ✨*
    
    ☞ _Owned By_: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎`;
  
        let buttons = [
          {
            buttonId: `${prefix}essentialc`,
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
  