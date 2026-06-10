require('dotenv').config(); // ← এটা সবার উপরে থাকতে হবে

const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');
const errorHandler = require('./middleware/errorHandler');
const channelRoutes = require('./routes/channelRoute');
const appConfigRoutes = require('./routes/configRoute'); 

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/channels', channelRoutes);
app.use('/api/config', appConfigRoutes);

// Error Handler
app.use(errorHandler);

// MongoDB Connect
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected ✅');
    app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
  })
  .catch(err => console.error('MongoDB connection error:', err));