const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const gameSchema = new mongoose.Schema({
  name: String,
  dateAdded: String,
  dateLeaving: String,
  timeToBeat: String,
});

gameSchema.plugin(mongoosePaginate);
const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
