require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('dns');
const bodyParser = require('body-parser');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const links = [];
let id = 0;

// Your first API endpoint
// https://www.freecodecamp.org
app.post('/api/shorturl/', (req, res) => {
  let { url } = req.body;
  const noHTTPSurl = url.replace(/^https?:\/\/.+\/?/, '');

  dns.lookup(noHTTPSurl, (err) => {
    if (err) {
      return res.json({
        error: 'invalid URL',
      });
    } else {
      id++;
      const link = {
        original_url: url,
        short_url: `${id}`,
      };

      links.push(link);
      return res.json(link);
    }
  });
});

app.get('/api/shorturl/:id', (req, res) => {
  const { id } = req.params;
  const link = links.find((l) => l.short_url === id);

  if (link) {
    return res.redirect(link.original_url);
  } else {
    return res.json({
      error: 'No short url',
    });
  }
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
