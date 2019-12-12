exports.up = function(knex) {
  return knex.schema.createTable("recipe_instructions", tbl => {
    tbl.increments();

    tbl
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .index();

    tbl
      .integer("instruction_number")
      .notNullable()
      .index();
    tbl.string("instruction", 255).notNullable;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_instructions");
};
