const axios = require('axios');
exports.multiQuery = (queryArray) => {
  // The IGDB API will only accept a query for multiple games if formatted this way.
  return queryArray
    .map((game) => {
      return `"${game.name}"`;
    })
    .join(', ');
};
exports.sendRequest = async (query) => {
  if (typeof query !== 'object') {
    return console.log('The sendRequest function expects an object');
  }
  const data = await axios({
    url: `https://api.igdb.com/v4/${query.endpoint}`,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.IGDB_CLIENT_ID,
      Authorization: `Bearer ${process.env.IGDB_AUTH}`,
    },
    data: `${query.query} & platforms = (12, 49, 36, 6, 13); limit 50; sort name asc;`,
  });
  return data.data;
};
