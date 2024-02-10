const express =require('express');
const db= require('./config/database.js');
const passport=require('passport');
const passportStrategy=require('./config/paassport.js');


const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/",require('./routes/router.js'));


const port=8000;



app.listen(port, function (err) {
  if (err) {
    console.log("Error Running the Server", err);
  }
  else
  console.log("Server Running on Port: ", port);
});