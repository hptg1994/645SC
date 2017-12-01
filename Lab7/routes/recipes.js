const express = require("express");
const router = express.Router();
const data = require("../data/");
const recipeData = data.recipes;

router.get("/", (req, res) => {
	recipeData.getAllRecipes().then((recipes) => {
		// console.log(recipes);
		res.json(recipes);
	});
});

router.get("/:id", (req, res) => {
	recipeData.getRecipesById(req.params.id).then(recipe => {
		res.json(recipe);
	})
	.catch(err => {
		res.status(500).json({error: err});
	});
});

router.post("/", (req, res) => {
	let newRecipeBody = req.body;
	recipeData.addRecipes(newRecipeBody.title, newRecipeBody.ingredients, newRecipeBody.steps, [])
		.then((newRecipe) => {
			res.json(newRecipe);
		})
		.catch((err) => {
			res.status(500).json({error: err});
		});
});

router.put("/:id", (req, res) => {
	let updatedRecipeBody = req.body;
	recipeData.updateRecipes(req.params.id, updatedRecipeBody)
		.then((newRecipe) => {
			res.json(newRecipe);
		})
		.catch((err) => {
			res.status(500).json({error: err});
		});
});

router.delete("/:id", (req, res) => {
	recipeData.removeRecipes(req.params.id)
		.then((err) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			res.status(500).json({error: err});
		});
});

module.exports = router;
