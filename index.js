require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const connectionStr = process.env.DATABASE_URL;

mongoose.connect(connectionStr);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
})

db.once('connected', () => {
    console.log('Database connected');
})

const routes = require('./routes/routes');
app.use('/api', routes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
})