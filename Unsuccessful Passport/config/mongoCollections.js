const dbConnection = require("./mongoConnection.js");



// let getCollection = (collection) => {
// 	let _col = undefined;

// 	return () => {
// 		if (!_col) {
// 			_col = dbConnection().then((db) => {
// 				return db.collection(collection);
// 			});
// 		}

// 		return _col;
// 	}
// }

/* TODO: exports and list collections */
module.exports = {
	users: getCollection("user"),
}
