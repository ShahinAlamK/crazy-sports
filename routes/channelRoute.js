const express = require('express');
const router = express.Router();
const {
  createChannel,
  getAllChannels,
  getChannelById,
  updateChannel,
  deleteChannel,
  updateChannelStatus
} = require('../controllers/channelController');

router.post('/', createChannel);
router.get('/', getAllChannels);
router.get('/:id', getChannelById);
router.put('/:id', updateChannel);
router.delete('/:id', deleteChannel);
router.patch('/:id/status', updateChannelStatus);

module.exports = router;