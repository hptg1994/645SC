const MongoClient = require("mongodb").MongoClient;

const settings = {
    MongoConfig: {
        serverUrl: "mongodb://localhost:27017/",
        database: "dogsWithBlogs"
    }
};

let fulMongoUrl = settings.MongoConfig.serverUrl + settings.MongoConfig.database;
let _connection = undefined;

module.exports = {
    connectDb: () => {
        if (!_connection) {
            _connection = MongoClient.connect(fulMongoUrl).then((db) => {
                return db;
            });
        } 
        return _connection;
    }
}

// module.exports = connectDb;