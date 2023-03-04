
require("../../config.js");
require("../../Core.js");



module.exports = {
    name: "pervert",
    alias: ["perv","gay","handsome","hot","sexy","ugly","cute","playboy","playgirl","beautiful","lesbian","whore","motherfucker","sucker","horny","foolish","nibba","nibbi","bitch","waifu","crackhead","rascal","idiot","girlyboy","tomboy","gigachad","mf","introvert","extrovert","sigma","psycho","brainless","useless"],
    desc: "character fun",
    cool:2,
    react: "🤣",
    category: "Fun",
    start: async (Miku, m, { pushName, prefix,participants,isGroup }) => {
      
        let member = participants.map(u => u.id)
        let random = member[Math.floor(Math.random() * member.length)]
        let command_name = m.text.substring(prefix.length).split(" ")[0];
        let ments = [random]
        let message = `The Most ${command_name} Here Is @${random.split('@')[0]}`
        let buttons = [
            {
                buttonId: `${prefix}hidetag`,
                buttonText: { displayText: "😂" },
                type: 1
            },
        ];

        let buttonMessage = {
            image: { url: "https://telegra.ph/file/c70e4e00c825709bd5c31.jpg" },
            caption: `\nThe Most ${command_name} Here Is @${random.split('@')[0]}`,mentions: ments,
            footer: `*${botName}*`,
            buttons: buttons,
            headerType: 4,
        };

        await Miku.sendMessage(m.from, buttonMessage,  { quoted: m });
    },
};
