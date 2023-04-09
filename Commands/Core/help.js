module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "🤖",
  category: "Core",
  start: async (Miku, m, { prefix, pushName, NSFWstatus, args, commands, text }) => {
      const pad = (s) => (s < 10 ? "0" : "") + s;
      const formatTime = (seconds) => {
          const hours = Math.floor(seconds / (60 * 60));
          const minutes = Math.floor((seconds % (60 * 60)) / 60);
          const secs = Math.floor(seconds % 60);
          return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
      };
      const uptime = () => formatTime(process.uptime());

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
              { buttonId: `${prefix}help`, buttonText: { displayText: `help` }, type: 1 },]
          let buth = {
              text: `ℹ️Command Info\n\n${data.join("\n")}`,
              footer: `${botName}`,
              buttons: buttonss,
              headerType: 1
          }
          return Miku.sendMessage(m.from, buth, { quoted: m })
      } else {

          let txt = `
          ⎾ ░ • 𝑳𝒊𝒔𝒕 𝒐𝒇 𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑴𝒆𝒏𝒖 • ░ ⏌
    ══════════════════
    👾 *ʙᴀsɪᴄ* ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}core*

    👾 ɢʀᴏᴜᴘ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}grpc*

    👾 ᴍᴏᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}modc*

    👾 ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs! Cᴀɴ ᴜsᴇ ɪɴ ɢʀᴏᴜᴘs.
    🈁 Usage - *${prefix}func*

    👾 ᴅᴏᴡɴʟᴏᴀᴅ ʏᴛ/ᴛɪᴋᴛᴏᴋ/ɪɢ ᴠɪᴅ/ᴀᴜᴅ (ɪɴᴄʟᴜᴅᴇ ᴅᴏᴄ ᴛʏᴘᴇ).
    🈁 Usage - *${prefix}mediac*

    👾 ᴀɴɪᴍᴇ, ɢᴏᴏɢʟᴇ, sᴏɴɢ ʟʏʀɪᴄs ᴇᴛᴄ.
    🈁 Usage - *${prefix}searchc*

    👾 ᴀᴜᴅɪᴏ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}utilitiesc*

    👾 ᴍᴀᴋᴇ ᴀ sᴛɪᴄᴋᴇʀ/ϙᴜᴏᴛᴇ, ᴛᴜʀɴ ᴛᴏ ᴀᴜᴅ/ᴠɪᴅ.
    🈁 Usage - *${prefix}imageeditc*

    👾 sᴀʏ ᴀɴʏᴛʜɪɴɢ ɪɴ ᴇɴɢʟɪsʜ, ᴊᴀᴘᴀɴᴇsᴇ.
    🈁 Usage - *${prefix}audioc*

    👾 ᴍᴀᴋᴇ ᴀɴʏ ɪᴍᴀɢᴇ ɪɴᴛᴏ ʙʟᴜʀ, ᴄɪʀᴄʟᴇ ᴏʀ ʀᴇᴍᴏᴠᴇ ʙɢ.
    🈁 Usage - *${prefix}essentialsc*

    👾 *ᴏɴʟʏ ғᴏʀ ᴛʜᴇ ᴡᴇᴇʙs!* Iғ ʏᴏᴜ ʟᴜᴄᴋʏ, ᴄᴀɴ sᴇᴇ ᴛʜᴇ NSFW ᴄᴏᴍᴍᴀɴᴅs ᴀs ᴡᴇʟʟ.
    🈁 Usage - *${prefix}weebc*

    👾 ʀᴇᴀᴄᴛɪᴏɴ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}reactionc*

    👾 ᴍᴀᴋᴇ ᴀɴ ᴀᴡsᴏᴍᴇ ʟᴏɢᴏ ᴜsɪɴɢ ʙᴏᴛ!
    🈁 Usage - *${prefix}logomakerc*

    👾 RPG ɢᴀᴍᴇ. Mɪɴᴇ!!
    🈁 Usage - *${prefix}minecraftc*

    👾 ɢᴇᴛ ᴛʜᴇ ᴇᴄᴏɴᴏᴍʏ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}economyc*

    
    📶 𝚂𝚎𝚛𝚟𝚎𝚛 𝚄𝚙𝚝𝚒𝚖𝚎  |  *${uptime()}*`;

        
          let sections = []

          
          let buttonMessage = {
              image: { url: botImage2 },
              text: txt,
              footer: `${botName} |  ᴡᴏʀᴋɪɴɢ..`,
          };

          Miku.sendMessage(m.from, buttonMessage, { quoted: m });
      }
  }
}

