module.exports = {
    name: "modcommands",
    alias: ["modc", "modcommands"],
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
    
    Here's the list of Moderation Commands.\n
                  
    | • ━━━━━━━━━━━━━━
    ╠ •
    ╠ •🌀 ${prefix}ᴀᴅᴅᴍᴏᴅ - add a mod.
    ╠ •🌀 ${prefix}ᴅᴇʟᴇᴛᴇᴍᴏᴅ - delete a mod.
    ╠ •🌀 ${prefix}ʙᴀɴ - ban a user.
    ╠ •🌀 ${prefix}ᴜɴʙᴀɴ - unban user.
    ╠ •🌀 ${prefix}ʙᴀɴɢᴄ - ban a grp.
    ╠ •🌀 ${prefix}ᴜɴʙᴀɴɢᴄ - unban grp.
    ╠ •🌀 ${prefix}ʙʟᴏᴄᴋ - block a user.
    ╠ •🌀 ${prefix}ᴜɴʙʟᴏᴄᴋ - unblock user.
    ╠ •🌀 ${prefix}ʙʀᴏᴀᴅᴄᴀꜱᴛ - broadcast a msg.
    ╠ •🌀 ${prefix}ᴄʜᴀʀʟɪꜱᴛ - character list of bot.
    ╠ •🌀 ${prefix}ᴍᴏᴅᴇ - public / private / self.
    ╠ •🌀 ${prefix}ʙᴀɴʟɪꜱᴛ - list of ban users.
    ╠ •🌀 ${prefix}ᴘᴍᴄʜᴀᴛʙᴏᴛ - chatbot in pm.
    ╠ •🌀 ${prefix}ꜱᴇᴛᴄʜᴀʀᴀᴄᴛᴇʀ - change the bot's character (${prefix}setchar).
    ╠ •
    | • ━━━━━━━━━━━━━━
  
    \n\n`
  
        textHelpMenu += `*✨ _Help Menu by:_ ${botName} ✨*
    
    ☞ _Owned By_: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎`;
  
        let buttons = [
          {
            buttonId: `${prefix}func`,
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
  