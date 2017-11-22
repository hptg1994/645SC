(function () {
	let checkerMethod = {
		check: function (str) {
			if (typeof str !== "string") throw "must provide a string";

			for (let i = 0, j = str.length() - 1; i <= j; i++, j--) {
				if (str.charAt(i) !== str.charAt(j))
	return false;
			}

			return true;
		}
	}

	var staticForm = document.getElementById("static-form");

	if (staticForm) {
		var inputStrElement = document.getElementById("inputText");

		var errorContainer = document.getElementById("error-container");
		var errorTextElement = document.getElementByClassName("text-goes-here")[0];

		var resultContainer = document.getElementById("text-container");
		var resultTextElement = document.getElementByClassName("text-goes-here")[0];

		staticForm.addEventListener("submit", function (event) {
			event.preventDefault();

			try {
				errorContainer.classList.add("hidden");
				resultContainer.classList.add("hidden");

				let inputStrValue = inputStrElement.value;

				var result = check(inputStrValue);
				if (result) {
					resultTextElement.textContent = inputStrValue + " is a palindrome!"
					var entry = document.createElement("li");
					entry.appendChild(document.createTextNode(inputStr));
					document.getElementById("palindromes").appendChild(entry);
				} else {
					resultTextElement.textContent = inputStrValue + " is not a palindrome."
				}
				resultContainer.classList.remove("hidden");
			} catch (e) {
				var message = typeof e === "string" ? e : e.message;
				errorContainer.textContent = message;
				errorContainer.classList.remove("hidden");
			}
		});
	}
})();
