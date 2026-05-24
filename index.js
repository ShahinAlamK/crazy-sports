require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/api', eventRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));