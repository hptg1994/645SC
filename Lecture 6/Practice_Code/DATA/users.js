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
            });
        });
    },

    addUser : (firstName,lastName) => {
        return users().then((userCollection) => {
            let newUser = {
                firstName : firstName,
                lastName : lastName,
                _id : uuid.v4()
            };

            return userCollection.insertOne(newUser).then((newUserInformation) => {
                return newUserInformation.insertId;
            }).then((newId) => {
                return this.getUserById(newId);
            });
        });
    },

    removeUser : (id) => {
        return users().then((userCollection) => {
            return userCollection.removeOne({_id:id}).then((deletionInfo) => {
                if(deletionInfo.deletedCount === 0){
                    throw( `Could not delete users with id of ${id}`)
                }
            });
        });
    },


    updateUser : (id,firstName,lastName) => {
        return this.getUserById(id).then((currentUser) => {
            let updatedUser ={ 
                firstName : name,
                lastName : lastName
            };

            return userCollection.updateOn({_id : id},updatedUser).then(() => {
                return this.getUserById(id);
            });
        });
    }
}

// users() = module.exports