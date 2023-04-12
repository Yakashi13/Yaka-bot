module.exports = {
    name: "ping",
    alias: ["test", "live", "fuck", ".", "xxx", "sexo", "..."],
    desc: "Sends ping",
    cool:3,
    react: "🈁",
    category: "Core",
    start: async(Yaka, m,{pushName}) => {
        m.reply(`*Check your Inbox* ${pushName} *Senpai !*\n*I have sent you a msg..*`)
        let botpic = botImage1
        let txt = `|| *Fukku Youuu Senpaaaiiii!!!* ||\n`
        await Yaka.sendMessage(m.sender,{image:{url:botpic}, caption:txt},{quoted:m})
    }
}
