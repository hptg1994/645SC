const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.RecipesAndComment;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((recipesCollections) => {
            return recipesCollections.find({}, {}).toArray();
        });
    },
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    getRecipesById(id) {
        return recipes().then((recipesCollections) => {
            return recipesCollections.findOne({
                _id: id
            }).then((recipes) => {
                if (!recipes) throw "Recipes not found";
                return recipes;
            });
        });
    },

    addRecipes(title, ingredients, steps, comment) {
        return recipes().then((recipesCollections) => {
            let newRecipes = {
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments: []
            };

            return recipesCollections.insertOne(newRecipes).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getRecipesById(newId);
            });
        });
    },

    removeRecipes(id) {
        return recipes().then((recipesCollections) => {
            return recipesCollections.removeOne({
                _id: id
            }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete recipes with id of ${id}`)
                }
            });
        });
    },

    updateRecipes(id, updateRecipes) {
        return this.getRecipesById(id).then((currentRecipes) => {
            let RecipesUpdateInfo = {
                title: updateRecipes.title,
                ingredients: updateRecipes.ingredients,
                steps: updateRecipes.steps
            };

            let updateCommand = {
                $set: RecipesUpdateInfo
            };

            return recipes().then((recipesCollections) => {
                return recipesCollections.updateOne({
                    _id: id
                }, updateCommand).then(() => {
                    return this.getRecipesById(id);
                });
            });
        });
    },
    // addCommentToRecipes(userId, postId, postTitle) {
    //     return this.getRecipesById(id).then((currentRecipes) => {

    //         return recipesCollections.updateOne({ _id: id }, {
    //             $addToSet: {
    //                 posts: {
    //                     id: postId,
    //                     title: postTitle
    //                 }
    //             }
    //         });
    //     });
    // },
    // removeCommentFromRecipes(userId, postId) {
    //     return this.getUserById(id).then((currentUser) => {
    //         return recipesCollections.updateOne({ _id: id }, {
    //             $pull: {
    //                 posts: {
    //                     id: postId
    //                 }
    //             }
    //         });
    //     });
    // }
}

module.exports = exportedMethods;