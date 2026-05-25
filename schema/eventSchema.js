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
    unique: true,
    sparse: true
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
    isHot: { type: String, default: '0' },
    startTime: { type: String },
    endTime: { type: String }
  },
  channels: [channelSchema]
}, {
  timestamps: true,
  versionKey: false
});

// ✅ Pre-save hook দিয়ে id generate করো
eventSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = uuidv4();
  }
  next();
});

// insertMany এর জন্য pre-insertMany hook
eventSchema.pre('insertMany', function(next, docs) {
  docs.forEach(doc => {
    if (!doc.id) {
      doc.id = uuidv4();
    }
  });
  next();
});

eventSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model('Event', eventSchema);