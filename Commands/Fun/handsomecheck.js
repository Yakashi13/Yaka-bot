module.exports = {
    name: "handsomecheck",
    alias: ["handsomechek"],
    desc: "check",
    cool:3,
    react: "😆",
    category: "Fun",
    start: async(Miku, m,{text, prefix, args,mentionedJid,mentionByTag}) => {

        if (!text)
      return Miku.sendMessage(
        m.from,
        { text: `Please tag a user to use this command!` },
        { quoted: m }
      );
      const mentionedUser = mentionByTag[0];
      
    const shibam = ['60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'
]
    const dey = shibam[Math.floor(Math.random() * shibam.length)]

    let Mikutext = `Handsome Check Of : @${mentionedUser.split("@")[0]}\n\nAnswer : *${dey}%*😍💕`

    Miku.sendMessage(m.from, { image: {url: botImage3},caption: Mikutext , mentions: [mentionedUser]}, { quoted: m });

}
}
