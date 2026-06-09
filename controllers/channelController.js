const Channel = require('../schema/channelSchema');

exports.createChannel = async (req, res) => {
  try {
    const channel = await Channel.createChannel(req.body);
    res.status(201).json(channel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.getAllChannels();
    res.json(channels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getChannelById = async (req, res) => {
  try {
    const channel = await Channel.getChannelById(req.params.id);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json(channel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateChannel = async (req, res) => {
  try {
    const channel = await Channel.updateChannel(req.params.id, req.body);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json(channel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteChannel = async (req, res) => {
  try {
    const channel = await Channel.deleteChannel(req.params.id);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json({ message: 'Channel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};