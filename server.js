const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/html-routes')

const PORT = process.env.PORT || 3000;

// const db = require('./models');

const app = express();

app.use(logger('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populate', { useNewUrlParser: true });

app.use('/', routes);

app.listen(PORT, (err) => console.log(`App is running at: http://localhost/${PORT}`));
