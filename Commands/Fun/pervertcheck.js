module.exports = {
    name: "pervcheck",
    alias: ["pervertcheck"],
    desc: "check",
    cool:3,
    react: "😂",
    category: "Fun",
    start: async(Miku, m,{text, prefix, args,mentionedJid,mentionByTag}) => {

        if (!text)
      return Miku.sendMessage(
        m.from,
        { text: `Please tag a user to use this command!` },
        { quoted: m }
      );
      const mentionedUser = mentionByTag[0];
      
    const shibam = ['50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85 My boy!!','86 My boy!!','87 My boy!!','88 My boy!!','89 My boy!!','90 My boy!!','91 My boy!!','92 My boy!!','93 My boy!!','94 My boy!!','95 My boy!!','96 My boy!!','97 My boy!!','98 My boy!!','99 My boy!!','100 My boy!!'
]
    const dey = shibam[Math.floor(Math.random() * shibam.length)]

    let Mikutext = `Pervert Check Of : @${mentionedUser.split("@")[0]}\n\nAnswer : *${dey}%*😂`

    Miku.sendMessage(m.from, { image: {url: botImage3},caption: Mikutext , mentions: [mentionedUser]}, { quoted: m });

}
}
