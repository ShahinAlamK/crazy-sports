const express = require('express');
const router = express.Router();
const {
  getAllEvents,
  getEventById,
  getCategoryEvents,
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/events');

// Public Routes
router.get('/events', getAllEvents);
router.get('/events/:id', getEventById);
router.get('/categories', getCategoryEvents);

// Admin Routes
router.post('/events', createEvent);
router.put('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

module.exports = router;