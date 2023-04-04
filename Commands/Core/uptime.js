module.exports = {
    name: "uptime",
    alias: ["alive", "up", "time", "server", "runtime", "run"],
    desc: "Check the uptime",
    cool: 3,
    react: "👻",
    category: "Core",
    start: async (Miku, m, { pushName, prefix }) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
            const hours = Math.floor(seconds / (60 * 60));
            const minutes = Math.floor((seconds % (60 * 60)) / 60);
            const secs = Math.floor(seconds % 60);
            return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());
      
        await Miku.sendMessage(m.from, {
            
            image: { url: botImage1 },
            caption: `| • ━━━━━━━━━━━━━━━━━\n| • Server Uptime: *${uptime()}*\n| • ━━━━━━━━━━━━━━━━━\n| • Status: ${botName} ɪꜱ ꜱᴛᴀʙʟᴇ\n| • ━━━━━━━━━━━━━━━━━\n`}, { quoted: m })
          
    }
}