const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const db=mongoose.connection;

db.error('error',console.error.bind(console,'error in connection mongodb'));

db.once('open',()=>{
    console.log('db connected');
})

module.exports=db;
