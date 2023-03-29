module.exports = {
    name: "hi",
    alias: ["hello", "moshimoshi", "yoo", "konichiwa", "konnichiwa"],
    desc: "Say hello to bot.",
    react: "💜",
    category: "Core",

    start: async (Miku, m, { prefix, pushName, args, commands, text }) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
            const hours = Math.floor(seconds / (60 * 60));
            const minutes = Math.floor((seconds % (60 * 60)) / 60);
            const secs = Math.floor(seconds % 60);
            return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const now = new Date();
        const hour = now.getHours();
        let greeting;

        if (hour >= 0 && hour < 12) {
            greeting = "Ohayō"; //good morning
        } else if (hour >= 12 && hour < 18) {
            greeting = "Konnichiwa"; //good afternoon
        } else {
            greeting = "Konbanwa"; //good evening
        }
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
                { buttonId: `${prefix}help`, buttonText: { displayText: `Help` }, type: 1 },]
            let buth = {
                text: `ℹ️Command Info\n\n${data.join("\n")}`,
                footer: `${botName}`,
                buttons: buttonss,
                headerType: 1
            }
            return Miku.sendMessage(m.from, buth, { quoted: m })
        } else {
          

         let textHelpMenu = `| • ━━━━━━━━━━━━━━━━━━━━\n`

            textHelpMenu += `| • ${greeting} ~ ${pushName} -Kun ❤️‍🔥 !!\n`

            textHelpMenu += `| • ━━━━━━━━━━━━━━━━━━━━\n`

            textHelpMenu += `| • I'm *${botName}* Bot..\n`

            textHelpMenu += `| • ━━━━━━━━━━━━━━━━━━━━\n`

            textHelpMenu += `| • Type ${prefix}help to get bot command list.\n`

            textHelpMenu += `| • ━━━━━━━━━━━━━━━━━━━━\n`


            let buttons = [
                {
                    buttonId: `${prefix}help`,
                    buttonText: { displayText: "🌀Menu🌀" },
                    type: 1,
                },
                {
                    buttonId: `${prefix}owner`,
                    buttonText: { displayText: "👽Owner👽" },
                    type: 1,
                }
            ];
            let buttonMessage = {
                video: botVideo, gifPlayback: true,
                caption: textHelpMenu,
                footer: `_Uptime_ | *${uptime()}*\n_Status_ | ${botName} ɪꜱ ꜱᴛᴀʙʟᴇ`,
                buttons: buttons,
                headerType: 4,
            };

            await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }
}
