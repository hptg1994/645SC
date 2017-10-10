const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const uuid = require('node-uuid');

module.exports = {

    getAllUsers : () => {
        return users().then((userCollection) => {
            return userCollection.find({}).toArray();
        });
    },

    getUserById : (id) => {
        return users().then((userCollection) => {
            return userCollection.findOne({_id:id}).then((user) => {
                if(!user) throw "User not found";
                return user;
            })
        })
    }
}