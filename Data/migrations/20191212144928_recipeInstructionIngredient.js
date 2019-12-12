exports.up = function(knex) {
  return knex.schema.createTable("recipe_instruction_ingredients", tbl => {
    tbl.primary(["recipe_id", "instruction_number", "ingredient_id"]);

    tbl
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .notNullable();
    tbl
      .integer("instruction_number")
      .references("instruction_number")
      .inTable("recipe_instructions")
      .notNullable();
    tbl
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .notNullable();

    tbl.string("quantity", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_instruction_ingredients");
};
