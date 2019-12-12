const express = require('express');
const helmet = require('helmet')

const RecipeRouter = require('./Recipes/Recipe-router');

const server = express();

server.use(express.json());
server.use(helmet())
server.use('/api/recipes', RecipeRouter);

module.exports = server;