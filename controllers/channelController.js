const Channel = require('../schema/channelSchema');

// Create Channel
exports.createChannel = async (req, res, next) => {
  try {
    const channel = new Channel(req.body);
    await channel.save();
    res.status(201).json(channel);
  } catch (error) {
    next(error);
  }
};

// Get All Channels
exports.getAllChannels = async (req, res, next) => {
  try {
    const channels = await Channel.find();
    res.json(channels);
  } catch (error) {
    next(error);
  }
};

// Get Channel By ID
exports.getChannelById = async (req, res, next) => {
  try {
    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json(channel);
  } catch (error) {
    next(error);
  }
};

// Update Channel
exports.updateChannel = async (req, res, next) => {
  try {
    const channel = await Channel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json(channel);
  } catch (error) {
    next(error);
  }
};

// Delete Channel
exports.deleteChannel = async (req, res, next) => {
  try {
    const channel = await Channel.findByIdAndDelete(req.params.id);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json({ message: 'Channel deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Update Channel Status
exports.updateChannelStatus = async (req, res, next) => {
  try {
    const { status, status_code, verified_at } = req.body;
    const channel = await Channel.findByIdAndUpdate(
      req.params.id,
      { status, status_code, verified_at: verified_at || new Date() },
      { new: true }
    );
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json(channel);
  } catch (error) {
    next(error);
  }
};