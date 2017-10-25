const express = require('express');
const router = express.Router();
const data = require("../DATA/index");
const userData = data.users;


router.get("/:id",(req,res) => {
    userData.getUserById(req.params.id).then((user) => {
        res.json(user);
    },(error) => {
        res.status(404).json({message :" not found!"});
    });
});

/*Upon testing this way 
 router.get("/:id").then((request) =>{
    userData.getUserById(request.params.id).then((user) => {
        res.json(user);
    }).catch((error) =>{
        res.status(404).json({message:"not found!"});
    })
}) 
*/

router.post("/",(request,result) => {
    result.status(501).send();
});

module.exports = router;