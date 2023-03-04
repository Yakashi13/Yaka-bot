const canvacord=require('canvacord')
const {fetchBuffer}=require("../../lib/Function")
module.exports={
    name: "rank",
    alias: ["rank"],
    desc: "shows the rank",
    cool:3,
    react:"✅",
    category: "General",
    start: async(Miku, m,{text,pushName,sender}) => {
        const userq = await Levels.fetch(m.sender, "bot");
const levelRole = userq.level
var role = 'Citizen'
if (levelRole <= 2) {
 var role = 'Beginner'
} else if (levelRole <= 4) {
 var role = 'Fiend'
} else if (levelRole <= 6) {
 var role = 'Hellion'
}else if (levelRole <= 8) {
 var role = 'Abomination'
}else if (levelRole <= 10) {
 var role = 'Demon' 
}else if (levelRole <= 12) {
 var role = 'Archdemon'
} else if (levelRole <= 14) {
 var role = 'Infernal Lord'
} else if (levelRole <= 16) {
 var role = 'Demon King'
} else if (levelRole <= 18) {
 var role = 'Demon Emperor'
} else if (levelRole <= 20) {
 var role = 'Dark Lord'
} else if (levelRole <= 22) {
 var role = 'Shadow Emperor'
} else if (levelRole <= 24) {
 var role = 'Hellfire Emperor'
} else if (levelRole <= 26) {
 var role = 'Demon Overlord'
} else if (levelRole <= 28) {
 var role = 'Devil King'
} else if (levelRole <= 30) {
 var role = 'Underworld Emperor'
} else if (levelRole <= 32) {
 var role = 'Prince of Darkness'
} else if (levelRole <= 34) {
 var role = 'Lord of the Underworld'
} else if (levelRole <= 36) {
 var role = 'Demon Lord Supreme'
} else if (levelRole <= 38) {
 var role = 'Master of the Inferno'
} else if (levelRole <= 40) {
 var role = 'Emperor of the Dark Realms'
} else if (levelRole <= 42) {
 var role = 'Lord of the Flames'
} else if (levelRole <= 44) {
 var role = 'Shadow Lord'
} else if (levelRole <= 46) {
 var role = 'Devil Emperor'
} else if (levelRole <= 48) {
 var role = 'Demon General'
}else if (levelRole <= 50) {
 var role = 'Devil King Supreme'
}else if (levelRole <= 52) {
 var role = 'Inferno Lord'
}else if (levelRole <= 54) {
 var role = 'Demon Warlord'
}else if (levelRole <= 56) {
 var role = 'Supereme'
}else if (levelRole <= 58) {
 var role = 'Emperor'
}else if (levelRole <= 60) {
 var role = 'Yaksa'
}else if (levelRole <= 62) {
 var role = 'Ancient Vampire'
}else if (levelRole <= 64) {
 var role = 'Hellfire King'
}else if (levelRole <= 66) {
 var role = 'Supreme Demon Lord'
}else if (levelRole <= 68) {
 var role = 'Revered Ruler'
}else if (levelRole <= 70) {
 var role = 'Divine Ruler'
}else if (levelRole <= 72) {
 var role = 'Eternal Ruler'
}else if (levelRole <= 74) {
 var role = 'Prime'
}else if (levelRole <= 76) {
 var role = 'Prime Lord'
}else if (levelRole <= 78) {
 var role = 'The Prime Emperor'
}else if (levelRole <= 80) {
 var role = 'The Original'
}else if (levelRole <= 100) {
 var role = ' High Level Bitch'
}
		let disc = m.sender.substring(3, 7)
			let textr = "";
            if (pushName) {
             textr += `*${pushName}#${disc}'s* Exp\n\n`
			} else {
				textr += `*${m.sender}#${disc}'s* Exp\n\n`
			}
			textr += `*🎯️XP*: ${userq.xp} / ${Levels.xpFor(userq.level + 1)}\n*❤️Level*: ${userq.level}\n*🔮️Role*: ${role}`

			try {
                    ppuser = await Miku.profilePictureUrl(m.sender, 'image')
                } catch {
                    pppuser = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                    ppuser=await fetchBuffer(pppuser)

                }
                const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                const randomHexz = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`

			                const rank = new canvacord.Rank()
                    .setAvatar(ppuser)
                    .setLevel(userq.level)
                    .setLevelColor(randomHexs, randomHex)
                    .setCurrentXP(userq.xp)
                    .setOverlay(randomHex, 100, false)
                    .setRequiredXP(Levels.xpFor(userq.level + 1))
                    .setProgressBar(randomHexs, 'COLOR')
				    .setRank(0, role, false)
                    .setBackground('COLOR', randomHexz)
                    .setUsername(pushName)
                    .setDiscriminator(disc)
                rank.build().then(async(data)=>{
					Miku.sendMessage(m.from,{image:data,caption:textr},{quoted:m})
  })

    }
}
