const express = require('express');


const RecipeRouter = require('./Recipes/Recipe-router');

const server = express();


server.use(express.json());
server.use('/api/recipes', RecipeRouter);

module.exports = server;