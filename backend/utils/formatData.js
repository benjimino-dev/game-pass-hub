const removeDuplicateObj = require('../utils/removeDuplicateObj');
exports.wordLimiter = (text, limit) => {
  // This function will find the last word that ends with either a fullstop or a speechmark within the limit, and will remove any text after that point.

  const wordsArr = text.split(' ');

  if (wordsArr.length > limit) {
    const fullStops = ['!', '.', '?', '"']; // An array of valid full stop punctuation to check against.
    let endWordIndex;
    for (var i = 0; i < limit + 1; i++) {
      if (fullStops.includes(wordsArr[i][wordsArr[i].length - 1])) {
        // Checks if the last character in the word is a valid full stop.

        endWordIndex = i;
        // If the last character is a full stop or speechmark, keep track of the index in the endWordIndex variable.
      }
    }
    const newArr = wordsArr.slice(0, endWordIndex + 1); // Takes all words up to the last word with a full stop and assigns to newArr.
    return newArr.join(' ');
  } else {
    return text; // If the text is alrady under the limit, simply return the text.
  }
};

exports.formatRating = (rating) => {
  // Ratings returned from IGDB are out of 100. I divide by 10 in order to get an 'out of 10' value.
  return Math.round(rating) / 10;
};
exports.transformIgdbData = (data) => {
  // This function takes the data from the IGDB API and restructures it in our preferred way.
  return removeDuplicateObj(data, 'name').map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      coverImage: elem.cover ? elem.cover.image_id : 'No Cover Image',
      themes: elem.themes ? elem.themes.map((theme) => theme.name) : null,
      rating: elem.rating ? this.formatRating(elem.rating) : 'N/A',
      genres: elem.genres ? elem.genres.map((genre) => genre.name) : null,
      summary: elem.summary
        ? this.wordLimiter(elem.summary, 50)
        : 'No Summary Available',
      video: elem.videos ? elem.videos[0].video_id : null,
      screenshots: elem.screenshots ? elem.screenshots : null,
      playerPerspectives: elem.player_perspectives
        ? elem.player_perspectives.map((perspective) => perspective.name)
        : null,
    };
  });
};
