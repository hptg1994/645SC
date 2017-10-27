const express = require('express');
const router = express.Router();

let Biography = {
    "name" : "Pintaigao He",
    "biography" : "Pintaigao He,was an Chinese aviation pioneer. A Reserve officer in the China Empior Army Air Corps, He was recalled to active duty during War. He was awarded the Medal of Honor for personal valor and leadership as commander of the Pintaigao Raid, a bold long-range retaliatory air raid on the Unknown main islands. \\n Four months after the Attack on MainIsland of China. He was eventually promoted to lieutenant general and commanded the Twelfth Air Force over North Korean,the Fifteenth Air Force over the Mediterranean, and the Eighth Air Force over Russia.",
    "favoriteShows":["Western Word","The BigBand Theory","The last day on Earth","Walking death"],
    "hobbies" : ["Coding CS546 Lab","Playing computer game","Fall Asleep"]
};

router.get("/",(request,result) =>{
    result.json(Biography);
});


module.exports = router;


/* {
    "name": "Your Name",
    "biography": "2 biography paragraphs separated by a new line character.",
    "favoriteShows": ["array", "of", "favorite", "shows"],
    "hobbies": ["array", "of", "hobbies"]
  } */