const express = require('express');
const router = express.Router();
const channelController = require('../controllers/channelController');

// Public Routes
router.get('/channels', channelController.getAllChannels);
router.get('/channels/:id', channelController.getChannelById);

// Admin Routes
router.post('/channels', channelController.createChannel);
router.put('/channels/:id', channelController.updateChannel);
router.delete('/channels/:id', channelController.deleteChannel);

module.exports = router;