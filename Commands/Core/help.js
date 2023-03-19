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
            else data.push(`🍁Command : ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`)
            if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`)
            if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`)
            if (cmd.usage) data.push(`💡Example : ${cmd.usage.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
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

            let txt = `               ☲☲☲ List of Command Menu ☲☲☲\n\n
    
    *⊶ Konnichiwa ${pushName} - Senpai😺!!*\n 
    
    *⊶ I'm ${botName}.. My Prefix is ${prefix}*\n\n\n
    
    _📶 Server Uptime_ : *${uptime()}*\n
    _💯 Status_ : ${botName} *is stable*\n`;

            let sections = []

            let chars = ['⊶ Core ⊷',
                '⊶ Group ⊷',
                '⊶ Mod ⊷',
                '⊶ Fun Commands ⊷',
                '⊶ Media ⊷',
                '⊶ Search Engines ⊷',
                '⊶ Utility ⊷',
                '⊶ Image Edit ⊷',
                '⊶ Audio Edit ⊷',
                '⊶ Essentials ⊷',
                '⊶ Weeb ⊷',
                '⊶ Reactions ⊷',
                '⊶ Logo Maker ⊷',
                '⊶ Minecraft ⊷',
                '⊶ Economy ⊷']

            let buttonDesc = [`Get The Core Command List.`,
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
                `Get The Economy Command List.`]


            let buttonTexts = [`${prefix}core`,
            `${prefix}grpc`,
            `${prefix}modc`,
            `${prefix}func`,
            `${prefix}mediac`,
            `${prefix}searchc`,
            `${prefix}utilitiesc`,
            `${prefix}imageeditc`,
            `${prefix}audioeditc`,
            `${prefix}essentialsc`,
            `${prefix}weebc`,
            `${prefix}reactionc`,
            `${prefix}logomakerc`,
            `${prefix}minecraftc`,
            `${prefix}economyc`
            ]


            for (let i = 0; i < chars.length; i++) {
                const list = {
                    title: `• ━━━━━━━━━━━━━━━━━━━━━━━━━━ •`,
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
                //image: { url: randomimage },
                text: txt,
                footer: `*${botName}*`,
                buttonText: "Help Menu ◉",
                sections,
            };

            Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }
}