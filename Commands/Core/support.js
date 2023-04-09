module.exports = {
    name: "support",
    alias: ["supportgc"],
    desc: "Sends support group link.",
    cool:3,
    react: "🥺",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        m.reply(`Check your inbox *${pushName}* Senpai !\n`)
        let botpic = botImage1
        let txt = `Link:* ${suppL}\n\n*Note:* Please don't spam in group, and don't message *Admins directly* without permission. Ask for help in *Group*.\n\n*Thanks for using Yaka.*`
        await Miku.sendMessage(m.sender,{image:{url:botpic}, caption:txt},{quoted:m})
    }
}
