const express = require('express');
const cors = require('cors');
const notesRoutes = require('./routes/notes');
const bookmarksRoutes = require('./routes/bookmarks');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRoutes);
app.use('/api/bookmarks', bookmarksRoutes);

module.exports = app;