module.exports = {
    name: "hi",
    alias: ["hello", "alive", "ping", "moshimoshi", "yoo", "konichiwa"],
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
                { buttonId: `${prefix}help`, buttonText: { displayText: `Help` }, type: 1 },]
            let buth = {
                text: `ℹ️Command Info\n\n${data.join("\n")}`,
                footer: `${botName}`,
                buttons: buttonss,
                headerType: 1
            }
            return Miku.sendMessage(m.from, buth, { quoted: m })
        } else {

            let textHelpMenu = `Konnichiwa ${pushName} -Kun ❤️‍🔥 !!,\n I'm *${botName}* Bot.. \n
            A Multi Character bot with many Commands!!\n`

            textHelpMenu += `\n\n\n_📶 Server Uptime_ : *${uptime()}*
        \n_💯 Status_ : ${botName} ɪꜱ ꜱᴛᴀʙʟᴇ`;

            let buttons = [
                {
                    buttonId: `${prefix}help`,
                    buttonText: { displayText: "🌀 Help Menu 🌀" },
                    type: 1,
                },
                {
                    buttonId: `${prefix}owner`,
                    buttonText: { displayText: "👽 Owner 👽" },
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
