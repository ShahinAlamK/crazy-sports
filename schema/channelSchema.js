const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  logo: { type: String, default: '' },
  link: { type: String, default: '' },
  group: { type: String, default: '' },
  type: { type: String, default: '' }
},{
    timestamps: true,
});

module.exports = mongoose.model('Channel', channelSchema);