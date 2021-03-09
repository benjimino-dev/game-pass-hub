const IGDB = require('../utils/IGDB/IGDB');
const catchAsync = require('../utils/catchAsync');
const formatData = require('../utils/formatData');
const mergeResults = require('../utils/mergeResults');
const AppError = require('../utils/appError');
const Game = require('../models/gameModel');

exports.getLeavingSoon = catchAsync(async (req, res, next) => {
  // Gets an array of all games that will be leaving Game Pass.
  const gamesLeavingSoon = await Game.find({ dateLeaving: { $ne: null } });

  if (!gamesLeavingSoon) {
    const err = new AppError(404, 'Cannot find Games Leaving Soon');
    return next(err);
  }

  const igdbData = formatData.transformIgdbData(
    await IGDB.sendRequest({
      endpoint: 'games',
      query: `fields name, rating, cover.image_id, themes.name; where name = (${IGDB.multiQuery(
        gamesLeavingSoon
      )})`,
    })
  );

  const result = mergeResults(igdbData, gamesLeavingSoon);

  res.status(200).json({
    status: 'success',
    games: {
      docs: result,
    },
  });
});
exports.getAllGames = catchAsync(async (req, res, next) => {
  const options = {
    sort: { name: 1 },
    page: req.query.page || 1,
    limit: 10,
    collation: {
      locale: 'en',
    },
  };
  const allGames = await Game.paginate({}, options);
  if (!allGames) {
    const err = new AppError(404, 'No Games Found');
    return next(err);
  }
  const igdbData = formatData.transformIgdbData(
    await IGDB.sendRequest({
      endpoint: 'games',
      query: `fields name, rating, cover.image_id, themes.name; where name = (${IGDB.multiQuery(
        allGames.docs
      )})`,
    })
  );
  allGames.docs = mergeResults(igdbData, allGames.docs);

  res.status(200).json({
    status: 'success',
    games: allGames,
  });
});

exports.getGame = catchAsync(async (req, res, next) => {
  // Get info from IGDB on a specific game via the id.
  const igdbData = formatData.transformIgdbData(
    await IGDB.sendRequest({
      endpoint: 'games',
      query: `fields name, cover.image_id, themes.name, rating, genres.name, summary, videos.video_id, screenshots.image_id, player_perspectives.name; where id = ${req.params.id}`,
    })
  );

  // Find the same game in the game pass hub database.
  const gamepasshubGame = await Game.find({ name: igdbData[0].name });

  if (gamepasshubGame.length === 0) {
    // Return a failure if the Game is not currently on our database.
    const err = new AppError(404, 'Game not found');
    return next(err);
  }
  const result = mergeResults(igdbData, gamepasshubGame);

  res.status(200).json({
    status: 'success',
    game: result[0],
  });
});
