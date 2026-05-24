const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  title: String,
  logo: String,
  link: String,
  api: String,
  type: String
});

const formatSchema = new mongoose.Schema({
  title: String,
  logo: String
});

const eventSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  image: { type: String, default: 'o' },
  cat: { type: String, required: true },
  publish: { type: String, default: '1' },
  adsLimit: { type: String, default: '0' },

  eventInfo: {
    teamA: { type: String },
    teamB: { type: String },
    teamAFlag: { type: String },
    teamBFlag: { type: String },
    eventName: { type: String },
    eventBanner: { type: String },  // optional
    eventType: { type: String },
    isHot: { type: String, default: '0' },
    startTime: { type: String },
    endTime: { type: String }
  },

  formatsNew: [formatSchema],
  channels_data: [channelSchema]

}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);