// const MongoClient = require("mongodb").MongoClient;
const MongoClient = require("mongoose");

const settings = {
	mongoConfig: {
		serverUrl: "mongodb://localhost:27017/",
		database: "AuthenticateTest"
	}
};

let fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
let _connection = undefined;

let connectDb = () => {
	if (!_connection) {
		_connection = MongoClient.connect(fullMongoUrl)
	}
	return _connection;
};

module.exports = connectDb;
