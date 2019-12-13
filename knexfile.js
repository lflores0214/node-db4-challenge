// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true, // only needed when using SQLite3
    connection: {
      filename: "./data/recipes.db3"
    },
    migrations: {
      directory: "./data/migrations" // will be crated automatically
    },
    seeds: {
      directory: "./data/seeds" // also created automatically
    }
  }
};
