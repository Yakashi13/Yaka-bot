const axios = require("axios");

module.exports = {
    name: "weather",
    alias: ["weathersearch"],
    desc: "Get weather data of any place.",
    category: "Search",
    usage: `weather <search term>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args }) => {
      if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a location name !` },
          { quoted: m }
        );
      var WeatherSearchTerm = args.join(" ");

      var myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherSearchTerm}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`

      await Miku.sendMessage(
        m.from,
        {
          video: {url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4'},
          gifPlayback: true,
          caption: weathertext,
        },
        { quoted: m }
      );
    },
  };
  