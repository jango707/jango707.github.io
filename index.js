const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const items = require('./routes/api/items');

const app =  express();

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//db config
const db = require('./config/keys').mongoURI;

//warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
// connect to mongo
mongoose
    .connect(db)
    .then( () => console.log("MongoDB connected..."))
    .catch( err => console.log(err));

// use routes
app.use('/api/items', items);

//Serve static assests if in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'personalwebsite', 'build', 'index.html'));
  })
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));