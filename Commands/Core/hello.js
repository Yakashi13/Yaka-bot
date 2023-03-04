module.exports = {
    name: "hi",
    alias: ["hello", "hey", "yoo", "moshimoshi", "bot", "alive", "active"],
    desc: "Say hello to bot.",
    react: "💜",
    category: "Core",
    start: async (Miku, m, { pushName, prefix }) => {
        await Miku.sendMessage(m.from, { text: `\n* _Konnichiwa  ${pushName}  Senpai_ 😛*  !!,\n\n*I am  ${botName}  bot 🤗.*\n\n *Soo, How can I help you ❔❔*\n\nType anything with  ${prefix}  to respond.` }, { quoted: m })
    }
}
