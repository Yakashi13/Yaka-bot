module.exports = {
    name: "funcommands",
    alias: ["func", "funcommands", "func"],
    desc: "Gives Help command list",
    react: "⭕",
    category: "Help Menu",
    start: async (Miku, m, { prefix, pushName, args, commands, text }) => {
  
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
        return Miku.sendMessage(m.from, buth, { quoted: m })
      } else {
  
        let textHelpMenu = `Hello, I'm *${botName}* Bot..
    
    Here's the list of Fun Commands.\n
    
      | • ━━━━━━━━━━━━━━
      ╠ •
      ╠ •✨ ${prefix}ᴀᴡꜱᴏᴍᴇᴄʜᴇᴄᴋ - tag a user !! 
      ╠ •✨ ${prefix}ᴄʜᴀʀᴀᴄᴛᴇʀᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ᴄᴜᴛᴇᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ɢᴀʏᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ɢʀᴇᴀᴛᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ʜᴀɴᴅꜱᴏᴍᴇᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ʜᴏʀɴʏᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ʟᴇꜱʙɪᴀɴᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ᴍᴀᴛᴜʀᴇᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ᴘᴇʀᴠᴇʀᴛᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ᴘʀᴇᴛᴛʏᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ꜱᴛᴀᴍɪɴᴀᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ꜱᴛʀᴀɪɢʜᴛᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ᴜɢʟʏᴄʜᴇᴄᴋ - tag a user !!
      ╠ •✨ ${prefix}ᴄᴏɪɴꜰʟɪᴘ - make a coin flip !!
      ╠ •✨ ${prefix}ᴅɪᴄᴇ - make a dice roll !!
      ╠ •✨ ${prefix}ᴛʀᴜᴛʜ - truth ?
      ╠ •✨ ${prefix}ꜰᴀᴄᴛ a fact !!
      ╠ •✨ ${prefix}ꜰᴜɴ - type anything with ${prefix} and see a magic happend!! example: ${prefix}gay, ${prefix}mf 
      ╠ •
      | • ━━━━━━━━━━━━━━
    
    \n\n`
  
        textHelpMenu += `*✨ _Help Menu by:_ ${botName} ✨*
    
    ☞ _Owned By_: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎 `;
  
    let buttons = [];
  
        let buttonMessage = {
          image: {url: botImage5},
          caption: textHelpMenu,
          footer: `*${botName}*`,
          buttons: buttons,
          headerType: 4,
        };
  
        await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
      }
    }
  }
  