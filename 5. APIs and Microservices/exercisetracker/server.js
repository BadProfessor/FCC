const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shortid = require('shortid');

const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const users = [];
const exercises = [];

const getUsernameById = (id) => users.find((user) => user._id === id).username;
const getExercisesFromUserWithId = (id) =>
  exercises.filter((log) => log._id === id);

app.post('/api/users', (req, res) => {
  const { username } = req.body;

  const newUser = {
    username,
    _id: shortid.generate(),
  };

  users.push(newUser);

  return res.json(newUser);
});

app.get('/api/users', (req, res) => {
  return res.json(users);
});

app.post('/api/users/:_id/exercises', (req, res) => {
  const { userId, description, duration, date } = req.body;

  const dateObj = date === '' ? new Date() : new Date(date);

  const newExercise = {
    _id: userId,
    description,
    duration: +duration,
    date: dateObj.toDateString(),
  };

  exercises.push(newExercise);

  res.json(newExercise);
});

app.get('/api/exercise/log', (req, res) => {
  const { userId } = req.query;

  const log = getExercisesFromUserWithId(userId);

  res.json({
    _id: userId,
    username: getUsernameById(userId),
    count: log.length,
    log,
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
