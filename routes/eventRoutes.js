const express = require('express');
const router = express.Router();
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  addChannel,
  removeChannel
} = require('../controllers/eventsController');

router.post('/', createEvent);
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.post('/:id/channels', addChannel);
router.delete('/:id/channels/:link', removeChannel);

module.exports = router;