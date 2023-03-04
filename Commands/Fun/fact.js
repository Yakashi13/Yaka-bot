const axios = require("axios");

module.exports = {
    name: "fact",
    alias: ["givefact"],
    desc: "Give a random fact.",
    react: "🍁",
    category: "Fun",
    start: async(Miku, m,{pushName,prefix}) => {
        
        await axios
            .get(`https://nekos.life/api/v2/fact`)
            .then((response) => {
                const tet = `*『  Random Facts  』* \n\n${response.data.fact}`

            let buttons = [
                {
                  buttonId: `${prefix}fact`,
                  buttonText: { displayText: "Next Fact" },
                  type: 1,
                }
            ]

            let buttonMessage = {
                image: { url: pic },
                caption: tet +'\n',
                footer: `*${botName}*`,
                buttons: buttons,
                headerType: 4,
              };

             Miku.sendMessage(m.from,buttonMessage,{quoted:m})
            })
            .catch((err) => {
                m.reply(`An error occurred.`)
            })

            
    }
}