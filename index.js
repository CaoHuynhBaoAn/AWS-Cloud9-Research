require('dotenv/config')

const app = require('./config/custom-express');

const HOST = process.env.HOST || '192.168.1.13';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is on at http://${HOST}:${PORT}`));
