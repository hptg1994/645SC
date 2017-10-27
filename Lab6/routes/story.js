const express = require("express");
const router = express.Router();

let Story = {
    "StoryTitle" : "That time I rapidly attach Unknow Country",
    "story" : "After training at Chinese Royal Air Force,Me and volunteer flight crews proceeded to the Chinese only aircraft carrier. My team drived 16 Boom-5 and took off from the Hornet, reached Unknown Territory, and bombed their targets. Fifteen of the planes then headed for their recovery airfield in China, while one crew chose to land in Russia due to their bomber's unusually high fuel consumption.They had been flying for about 12 hours, it was nighttime, the weather was stormy, and I couldn't locate the landing field. So I came down in a rice paddy near Chuchow (Quzhou). He and his crew linked up after the bailout and were helped through terrorist lines by friendly guerrillas. Other aircrews were not so fortunate, although most eventually reached safety with the help of friendly Chinese. Seven crew members lost their lives, four as a result of being captured by terrorists and three due to an aircraft crash or while parachuting."
};


router.get("/",(request,result) => {
    result.json(Story);
});


module.exports = router;






// {
//     "storyTitle": "Story Title",
//     "story": "Your story"
//   }