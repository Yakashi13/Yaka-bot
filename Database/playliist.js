const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    songs: [{
      title: { type: String },
      url: { type: String },
      savedAt: { type: Date, default: Date.now }
    }]
  });

const playlist = mongoose.model("Playlist", playlistSchema);
module.exports = { playlist };
