const axios = require('axios');
const cheerio = require('cheerio');

exports.isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

exports.fetchTitleFromURL = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    return $('title').text() || 'Untitled';
  } catch {
    return 'Untitled';
  }
};
