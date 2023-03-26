module.exports = {
  name: "charlist",
  alias: ["characterlist", "botcharacterlist"],
  desc: "Ban a member",
  category: "Mods",
  usage: "setchar 0/1/2/3/4/5/6/7",
  react: "🧝‍♀️",
  start: async (Miku, m, { text, prefix, modStatus }) => {

    let txt = `*Bot Charactes*
     \n╠━━━━━━━━━━━━━━
   \n\n╠ • 0 - 𝐘𝐚𝐤𝐚
     \n╠ • 1 - 𝐁𝐞𝐧𝐢𝐦𝐚𝐫𝐮
     \n╠ • 2 - 𝐏𝐨𝐰𝐞𝐫
     \n╠ • 3 - 𝐇𝐢𝐧𝐚𝐭𝐚
     \n╠ • 4 - 𝐎𝐛𝐢𝐭𝐨
     \n╠ • 5 - 𝐌𝐢𝐤𝐚𝐬𝐚
     \n╠ • 6 - 𝐄𝐦𝐢𝐥𝐢𝐚
     \n╠ • 7 - 𝐀𝐲𝐚𝐧𝐞
     \n╠ • 8 - 𝐘𝐨𝐭𝐬𝐮𝐛𝐚
     \n╠ • 9 - 𝐌𝐚𝐢
     \n╠ • 10 - 𝐓𝐨𝐡𝐫𝐮
     \n╠ • 11 - 𝐌𝐚𝐫𝐢𝐧
     \n╠ • 12 - 𝐑𝐞𝐦
     \n╠ • 13 - 𝐌𝐚𝐤𝐢𝐦𝐚
     \n╠ • 14 - 𝐍𝐞𝐳𝐮𝐤𝐨
     \n╠ • 15 - 𝐎𝐜𝐡𝐚𝐜𝐨
     \n╠ • 16 - 𝐀𝐪𝐮𝐚
     \n╠ • 17 - 𝐅𝐮𝐛𝐮𝐤𝐢
     \n╠ • 18 - 𝐆𝐨𝐣𝐨
     \n╠ • 19 - 𝐇𝐚𝐲𝐚𝐬𝐞
     \n╠ • 20 - 𝐈𝐭𝐚𝐜𝐡𝐢
     \n╠ • 21 - 𝐒𝐡𝐨𝐤𝐨
     \n╠ • 22 - 𝐊𝐮𝐫𝐮𝐦𝐢
     \n╠ • 23 - 𝐌𝐢𝐭𝐬𝐮𝐫𝐢
     \n╠━━━━━━━━━━━━━━
    \n\nExample: *${prefix}setchar 7* or choose button below.\n`;

    let botLogos = [
      'https://cdn.dribbble.com/users/2400955/screenshots/10843457/media/4853cc6ddfdd1f5400ea40a608f10fef.jpg', // 1
      'https://wallpapercave.com/wp/wp5950608.png', // 2
      'https://wallpapercave.com/wp/wp11998979.jpg', // 3
      'https://wallpapercave.com/wp/wp2714940.jpg', // 4
      'https://wallpapercave.com/uwp/uwp2564410.jpeg', // 5
      'https://wallpapercave.com/uwp/uwp1074204.jpeg', // 6
      'https://i.pinimg.com/564x/a9/98/c8/a998c8653cd690080c2c2232355fadd2.jpg', // 7
      'https://wallpapercave.com/wp/wp9494921.png', // 8
      'https://wallpapercave.com/wp/wp8435260.png', // 9
      'https://wallpapercave.com/wp/wp7579400.jpg', // 10
      'https://wallpapercave.com/wp/wp10917529.jpg', // 11
      'https://wallpapercave.com/wp/wp1860711.png', // 12
      'https://images6.alphacoders.com/112/1126221.jpg', // 13
      'https://wallpapercave.com/wp/wp9269166.jpg', // 14
      'https://images6.alphacoders.com/919/919193.jpg', // 15
      'https://images8.alphacoders.com/790/790834.png', // 16
      'https://wallpapercave.com/wp/wp8354244.jpg', // 17
      'https://images5.alphacoders.com/124/1245177.jpg', // 18
      'https://wallpapercave.com/wp/wp8869413.png', // 19
      'https://wallpapercave.com/wp/wp8241464.jpg', // 20
      'https://images2.alphacoders.com/117/1172959.png', // 21
      'https://wallpapercave.com/wp/wp5894889.jpg', // 22
      'https://wallpapercave.com/wp/wp10959288.jpg' // 23
    ];

    let randomimage = botLogos[Math.floor(Math.random() * botLogos.length)];

    let sections = []
    let chars = ['𝐘𝐚𝐤𝐚', '𝐁𝐞𝐧𝐢𝐦𝐚𝐫𝐮',
      '𝐏𝐨𝐰𝐞𝐫', '𝐇𝐢𝐧𝐚𝐭𝐚',
      '𝐎𝐛𝐢𝐭𝐨', '𝐌𝐢𝐤𝐚𝐬𝐚',
      '𝐄𝐦𝐢𝐥𝐢𝐚', '𝐀𝐲𝐚𝐧𝐞',
      '𝐘𝐨𝐭𝐬𝐮𝐛𝐚', '𝐌𝐚𝐢',
      '𝐓𝐨𝐡𝐫𝐮', '𝐌𝐚𝐫𝐢𝐧',
      '𝐑𝐞𝐦', '𝐌𝐚𝐤𝐢𝐦𝐚',
      '𝐍𝐞𝐳𝐮𝐤𝐨', '𝐎𝐜𝐡𝐚𝐜𝐨',
      '𝐀𝐪𝐮𝐚', '𝐅𝐮𝐛𝐮𝐤𝐢',
      '𝐆𝐨𝐣𝐨', '𝐇𝐚𝐲𝐚𝐬𝐞',
      '𝐈𝐭𝐚𝐜𝐡𝐢', '𝐒𝐡𝐨𝐤𝐨',
      '𝐊𝐮𝐫𝐮𝐦𝐢', '𝐌𝐢𝐭𝐬𝐮𝐫𝐢'
    ]
    let buttonDesc = [`🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Yaka MD`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Benimaru Shinmon`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Hinata Hyuuga`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Obito Uchiha`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Mikasa Ackerman`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Emilia`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Ayane Shirakawa`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Yotsuba`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Mai Sakurajima`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Tohru Kobayashi`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Marin Kitagawa`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Rem`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Makima`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Nezuko Kamado`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Ochaco Uraraka`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Aqua`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Fubuki`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Gojo Satoru`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Hayase Nagatoro`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Itachi Uchiha`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Shoko Komi`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Kurumi Tokisaki`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Mitsuri Kanroji`
    ]
    let buttonTexts = [`${prefix}setchar 0`,
    `${prefix}setchar 1`,
    `${prefix}setchar 2`,
    `${prefix}setchar 3`,
    `${prefix}setchar 4`,
    `${prefix}setchar 5`,
    `${prefix}setchar 6`,
    `${prefix}setchar 7`,
    `${prefix}setchar 8`,
    `${prefix}setchar 9`,
    `${prefix}setchar 10`,
    `${prefix}setchar 11`,
    `${prefix}setchar 12`,
    `${prefix}setchar 13`,
    `${prefix}setchar 14`,
    `${prefix}setchar 15`,
    `${prefix}setchar 16`,
    `${prefix}setchar 17`,
    `${prefix}setchar 18`,
    `${prefix}setchar 19`,
    `${prefix}setchar 20`,
    `${prefix}setchar 21`,
    `${prefix}setchar 22`,
    `${prefix}setchar 23`
    ]

    for (let i = 0; i < chars.length; i++) {
      const list = {
        title: `${prefix}setchar ${i}`,
        rows: [

          {
            title: `${chars[i]}`,
            rowId: `${buttonTexts[i]}`,
            description: `${buttonDesc[i]}`
          }
        ]
      }
      sections.push(list)
    }


    let buttonMessage = {
      //image: { url: randomimage },
      text: txt,
      footer: `*${botName}*`,
      buttonText: "Change Character",
      sections,
    };

    Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
