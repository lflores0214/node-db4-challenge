const db = require("../Data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  findById,
  getInstructions,
};

function findById(id) {
  return db("recipes")
    .where({ id })
    .first();
}
function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipe_instruction_ingredients as rii")
    .join("ingredients", "rii.ingredient_id", "ingredients.id")
    .join("recipes", "rii.recipe_id", "recipes.id")
    .select("recipes.recipe_name", "ingredients.ingredient", "rii.quantity")
    .orderBy("rii.instruction_number")
    .where("recipes.id", id);
}

function getInstructions(id){
    return db("recipe_instructions as instructions")
    .join("recipes", "instructions.recipe_id", "recipes.id")
    .select("recipes.recipe_name", "instructions.instruction_number", "instructions.instruction")
    .orderBy("instructions.instruction_number")
    .where("recipes.id", id)
}
