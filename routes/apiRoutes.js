var db = require("../models");

module.exports = function (app) {
  // Get all Favorite Recipes by UserId
  // Need to define recipeFavs, use a descriptive endpoint

  app.get("/api/favorites/:id", function (req, res) {
    db.Favorite.findAll({}).then(function (recipeFavs) {

      res.json(recipeFavs);
    });
  });

  // Add a favorite Recipe
  app.post("/api/favorites", function (req, res) {

    db.Favorite.create(req.body).then(function (recipeFavs) {

      res.json(recipeFavs);
    });
  });

  // Delete Food by recipeID
  app.delete("/api/favorites", function (req, res) {

    db.Favorite.destroy({ where: { id: req.params.body } }).then(function (recipeFavs) {

      res.json(recipeFavs);
    });
  });

  // app.get("/search/:search", function (req, res) {
  //   unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=2&ingredients=" + req.params.search)
  //     .header("X-RapidAPI-Key", "0dLFzw4TjNmshzQG9xezksktSXbEp1QtQtdjsnAd8FlOiv9etx")
  //     .end(function (result) {
  //       res.send(result);
  //     });
  // });
};


