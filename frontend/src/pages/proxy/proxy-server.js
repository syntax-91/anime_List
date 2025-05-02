// server.js
import axios from 'axios'
import cors from 'cors'
import express from 'express'

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/popular', async (req, res) => {
  try {
    const response = await axios.get('https://gogoanime.dev/popular');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch from GogoAnime' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
