const YT = require("../../lib/ytdl-core.js");
const yts = require("youtube-yts");
const fs = require("fs");

module.exports = {
  name: "ytdoc",
  alias: ["youtubedoc"],
  desc: "To download a song as Document from YouTube link",
  cool: 30,
  category: "Media",
  usage: `ytdoc <song link>`,
  react: "👹",
  start: async (Yaka, m, { text, prefix, args, mime }) => {
    if (!args[0])
      return Yaka.sendMessage(
        m.from,
        { text: `Please provide a YouTube Video link !` },
        { quoted: m }
      );
    let videoUrl = text;
    let videoId = videoUrl.split("v=")[1];
    let search = await yts(text);

    yts({ videoId })
      .then((result) => {
        const length = result.seconds;

        if (length >= 1800) {
          return m.reply(
            "Command Rejected! The audio is more than 30 minutes long BAKA! "
          );
        } else {
          const ytaud =  YT.mp3(text).then((file) => {
            Yaka.sendMessage(
              m.from,
              {
                document: fs.readFileSync(file.path),
                fileName: `${search.all[0].title} by ${botName}.mp3`,
                mimetype: "audio/mpeg",
              },
              { quoted: m },
            );
            fs.unlinkSync(file.path);
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
