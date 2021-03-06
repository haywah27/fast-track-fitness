const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

mongoose.connection.on('error', (err) => 
  console.log(`error in mongoose conneciton: ${err.message}`)
);

mongoose.connection.once('open', () => {
  console.log('mongoose connected');
  app.listen(PORT, (err) => console.log(`App is running at: http://localhost/${PORT}`));
});
