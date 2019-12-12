exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_instructions").insert([
        {
          recipe_id: 1,
          instruction_number: 1,
          instruction: "preheat oven to 350 degrees farenheight"
        },
        {
          recipe_id: 1,
          instruction_number: 2,
          instruction: "poke holes in potato with fork "
        },
        {
          recipe_id: 1,
          instruction_number: 3,
          instruction: "brush potato with oil"
        },
        {
          recipe_id: 1,
          instruction_number: 4,
          instruction: "wrap potato in foil and place in oven for 90 minutes"
        },
        {
          recipe_id: 1,
          instruction_number: 5,
          instruction:
            "take potato out of the oven, unwrap, season with salt and pepper, and top with your favorite toppings"
        }
      ]);
    });
};
