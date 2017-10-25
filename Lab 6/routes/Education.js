const express = require("express");
const router = express.Router();

let Eduction = [{
        "schoolName": "Stevens Institute of Technology",
        "degree": "Master of Sicence in Computer Science",
        "favouriteClass": "Web Programming(CS546)",
        "favouriteMemory": "When CS546 TA grade 100 for my Lab work"
    },
    {
        "schoolName": "M78 Nebula Lighting University",
        "degree": "Bachelor of Science in Defending",
        "favouriteClass": "Using Death Bean",
        "favouriteMemory": "First Time Beat the Monster"
    }
];

router.get("/",(request,result) => {
    result.json(Eduction);
});

module.exports = router;





// [
//     {
//       "schoolName": "First School Name",
//       "degree": "First School Degree",
//       "favoriteClass": "Favorite class in school",
//       "favoriteMemory": "A memorable memory from your time in that school"
//     },
//     {
//       "schoolName": "Second School Name",
//       "degree": "Second School Degree",
//       "favoriteClass": "Favorite class in school",
//       "favoriteMemory": "A memorable memory from your time in that school"
//     }
// ]