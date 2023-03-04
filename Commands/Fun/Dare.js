const axios = require('axios')

module.exports = {
    name: "dare",
    alias: ["givedare","d"],
    desc: "give a dare",
    cool:3,
    react: "🙄",
    category: "Fun",
    start: async(Miku, m,{text, prefix}) => {

     
      
    const shibam = await axios.get('https://dull-plum-panda-gear.cyclic.app/dare')
    let buttons = [
      {
        buttonId: `${prefix}t`,
        buttonText: { displayText: "Truth" },
        type: 1,
      },
      {
        buttonId: `${prefix}d`,
        buttonText: { displayText: ">>" },
        type: 1,
      },
    ];
  
let buttonMessage = {
      image: { url:botImage4},
      caption: `*${shibam.data}*`,
      footer: `*${botName}*`,
      buttons: buttons,
      headerType: 4,
    };


     await Miku.sendMessage(m.from,buttonMessage,{quoted:m});
}
}
