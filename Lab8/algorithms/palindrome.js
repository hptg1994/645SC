let exportMethods = {
	check(str) {
		if (typeof str !== "string" || str === null) throw "must provide a string";
		str = str.toLowerCase();
		str = str.replace(/[^\w]/g, "");
		if (str.length === 0) throw "must provide a string";

		for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
			if (str.charAt(i) !== str.charAt(j))
				return false;
		}

		return true;
	}
}

module.exports = exportMethods;
