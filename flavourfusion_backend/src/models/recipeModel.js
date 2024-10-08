const mongoose = require("mongoose");


const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  imagePath: { type: String, required: true },
  category: { type: String, required: true },
  prepTime: { type: String, required: true },
  instructions: { type: [String], required: true },
  cuisine: { type: String, required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
