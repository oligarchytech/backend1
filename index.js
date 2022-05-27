const express = require('express');
const app = express();
const PORT = 443;
const https = require('https');
const fs = require('fs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/backend1.oligarchy.io/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/backend1.oligarchy.io/fullchain.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/backend1.oligarchy.io/chain.pem')
}, app);


httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});



