const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
    'mongodb+srv://maylson:moraes@cluster0.t8qjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    )
.then(()=> {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err)=> console.log(err))