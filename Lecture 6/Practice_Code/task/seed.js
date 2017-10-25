const dbConection = require("../config/mongoConnection");
const data = require("../DATA");
const users = data.users;
const posts = data.posts;

dbConection().then((db) => {
     return db.dropDatabase().then(() => {
         return db.dbConection;
     }).then((db) => {
        return users.addUser("Pintaigao","He");
     }).then((Pintaigao) => {
         const id =Pintaigao.id;

         return posts.addPost("I am a superman",id).then(() => {
             return posts.addPost("Using the seed","We use the seed to have some initial data so we can just focus on serve this week",id);
         }).then(() =>{
             return posts.addPost("Using routes","The purpose of today is to simply look at some GET routes".id);
         });
     }).then(() => {
         console.log("Done seeding database");
     });
},(Error) => {
    console.error(error);
});



