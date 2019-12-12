exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments();

    tbl
      .string("recipe_name", 255)
      .notNullable()
      .unique()
      .index();

    tbl.string("recipe_description", 255).notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipes")
};