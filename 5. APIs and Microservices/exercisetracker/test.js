const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shortid = require('shortid');

const cors = require('cors');

//const mongoose = require(‘mongoose')
//mongoose.connect 1(process.env.MLAB_URI || ‘mongodb://localhost/exercise-track' )

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

//User Stories

const users = [];
const exercises = [];

const getUsernameById = (id) => users.find((user) => user._id === id).username;
const getExercisesFromUserWithId = (id) =>
  exercises.filter((log) => log._id === id);

//I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and _id.
///api/exercise/new-user gives username and _id.

app.post('/api/users', (req, res) => {
  const { username } = req.body;

  const newUser = {
    username,
    _id: shortid.generate(),
  };

  users.push(newUser);

  return res.json(newUser);
});

//I can get an array of all users by getting api/exercise/users with the same info as when creating a user.
//api/exercise/users gives username and _id.
app.get('/api/exercise/users', (req, res) => {
  return res.json(users);
});

//I can add an exercise to any user by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. Returned will be the user object with also with the exercise fields added.
//api/exercise/add gives userId(_id), description, duration, and optionally date

app.post('/api/exercise/add', (req, res) => {
  const { userId, description, duration, date } = req.body;

  const dateObj = date === '' ? new Date() : new Date(date);

  const newExercise = {
    _id: userId,
    description,
    duration: +duration,
    date: dateObj.toString(),
    //username: getUsernameById(userId)
  };

  exercises.push(newExercise);

  res.json(newExercise);
});

//{username: "abc123abc",
// description:"test",
// duration:100,
// _id:"Hk90m8HHL",
// date:"Tue Mar 10 2020"}
//}});

//I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(_id). Return will be the user object with added array log and count (total exercise count).
///api/exercise/log gives parameter of userId(_id)

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

//{"_id":"VZIANgsIG","username":"florin","log":[{
//"_id":"VZIANgsIG",
//"description":"run",
//"duration":1,
//"dateObj":"Thu May 21 2020 14:45:34 GMT+0000 (UTC)"}]}

//I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)
//parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)

// Not found middleware
app.use((req, res, next) => {
  return next({ status: 404, message: 'not found' });
});

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage;

  if (err.errors) {
    // mongoose validation error
    errCode = 400; // bad request
    const keys = Object.keys(err.errors);
    // report the first validation error
    errMessage = err.errors[keys[0]].message;
  } else {
    // generic or custom error
    errCode = err.status || 500;
    errMessage = err.message || 'Internal Server Error';
  }
  res.status(errCode).type('txt').send(errMessage);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
