exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_instruction_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_instruction_ingredients").insert([
        {
          recipe_id: 1,
          instruction_number: 3,
          ingredient_id: 1,
          quantity: "1 tsp"
        },
        {
          recipe_id: 1,
          instruction_number: 5,
          ingredient_id: 2,
          quantity: "pinch"
        },
        {
          recipe_id: 1,
          instruction_number: 5,
          ingredient_id: 3,
          quantity: "pinch"
        }
      ]);
    });
};
