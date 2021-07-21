let express = require('express');
let app = express();
let bodyParser = require('body-parser');

console.log('Hello World');

// app.get('/', ( res) => {
//   res.send('Hello Express');
// });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

// app.get("/json", (req, res) => {
//   res.json({
//     message: "Hello json"
//   });
// });

app.get('/json', (req, res) => {
  const myObject = { message: 'Hello json' };

  if (process.env.MESSAGE_STYLE === 'uppercase') {
    myObject.message = myObject.message.toUpperCase();
  }
  res.json(myObject);
});

app.use(function middleware(req, res, next) {
  let string = req.method + ' ' + req.path + ' - ' + req.ip;
  console.log(string);
  next();
});

const timeMiddleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get('/now', timeMiddleware, (req, res) => {
  res.send({
    time: req.time,
  });
});

app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word,
  });
});

app.get('/name', function (req, res) {
  let firstName = req.query.first;
  let lastName = req.query.last;

  res.json({
    name: `${firstName} ${lastName}`,
  });
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.post('/name', function (req, res) {
  let string = req.body.first + ' ' + req.body.last;
  res.json({
    name: string,
  });
});

module.exports = app;
