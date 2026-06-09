const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  logo: { type: String, default: '' },
  group: { type: String, default: '' },
  url: { type: String, default: '' },
  status: { type: String, default: 'live' },
  verified_at: { type: Date, default: null },
  status_code: { type: Number, default: null },
  content_type: { type: String, default: '' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Channel', channelSchema);