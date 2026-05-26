const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  title: String,
  logo: String,
  link: String,
  api: String,
  type: String
},{
  versionKey: false,
  _id: false
});

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, default: 'o' },
  category: { type: String, required: true },
  eventType: { type: String,default: 'null' }, 
  publish: { type: String, default: '1' },
  adsLimit: { type: String, default: '0' },
  eventInfo: {
    teamA: { type: String, required: true },
    teamB: { type: String, required: true },
    teamAFlag: { type: String, required: true },
    teamBFlag: { type: String, required: true },
    eventName: { type: String, required: true },
    eventBanner: { type: String },
    isHot: { type: String, default: '0' },
    startTime: { type: String },
    endTime: { type: String }
  },
  channels: [channelSchema]
}, {
  timestamps: true,
  versionKey: false
});

eventSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model('Event', eventSchema);