const express = require('express');
const router = express.Router();
const channel = require('../schema/channelSchema');



exports.createChannel = async (req, res) => {
  try {
    const channel = new channel(req.body);
    await channel.save();
    res.status(201).json(channel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllChannels = async (req, res) => {
  try {
    const channels = await channel.find();
    res.json(channels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getChannelById = async (req, res) => {
  try {
    const channel = await channel.findById(req.params.id);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json(channel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateChannel = async (req, res) => {
  try {
    const channel = await Channel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json(channel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteChannel = async (req, res) => {
  try {
    const channel = await Channel.findByIdAndDelete(req.params.id);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json({ message: 'Channel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};