import RecipeModel from "../../models/Recipe/recipeModel.js";

const recipeModel = new RecipeModel();

// Get all recipes
export async function getAllRecipes(req, res) {
  try {
    const recipes = await recipeModel.getAllRecipes();
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Error fetching recipes", error });
  }
}
