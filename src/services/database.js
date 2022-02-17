const mongoose = require('mongoose');

mongoose.connect('mongodb:localhost:27017/files', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});