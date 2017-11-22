const express = require("express");
const router = express.Router();
const algorithms = require("../algorithms");
const palindromeChecker = algorithms.palindrome;

var palindromes = [];
var notPalindrome = [];

router.get("/", (req, res) => {
	res.render("checker/server", {});
});

router.post("/", (req, res) => {
	let inputStr = req.body.inputText;
	let result;

	try {
		if (palindromeChecker.check(inputStr)) {
			palindromes.push(inputStr)
			res.render("checker/server", {
				input: inputStr,
				result: "It is a palindrome!",
				palindromes: palindromes,
				notPalindrome: notPalindrome
			});
		} else {
			notPalindrome.push(inputStr);
			res.render("checker/server", {
				input: inputStr,
				result: "It is not a palindromde.",
				palindromes: palindromes,
				notPalindrome: notPalindrome
			});
		}

	}
	catch(e) {
		console.log(e);
		res.render("checker/server", {
			input: inputStr,
			error: (typeof e === "string" ? e : e.message),
			palindromes: palindromes,
			notPalindrome: notPalindrome
		});
	}
});

module.exports = router;
