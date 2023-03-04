module.exports = {
    name: "roll",
    alias: ["dice"],
    desc: "Rolls a dice with the maximum number of sides specified",
    category: "fun",
    usage: "roll <maximum number>",
    react: "🎲",
    start: async (Miku, m, { text, prefix, args }) => {
        let max = parseInt(args[0]);
        if (!max) return Miku.sendMessage(m.from, { text: "Please provide a maximum number of sides for the dice." }, { quoted: m });
        let roll = Math.floor(Math.random() * max) + 1;
        Miku.sendMessage(m.from, { text: `You rolled a ${roll}!` }, { quoted: m });
    }
}
