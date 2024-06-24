//require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;



// Use CORS middleware to allow requests from any origin
app.use(cors());

app.get('/', (req, res) => {
  res.send('server is running')
});

app.get('/date', (req, res) => {
  const currentDate = new Date().toLocaleDateString();
  res.json({ date: currentDate });
});

app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
