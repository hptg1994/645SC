const express = require('express');
const router = express.Router();
const data = require("../DATA");
const postData = data.posts;

router.get("/:id",(request,result) => {
    postData.getPostById(request.params.id).then((post) =>{
        result.json(post);
    }).catch((error) => {
        result.status(404).json({message : "Post not found"});
    });
});


router.get("/",(request,result) => {
    postData.getAllPosts().then((postList) => {
        result.json(postList);
    }).catch((error) => {
        result.status(500).send();
    });
});

router.post("/",(request,result) => {
    result.status(501).send();
});

module.exports = router;