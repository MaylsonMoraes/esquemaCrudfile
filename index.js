const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const app = express();

const fileRoutes = require('./src/routes/file.routes');
const userRoutes = require('./src/routes/user.routes');

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


app.use('/', fileRoutes);
app.use('/usuario', userRoutes); //https://localhost:3000/usuario/login

app.listen(3000, () => {
    console.log('Server ON');
});