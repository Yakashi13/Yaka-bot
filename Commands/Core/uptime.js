const os = require("os");
module.exports = {
    name: "uptime",
    alias: ["alive", "up", "time", "server", "runtime", "run"],
    desc: "Check the uptime",
    cool: 3,
    react: "👻",
    category: "Core",
    start: async (Miku, m, { uptime, prefix }) => {
      const loadavg = os.loadavg();
      const cpu = {
        model: os.cpus()[0].model,
        speed: `${os.cpus()[0].speed} MHz`,
        cores: os.cpus().length,
      };
      const memTotal = Math.round(os.totalmem() / (1024 ** 2));
      const memFree = Math.round(os.freemem() / (1024 ** 2));
      const memUsed = memTotal - memFree;
      // const network = os.networkInterfaces();
  
      //const message = `*${Miku.user.name}* is up and running!\n\n` +
        const message = `*${botName}* 𝘉𝘰𝘵 𝘪𝘴 𝘶𝘱 𝘢𝘯𝘥 𝘳𝘶𝘯𝘯𝘪𝘯𝘨..\n\n` +
        `⭕ 𝐔𝐩𝐭𝐢𝐦𝐞 : *${uptime}*\n` +
        `| • ━━━━━━━━━━━━━━━━━━━━\n` +
        `⭕ 𝐋𝐨𝐚𝐝 𝐀𝐯𝐞𝐫𝐚𝐠𝐞 : *${loadavg}*\n` +
        `| • ━━━━━━━━━━━━━━━━━━━━\n` +
        `⭕ 𝐂𝐏𝐔 : *${cpu.model} (${cpu.cores} cores @ ${cpu.speed})*\n` +
        `| • ━━━━━━━━━━━━━━━━━━━━\n` +
        `⭕ 𝐌𝐞𝐦𝐨𝐫𝐲 : *${memUsed} MB used / ${memTotal} MB total*\n` +
        `| • ━━━━━━━━━━━━━━━━━━━━\n`;
        // `• Network: ${JSON.stringify(network)}`;
  
      await Miku.sendMessage(m.from, { text: message }, { quoted: m });
      },
    };
