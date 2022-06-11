const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/task', taskRoutes);
dotenv.config();

mongoose.connect(process.env.DB_URI, () => console.log('Mongodb connected'));
const server = http.createServer(app);
const PORT = 3001;
server.listen(PORT, () => console.log('Server is listening on PORT: ' + PORT));
