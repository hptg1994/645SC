const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.RecipesAndComment;
const uuid = require('node-uuid');

let exportedMethods = {
    getCommentByCommentId(id) {
        return comments().then((commentCollection) => {
            return commentCollection
                .findOne({
                    comments:{
                        $elemMatch:{_id:id}
                    }
                });
        }).then(recipe => {
            let comment = recipe.comments.find(comment => {
                return comment._id == id
            });
            return {
                _id:id,
                recipeId : recipe._id,
                recipeTitle : recipe.title,
                poster:comment.poster,
                comment:comment.comment
            }
        }).catch((error) => {
            throw "Can't not find this comment";
        })
    },

    getCommentByRecipesId(id){
        return comments().then((commentCollection) => {
            return commentCollection.findOne({_id:id}).then((recipe) => {
                let comment = recipe.comments;
                let showingComment = [];
                for(let i = 0;i< comment.length;i++){
                    showingComment.push({
                        _id : comment[i]._id,
                        recipeId : id,
                        recipeTitle : recipe.title,
                        poster:comment[i].poster,
                        comment:comment[i].comment
                    });
                }
                return showingComment;
            }).catch((error) => {
                throw "Can't get this comment from recipes";
            })
        })
    },
    addComment(recipeId, poster, commentDetail) {
        return comments().then((commentCollection) => {
            let newComment = {
                _id: uuid.v4(),
                poster: poster,
                comment: commentDetail
            };

            return commentCollection.updateOne({
                _id: recipeId
            }, {
                $addToSet: {
                    comments: newComment
                }
            }).then((result) => {
                return newComment;
            }).catch((error) => {
                throw "No recipes found"
            });
        });
    },
    removeComment(id) {
        return comments().then((commentCollection) => {
            return commentCollection.update({}, {
                    $pull: {
                        comments: {
                            _id: id
                        }
                    }
                },
                false,
                true
            ).then(() => {}).catch((error => {
                throw "Can't remove this Comment"
            }));

        });
    },

    updateComment(id, updateCommentInfo) {

        return comments().then((commentsCollection) => {
            if (updateCommentInfo.poster) {
                return commentCollection.update({
                            _id: id,
                            "comments,_id": updateCommentInfo.id
                        }, {
                            $set: {
                                "comments.$.poster": updateCommentInfo.poster
                            }
                        },
                        false,
                        true)
                    .then((updateInfo) => {
                        if (updateCommentInfo.comment) {
                            return commentsCollection.update({
                                _id: id,
                                "comments._id": updateCommentInfo.id
                            }, {
                                $set: {
                                    "comments.$.comment": updateCommentInfo.comment
                                }
                            }, false, true);
                        }
                    })
            } else if (updateCommentInfo.comment) {
                return commentsCollection.update({
                    _id: id,
                    "comments._id": updateCommentInfo.id
                }, {
                    $set: {
                        "comments.$.comment": updateCommentInfo.comment
                    }
                }, false, true);
            }
        }).then((updateInfo) => {
            return this.getCommentById(updateCommentInfo.id);
        }).catch(error => {
            throw "Unable to update this comment"
        })

    },
}

module.exports = exportedMethods;