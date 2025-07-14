const Bookmark = require('../models/Bookmark');
const { isValidURL, fetchTitleFromURL } = require('../utils/helpers');

// POST /api/bookmarks
exports.createBookmark = async (req, res) => {
  try {
    let { url, title, description, tags } = req.body;

    if (!url || !isValidURL(url)) return res.status(400).json({ error: 'Valid URL is required.' });
    if (!title) title = await fetchTitleFromURL(url);

    const bookmark = await Bookmark.create({ url, title, description, tags });
    res.status(201).json(bookmark);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/bookmarks?q=searchTerm&tags=tag1,tag2
exports.getBookmarks = async (req, res) => {
  const { q, tags } = req.query;
  let filter = {};

  if (q) {
    filter.$or = [
      { title: { $regex: q, $options: 'i' } },
      { description: { $regex: q, $options: 'i' } }
    ];
  }

  if (tags) {
    filter.tags = { $in: tags.split(',') };
  }

  try {
    const bookmarks = await Bookmark.find(filter).sort({ createdAt: -1 });
    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/bookmarks/:id
exports.getBookmarkById = async (req, res) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);
    if (!bookmark) return res.status(404).json({ error: 'Bookmark not found' });
    res.json(bookmark);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/bookmarks/:id
exports.updateBookmark = async (req, res) => {
  try {
    const updated = await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Bookmark not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/bookmarks/:id
exports.deleteBookmark = async (req, res) => {
  try {
    const deleted = await Bookmark.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Bookmark not found' });
    res.json({ message: 'Bookmark deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
