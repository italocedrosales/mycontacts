const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';

const app = express();

app.listen(PORT, () => {
  console.log(`🔥 Listening on ${HOST}:${PORT}`);
});
