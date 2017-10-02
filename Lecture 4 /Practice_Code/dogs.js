const mongoCollections = require("./mongoCollections");
const dogs = mongoCollections.dogs;

module.exports = {
  // This is a fun new syntax that was brought forth in ES6, where we can define
  // methods on an object with this shorthand!

  getDogById: (id) => {
    return dogs().then((dogCollection) => {
      return dogCollection.findOne({
        _id: id
      });
    });
  },

  addDog: (name, breeds) => {
    return dogs().then((dogCollection) => {
      let newDog = {
        name: name,
        breeds: breeds
      };

      return dogCollection.insertOne(newDog).then((newInsertInformation) => {
        return newInsertInformation.insertedId;
      }).then((newId) => {
        return this.getDogById(newId);
      });
    });
  },

  removeDog: (id) => {
    return dogs().then((dogCollection) => {
      return dogCollection.removeOne({
        _id: id
      }).then((deletionInfo) => {
        if (deletionInfo.deletedCount === 0) {
          throw (`Could not delete dog with id of ${id}`)
        }
      });
    });
  },

  updateDog: (id, name, breeds) => {
    return dogs().then((dogCollection) => {
      let updatedDog = {
        name: name,
        breeds : breeds
      };
      return dogCollection.updateOne({_id:id},updatedDog).then(() => {
        return this.getDogById(id);
      });
    });
  }
  /*   async getDogById(id) {
      if (!id) throw "You must provide an id to search for";

      const dogCollection = await dogs();
      const doggo = await dogCollection.findOne({ _id: id });
      if (doggo === null) throw "No dog with that id";

      return doggo;
    },


 async getAllDogs() {
    const dogCollection = await dogs();
    const dogs = await dogCollection.find({}).toArray();
    return dogs;
  },

  async addDog(name, breeds) {
    if (!name) throw "You must provide a name for your dog";

    if (!breeds || !Array.isArray(breeds))
      throw "You must provide an array of breeds";

    if (breeds.length === 0) throw "You must provide at least one breed.";
    const dogCollection = await dogs();

    let newDog = {
      name: name,
      breeds: breeds
    };

    const insertInfo = await dogCollection.insertOne(newDog);
    if (insertInfo.insertedCount === 0) throw "Could not add dog";

    const newId = insertInfo.insertedId;

    const dog = await this.getDogById(newId);
    return dog;
  },
  async removeDog(id) {
    if (!id) throw "You must provide an id to search for";

    const dogCollection = await dogs();
    const deletionInfo = await dogCollection.removeOne({
      _id: id
    });

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete dog with id of ${id}`;
    }
  },
  async updateDog(id, name, breeds) {
    if (!id) throw "You must provide an id to search for";

    if (!breeds || !Array.isArray(breeds))
      throw "You must provide an array of breeds";

    if (breeds.length === 0) throw "You must provide at least one breed.";

    const dogCollection = await dogs();
    const updatedDog = {
      name: name,
      breeds: breeds
    };

    const updateInfo = await dogCollection.updateOne({
      _id: id
    }, updatedDog);
    if (updatedInfo.modifiedCount === 0) {
      throw "could not update post successfully";
    }

    return await this.getDogById(id);
  } */
};