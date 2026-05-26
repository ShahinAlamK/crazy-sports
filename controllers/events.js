const express = require('express');
const Event = require('../schema/eventSchema');
const Social = require('../schema/socialSchema');
const router = express.Router();

// GET all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    const social = await Social.findOne();
    res.json({
      Authors: "Crazy Sports",
      social,
      totalEvents: events.length,
      LastUpdate: new Date(),
      events
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single event by id
const getEventById = async (req, res) => {
  try {
    const event = await Event.findOne({ id: req.params.id });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET events by category
const getCategoryEvents = async (req, res) => {
  try {
    const events = await Event.find({ category: req.params.category });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create event
const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update event
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE event
const deleteEvent = async (req, res) => {
  try {
    await Event.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  getCategoryEvents,
  createEvent,
  updateEvent,
  deleteEvent
};