const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.get('/game_of_life', (req,res) => {
  res.sendFile(path.join(__dirname,'/public/game_of_life/index.html'));
});

app.get('/kaleidoscope', (req,res) => {
  res.sendFile(path.join(__dirname,'/public/kaleidoscope/index.html'));
});

app.listen(port, () => console.log(`listening at port ${port}`));