/*module.exports = {
    name: "help",
    alias: ["menu", "h", "helpm", "helpmenu"],
    desc: "Gives all bot commands list",
    react: "🤖",
    category: "Core",
    start: async (Miku, m, { prefix, pushName, NSFWstatus, args, commands, text }) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
            const hours = Math.floor(seconds / (60 * 60));
            const minutes = Math.floor((seconds % (60 * 60)) / 60);
            const secs = Math.floor(seconds % 60);
            return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());

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
                { buttonId: `${prefix}help`, buttonText: { displayText: `help` }, type: 1 },]
            let buth = {
                text: `ℹ️Command Info\n\n${data.join("\n")}`,
                footer: `${botName}`,
                buttons: buttonss,
                headerType: 1
            }
            return Miku.sendMessage(m.from, buth, { quoted: m })
        } else {

            let txt = `⎾ ░ • 𝑳𝒊𝒔𝒕 𝒐𝒇 𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑴𝒆𝒏𝒖 • ░ ⏌
══════════════════
👾 *Core* - *ʙᴀsɪᴄ* ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅs.
👾 *Group* - ᴍᴀɪɴ ɢʀᴏᴜᴘ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
👾 *Mod* - ᴍᴏᴅ ᴄᴏᴍᴍᴀɴᴅs.
👾 *Fun* - ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs! Cᴀɴ ᴜsᴇ ɪɴ ɢʀᴏᴜᴘs.
👾 *Media* - ᴅᴏᴡɴʟᴏᴀᴅ ʏᴛ/ᴛɪᴋᴛᴏᴋ/ɪɢ ᴠɪᴅ/ᴀᴜᴅ (ɪɴᴄʟᴜᴅᴇ ᴅᴏᴄ ᴛʏᴘᴇ).
👾 *Search Engines* - ᴀɴɪᴍᴇ, ɢᴏᴏɢʟᴇ, sᴏɴɢ ʟʏʀɪᴄs ᴇᴛᴄ.
👾 *Audio* - ᴀᴜᴅɪᴏ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
👾 *Utility* - ᴍᴀᴋᴇ ᴀ sᴛɪᴄᴋᴇʀ/ϙᴜᴏᴛᴇ, ᴛᴜʀɴ ᴛᴏ ᴀᴜᴅ/ᴠɪᴅ.
👾 *Essentials* - sᴀʏ ᴀɴʏᴛʜɪɴɢ ɪɴ ᴇɴɢʟɪsʜ, ᴊᴀᴘᴀɴᴇsᴇ.
👾 *Image Edit* - ᴍᴀᴋᴇ ᴀɴʏ ɪᴍᴀɢᴇ ɪɴᴛᴏ ʙʟᴜʀ, ᴄɪʀᴄʟᴇ ᴏʀ ʀᴇᴍᴏᴠᴇ ʙɢ.
👾 *Weeb* - *ᴏɴʟʏ ғᴏʀ ᴛʜᴇ ᴡᴇᴇʙs!* Iғ ʏᴏᴜ ʟᴜᴄᴋʏ, ᴄᴀɴ sᴇᴇ ᴛʜᴇ NSFW ᴄᴏᴍᴍᴀɴᴅs ᴀs ᴡᴇʟʟ.
👾 *Reaction* - ʀᴇᴀᴄᴛɪᴏɴ ᴄᴏᴍᴍᴀɴᴅs.
👾 *Logo* - ᴍᴀᴋᴇ ᴀɴ ᴀᴡsᴏᴍᴇ ʟᴏɢᴏ ᴜsɪɴɢ ʙᴏᴛ!
👾 *Minecraft* - RPG ɢᴀᴍᴇ. Mɪɴᴇ!!
👾 *Economy* - ɢᴇᴛ ᴛʜᴇ ᴇᴄᴏɴᴏᴍʏ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.

📶 𝚂𝚎𝚛𝚟𝚎𝚛 𝚄𝚙𝚝𝚒𝚖𝚎  |  *${uptime()}*`;

            let sections = []

            let chars = [
                '🈁 Core Command List',
                '🈁 Group Command List',
                '🈁 Mod Command List',
                '🈁 Fun Command List',
                '🈁 Media Command List',
                '🈁 Search Engines Command List',
                '🈁 Utility Command List',
                '🈁 Image Edit Command List',
                '🈁 Audio Edit Command List',
                '🈁 Essentials Command List',
                '🈁 Weeb Command List',
                '🈁 Reactions Command List',
                '🈁 Logo Maker Command List',
                '🈁 Minecraft Command List',
                '🈁 Economy Command List'
            ]

            let buttonDesc = [
                `Get The Core Command List.`,
                `Get The Group Command List.`,
                `Get The Mod Command List.`,
                `Get The Fun Command List.`,
                `Get The Media Command List.`,
                `Get The Search Command List.`,
                `Get The Utility Command List.`,
                `Get The Image Edit Command List.`,
                `Get The Audio Edit Command List.`,
                `Get The Essential Command List.`,
                `Get The Weeb Command List.`,
                `Get The Reaction Command List.`,
                `Get The Logo Maker Command List.`,
                `Get The RPG - Minecraft Command List.`,
                `Get The Economy Command List.`
            ]


            let buttonTexts = [
                `${prefix}core`,
                `${prefix}grpc`,
                `${prefix}modc`,
                `${prefix}func`,
                `${prefix}mediac`,
                `${prefix}searchc`,
                `${prefix}utilitiesc`,
                `${prefix}imageeditc`,
                `${prefix}audioc`,
                `${prefix}essentialsc`,
                `${prefix}weebc`,
                `${prefix}reactionc`,
                `${prefix}logomakerc`,
                `${prefix}minecraftc`,
                `${prefix}economyc`
            ]


            for (let i = 0; i < chars.length; i++) {
                const list = {
                    title: `Command usage ||  "${buttonTexts[i]}"`,
                    rows: [
                        {
                            title: `${chars[i]}`,
                            rowId: `${buttonTexts[i]}`,
                            description: `${buttonDesc[i]}`
                        }
                    ]
                }
                sections.push(list)
            }
            let buttonMessage = {
                //image: { url: botImage2 },
                text: txt,
                footer: `${botName} |  ᴡᴏʀᴋɪɴɢ..`,
                buttonText: "Mᴇɴᴜ ⎙",
                sections,
            };

            Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }
}
