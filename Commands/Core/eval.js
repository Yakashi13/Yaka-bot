require('../../config.js')
module.exports = {
    name: "eval",
    alias: ["evaluate"],
    usage: `${prefa}eval <codes>`,
    react: "👾",
    desc: "evaluates js codes",
    category: "Mods",
    start: async (Miku, m, { text, ban, pushName, mentionByTag, isCreator, args, body, quoted, mime }) => {
        if (!isCreator) return Miku.sendMessage(m.from, { text: '*Only mods can use this command*' }, { quoted: m })
        let out
        try {
            const result = eval(text)
            out = JSON.stringify(result, null, '\t') || 'Evaluated JavaScript'
        } catch (error) {
            m.reply(error.message)
        }
        return m.reply(out)

    }
}
