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
  
      const message = `*${Miku.user.name}* is up and running!\n\n` +
        `• Uptime: ${uptime}\n` +
        `• Load Average: ${loadavg}\n` +
        `• CPU: ${cpu.model} (${cpu.cores} cores @ ${cpu.speed})\n` +
        `• Memory: ${memUsed} MB used / ${memTotal} MB total\n`;
        // `• Network: ${JSON.stringify(network)}`;
  
      await Miku.sendMessage(m.from, { text: message }, { quoted: m });
      },
    };