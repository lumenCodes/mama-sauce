const express = require('express');
const path = require('path');
const route = require('./route')
const app = express();
const mongoose = require('mongoose');

const db = require("./models");


app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log (`Server started on port ${PORT}`))
