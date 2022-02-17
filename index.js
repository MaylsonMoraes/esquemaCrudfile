const express = require('express');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const app = express();

const routes = require('./src/routes/file.routes');

app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, () => {
    console.log('Server ON');
});