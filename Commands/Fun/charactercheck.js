module.exports = {
    name: "charactercheck",
    alias: ["charcheck"],
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
      
    const userChar = ['Sigma', 'Generous', 'Grumpy', 'Overconfident', 'Obedient', 'Good', 'Simp', 'Kind', 'Patient', 'Pervert', 'Cool', 'Helpful']
    const userCharacterSeletion = userChar[Math.floor(Math.random() * userChar.length)]
    

    let Mikutext = `Character of : @${mentionedUser.split("@")[0]}\n\nAnswer : *${userCharacterSeletion}*`

    Miku.sendMessage(m.from, { image: {url: botImage3},caption: Mikutext , mentions: [mentionedUser]}, { quoted: m });

}
}