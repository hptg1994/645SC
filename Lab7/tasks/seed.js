const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const recipeData = data.recipes;
const commentData = data.comments;

dbConnection()
	.then((db) => {
		return db.dropDatabase().then(() => {
				return dbConnection;
			})
			.then(db => {
				return recipeData.addRecipes(
					"Fried eggs", [{
							name: "eggs",
							amount: "2 eggs"
						},
						{
							name: "Olive Oil",
							amount: "2 tbsp"
						}
					], [
						"First, heat a non-stick pan on medium-high until hot",
						"Add the oil to the pan and allow oil to warm; it is ready the oil immediately sizzles upon contact with a drop of water.",
						"Crack the egg and place the egg and yolk in a small prep bowl; do not crack the yolk!",
						"Gently pour the egg from the bowl onto the oil",
						"Wait for egg white to turn bubbly and completely opaque (approx 2 min)",
						"Using a spatula, flip the egg onto its uncooked side until it is completely cooked (approx 2 min)",
						"Remove from oil and plate",
						"Repeat for second egg"
					], []);
			})
			.then((newRecipe) => {
				return commentData.addComment(newRecipe._id, "Jennifer", "These eggs are delicious!");
			})
			.then(() => {
				console.log("done with seeding");
				db.close();
			});
	})
	.catch(error => {
		console.log(error);
	});