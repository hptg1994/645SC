const MongoClient = require("mongodb").MongoClient;
const settings = {
  "mongoConfig": {
    "serverUrl": "mongodb://localhost:27017/",
    "database": "dogsWithBlogs"
  }
}

const mongoConfig = settings.mongoConfig;

let fullMongoUrl = `${mongoConfig.serverUrl}${mongoConfig.database}`;
let _connection = undefined;

let connectDb = async() => {
  if (!_connection) {
    _connection = await MongoClient.connect(fullMongoUrl);
  }

  return _connection;
};

module.exports = connectDb;