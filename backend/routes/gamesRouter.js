const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

router.get('/leaving-soon', gamesController.getLeavingSoon);
router.get('/:id', gamesController.getGame);

router.get('/', gamesController.getAllGames);

module.exports = router;
