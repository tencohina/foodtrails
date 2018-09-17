const express = require('express');
const app = express();
const mongoose = require('mongoose');


const keys = require('../config/keys');


const db = mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
.then(console.log('Connected to MongoDB.'))
.catch(error => console.log(error));