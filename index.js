require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
const channelRoutes = require('./routes/channelRoute');


const app = express();
app.use(express.json());

connectDB();

app.use('/api', eventRoutes);
app.use('/api', channelRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Event Management API');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));