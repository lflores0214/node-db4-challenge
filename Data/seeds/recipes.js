
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: "Baked Potato", recipe_description: "Baked Potato in the oven"},
        {recipe_name: "Roasted Veggies", recipe_description: "Roasted Veggies in the oven"},
        {recipe_name: "Cheese Pizza", recipe_description: "Classic Cheese Pizza"}
      ]);
    });
};
