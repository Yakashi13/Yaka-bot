const axios = require("axios");
const fs = require("fs"); 
const { unlink } = require("fs").promises;
const child_process = require("child_process");
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
const { fetchJson, GIFBufferToVideoBuffer } = require("../../lib/myfunc.js");

module.exports = {
  name: "behappy",
  alias: ["animehappy"],
  desc: "make happy someone",
  category: "Reaction",
  usage: `behappy @user`,
  react: "🌝",
  start: async (Miku, m, { text, prefix, args,mentionByTag }) => {
    var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`);
    try {
      let user1 = m.sender;
      let recp = ``;
      try {
        if(!args[0]&&!m.quoted){
            user2 = "none";
        }
        else if(m.quoted){
            user2 = m.quoted.sender;
        }else if(mentionByTag){
            user2 = mentionByTag[0];
        
        }
        else{
             user2 = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
        }
      
        ment = [user1, user2];
      } catch {
        user2 = "none";
        ment = [user1, m.sender];
      }
      if (user2 == "none") {
        recp = `@${m.sender.split("@")[0]} is happy with themselves`;
        console.log(recp);
      } else {
        var rcpp = `@${user2.split("@"[0])}`;
        recp = `@${m.sender.split("@")[0]} is happy with @${user2.split("@")[0]} `;

        console.log(recp);
      }

      const response = await axios.get(pat.url, {
        responseType: "arraybuffer",
      });
      const buffer = Buffer.from(response.data, "utf-8");
      var sgif = await GIFBufferToVideoBuffer(buffer);

      await Miku.sendMessage(
        m.from,
        {
          video: sgif,
          gifPlayback: true,
          mentions: ment,
          caption: recp,
        },
        { quoted: m }
      );
    } catch (error) {
      console.log(error);
    }
  },
};
