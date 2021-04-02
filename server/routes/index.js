const express = require('express');
const notes = require('./notesRouter');

const app = express();

app.use(notes)

module.exports = app;