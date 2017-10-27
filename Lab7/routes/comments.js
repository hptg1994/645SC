const express = require("express");
const router = express.Router();
const data = require("../data");
const commentData = data.comments;

router.get("/recipe/:recipeId", (req, res) => {
	commentData.getCommentByRecipesId(req.params.recipeId).then((comment) => {
		res.json(comment);
	})
	.catch(err => {
		res.status(500).json({error: err});
	});
});

router.get("/:commentId", (req, res) => {
	commentData.getCommentByCommentId(req.params.commentId).then((comment) => {
		res.json(comment);
	})
	.catch(err => {
		res.status(500).json({error: err});
	});
});

router.post("/:recipeId", (req, res) => {
	commentData.addComment(req.params.recipeId, req.body.poster, req.body.comment).then(comment => {
		res.json(comment);
	})
	.catch(err => {
		res.status(500).json({error: err});
	});
});

router.put("/:recipeId/:commentId", (req, res) => {
	commentData.updateComment(req.params.recipeId, {
			id: req.params.commentId,
			poster: req.body.poster,
			comment: req.body.comment
		})
	.then(updatedComments => {
		res.status(200).json(updatedComments);
	})
	.catch(err => {
		res.status(500).json({error: err});
	});
});

router.delete("/:commentId", (req, res) => {
	commentData.removeComment(req.params.commentId)
	.then(() => {
		res.sendStatus(200);
	})
	.catch(err => {
		res.status(500).json({error: err});
	});
});

module.exports = router;
