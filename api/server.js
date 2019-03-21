const express = require('express');
const cors = require('cors');
const fileDb = require('./fileDb');
const board = require('./app/board');

const app = express();
const port = 8000;
fileDb.init();

app.use(express.json());
app.use(cors());
app.use('/board', board);

app.listen(port, () => {
    console.log(`Server started on ${port} port`);
});
