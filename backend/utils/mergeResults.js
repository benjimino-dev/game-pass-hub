const mergeResults = (igdbData, gamehubData) => {
  // Merges the results of the IGDB API and the matching document in the Game Pass Hub Database into one object to be returned from our API.
  const result = igdbData.map((igdbGameObj) => {
    const sameGame = gamehubData.find((gamehubObj) => {
      return gamehubObj.name === igdbGameObj.name;
    });

    return {
      ...igdbGameObj,
      ...sameGame._doc,
    };
  });

  return result;
};

module.exports = mergeResults;
