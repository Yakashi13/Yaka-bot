const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=ylQH4R2KD4IyxzpPgC7ij9Qp8FEit0Uh;rur=PRN\05457321414014\0541705591446:01f738183c00bf557684260cc3b5a45cf5f82fb4caf933695ffec8a54a3afc6f06c875de;mid=Y1zd5gALAAF6AVXI7xhsffe1TKNM;ds_user_id=57428263220;sessionid=57321414014%3AzNaEyJNNC46oa9%3A13%3AAYf-HwPYAdVWrhaCNVA1ZYiqzAs3w5fu41IcjJU_0A;ig_did=05DF1B3E-7F04-413C-825B-EB8050CBE417");
ig.setCookie("csrftoken=ylQH4R2KD4IyxzpPgC7ij9Qp8FEit0Uh;rur=PRN\05457321414014\0541705591446:01f738183c00bf557684260cc3b5a45cf5f82fb4caf933695ffec8a54a3afc6f06c875de;mid=Y1zd5gALAAF6AVXI7xhsffe1TKNM;ds_user_id=57428263220;sessionid=57321414014%3AzNaEyJNNC46oa9%3A13%3AAYf-HwPYAdVWrhaCNVA1ZYiqzAs3w5fu41IcjJU_0A;ig_did=05DF1B3E-7F04-413C-825B-EB8050CBE417");
require ('../../config.js')


module.exports = {
    name: "igdl",
    alias:["instagram","instadl","instagramdl","igvid"],
    desc: "To download an instagram video or image",
    category: "Media",
    usage: `igdl <video /> image link>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args }) => {

        if (!args[0])
          return Miku.sendMessage(
            m.from,
            { text: `Please provide a Instagram Video / Image link !` },
            { quoted: m }
          );
      if(!args[0].includes("instagram.com"))
          return Miku.sendMessage(
              m.from,
              { text: `Please provide a valid Instagram Video / Image link !` },
              { quoted: m }
            );

        let InstaLink = args[0];
         
            if (InstaLink.includes("?"))
            InstaLink = InstaLink.split("/?")[0];
        ig.fetchPost(InstaLink).then((res) => {
            if (res.media_count == 1) {
                if (res.links[0].type == "video") {
                    Miku.sendMessage(
                        m.from,
                        {
                            video: { url: res.links[0].url }, 
                            caption: `Downloaded by: *${botName}*`
                        },
                        { quoted: m }
                    )
                }else if (res.links[0].type == "image") {
                    Miku.sendMessage(
                        m.from,
                        {
                            image: { url: res.links[0].url }, 
                            caption: `Downloaded by: *${botName}*`
                        },
                        { quoted: m }
                    )
                }
            }
            else if (res.media_count > 1) {
                for (let i = 0; i < res.media_count; i++) {
                    if (res.links[i].type == "video") {
                        Miku.sendMessage(
                            m.from,
                            {
                                video: { url: res.links[i].url },
                                caption: `Downloaded by: *${botName}*`
                            },
                            { quoted: m }
                        )
                    } else if (res.links[i].type == "image") {
                        Miku.sendMessage(
                            m.from,
                            {
                                image: { url: res.links[i].url },
                                caption: `Downloaded by: *${botName}*`
                            },
                            { quoted: m }
                        )
                    }
                }
            }            
        }).catch((error) => {
            console.log(error);
            sendMessage(m.from, { text: `Error private / not found` }, { quoted: m })
        });
}
}
