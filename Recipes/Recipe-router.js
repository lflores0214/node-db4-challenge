const express = require("express");

const recipe = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  recipe
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error retrieving recipes"
      });
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  const { id } = req.params;

  recipe
    .getShoppingList(id)
    .then(list => {
      if (list.length) {
        res.json(list);
      } else {
        res.status(404).json({
          message: "could not find shopping list for given recipe"
        });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error retrieving shopping list"
      });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  recipe
    .getInstructions(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({
          message: "could not find instructions for given recipe"
        });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error retrieving instructions"
      });
    });
});

module.exports = router;
