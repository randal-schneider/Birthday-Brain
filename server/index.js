const express = require('express');
const path = require('path');
const cors = require('cors');

const Family = require('../database/family.js');
const Friend = require('../database/friend.js');
const Coworker = require('../database/coworker.js');
const Login = require('../database/login.js');

const PORT = 3000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.post('/login', (req, res) => {
//   let username = { username: req.body.username };
//   Login.findOne(username, (err,result) => {
//     console.log(result);
//     if(err) {
//       res.status(400).send();
//     }
//     if (!result || result.length === 0) {
//       Login.create(req.body, (err, results) => {
//         if (err) res.status(400).send();
//         res.status(200).send(results);
//       });
//         } else {
//           res.status(200).send("User Already Exists");
//      }
//   });
// });

app.post('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.get('/family', (req, res) => {
  Family.find({}, (err, result) => {
    if(err) res.status(400).send();
    res.status(200).send(result);
  });
});

app.get('/friend', (req, res) => {
  Friend.find({}, (err, result) => {
    if(err) res.status(400).send();
    res.status(200).send(result);
  });
});

app.get('/coworker', (req, res) => {
  Coworker.find({}, (err, result) => {
    if(err) res.status(400).send();
    res.status(200).send(result);
  });
});

app.post('/family', (req, res) => {
  Family.create(req.body, (err, result) => {
    if (err) res.status(400).send();
    res.sendStatus(200);
  });
});

app.post('/friend', (req, res) => {
  Friend.create(req.body, (err, result) => {
    if (err) res.status(400).send();
    res.sendStatus(200);
  });
});

app.post('/coworker', (req, res) => {
  Coworker.create(req.body, (err, result) => {
    if (err) res.status(400).send();
    res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`Server is Up on localhost:${PORT}`);
})