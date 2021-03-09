const removeDuplicateObj = (arr, key) => {
  // There may be occasions where the IGDB API returns multiple copies of the same game from its API. This function will remove any duplicate objects, leaving us with unique games.
  let newArray = [];
  let uniqueObject = {};
  let uniqueKey;
  for (let i in arr) {
    uniqueKey = arr[i][key];
    uniqueObject[uniqueKey] = arr[i];
  }

  for (i in uniqueObject) {
    newArray.push(uniqueObject[i]);
  }
  return newArray;
};

module.exports = removeDuplicateObj;
