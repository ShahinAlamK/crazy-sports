const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  logo: { type: String, default: '' },
  link: { type: String, default: '' },
  api: { type: String, default: '' },
  type: { type: String, default: '' }
});

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, default: 'o' },
  category: { type: String, required: true },
  eventType: { type: String, default: '' },
  publish: { type: String, default: '1' },
  adsLimit: { type: String, default: '0' },
  eventInfo: {
    teamA: { type: String, required: true },
    teamB: { type: String, required: true },
    teamAFlag: { type: String, required: true },
    teamBFlag: { type: String, required: true },
    eventName: { type: String, required: true },
    eventBanner: { type: String, default: '' },
    isHot: { type: String, default: '0' },
    startTime: { type: String, default: '' },
    endTime: { type: String, default: '' }
  },
  channels: [channelSchema]
}, {
  timestamps: true,
  versionKey: false
});

// _id কে id হিসেবে রিটার্ন করার জন্য
eventSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model('Event', eventSchema);