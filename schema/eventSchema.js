const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const channelSchema = new mongoose.Schema({
  title: String,
  logo: String,
  link: String,
  api: String,
  type: String
}, { _id: false });

const eventSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4(),
    unique: true
  },
  title: { type: String, required: true },
  image: { type: String, default: 'o' },
  category: { type: String, required: true },
  eventType: { type: String, required: true },
  publish: { type: String, default: '1' },
  adsLimit: { type: String, default: '0' },
  eventInfo: {
    teamA: { type: String },
    teamB: { type: String },
    teamAFlag: { type: String },
    teamBFlag: { type: String },
    eventName: { type: String },
    eventBanner: { type: String },
    eventType: { type: String },
    isHot: { type: String, default: '0' },
    startTime: { type: String },
    endTime: { type: String }
  },
  channels: [channelSchema]
}, {
  timestamps: true,
  versionKey: false  // removes __v
});

// Remove _id from all responses
eventSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model('Event', eventSchema);