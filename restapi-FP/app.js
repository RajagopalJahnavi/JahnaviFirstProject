let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors')
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 9870;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MongoUrl;
let db;
const host = "localhost";
const mongoose = require("mongoose");

app.get('/',(req, res)=>{
    res.send('Express server default')
})

app.get('/location',(req, res)=>{
    db.collection('location').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
      })
})

app.get('/mealType',(req, res)=>{
  db.collection('mealType').find().toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

app.get('/restaurants',(req, res)=>{
  db.collection('restaurants').find().toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//Connection with db
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(port, host, () => {
      console.log("Server Started");
    })
  )
  .catch((err) => console.log(err));