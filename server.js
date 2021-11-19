const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const PORT = 5000;
const { MONGOURI } = require('./key');

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.once('connected', () => {
    console.log('Connected to Mongo database!');
});

db.on('Error - failed to connect', (error) => {
    console.log(`Failure to connect to database ${error}`);
});

require('./model/user');
require('./model/post');
require('./model/prayerRequest')

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/prayerRequest'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(PORT,() => {
    console.log(`Calling at port ${PORT}`);
});
