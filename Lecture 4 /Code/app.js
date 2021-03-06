 const dogs = require("./dogs");
 const posts = require("./posts");
 const connection = require("./mongoConnection");

 let addSasha = dogs.addDog("Sasha", ["Cheagle", "Chihuaha", "Beagle"]);

 let getall = dogs.getAllDogs();
 console.log(getall);
 
 let sashaFirstPost = addSasha.then((sasha) => {
   console.log("Sasha the dog has been added, now she will blog!");
   console.log(sasha);

   return posts.addPost(
     "A Review of Bleu d'Auvergne",
     "It was 2014 when I was born, and it was 2014 when I received my first taste of Bleu d'Auvergne. I dined upon the delicacy at the home of my grand-papa, known as The Cheese Man for the great varieties of cheese he kept in his abode. I still do not know if the Bleu d'Auvergne was what ignited my love of cheese, or if it was the strange diet of my papa whom kept away from the starches and sugars and replaced them with cheeses and legumes. But truly, I will never forget the strange world of the first taste of Bleu d'Auvergne, to this day the greatest cheese I have ever tasted. It paired very nicely with the cheeseburger I stole from my papa's four year old cousin. No one believed him. It was the perfect crime.",
     sasha._id);
 });


 let updatingSashaFirstPost = sashaFirstPost.then((post) => {
   return posts.updatePost(post._id, "For Love of Bleu d'Auevergne", post.content, post.poster.id);
 });

 let removeTheFirstPostAfterUpdate = updatingSashaFirstPost.then((updatedPost) => {
   console.log("Now, the post is:");
   console.log(updatedPost);
   console.log("That's all, folks!");
   return posts.removePost(updatedPost._id);
 });

 
 /* const main = async() => {
   const sasha = await dogs.addDog("Sasha", ["Cheagle", "Chihuaha", "Beagle"]);
   console.log("Sasha the dog has been added, now she will blog!");
   console.log(sasha);

   const post = await posts.addPost(
     "A Review of Bleu d'Auvergne",
     "It was 2014 when I was born, and it was 2014 when I received my first taste of Bleu d'Auvergne. I dined upon the delicacy at the home of my grand-papa, known as The Cheese Man for the great varieties of cheese he kept in his abode. I still do not know if the Bleu d'Auvergne was what ignited my love of cheese, or if it was the strange diet of my papa whom kept away from the starches and sugars and replaced them with cheeses and legumes. But truly, I will never forget the strange world of the first taste of Bleu d'Auvergne, to this day the greatest cheese I have ever tasted. It paired very nicely with the cheeseburger I stole from my papa's four year old cousin. No one believed him. It was the perfect crime.",
     sasha._id
   );

   console.log(post);
   console.log("Let's change the title...");

   const updatedPost = await posts.updatePost(
     post._id,
     "For Love of Bleu d'Auvergne",
     post.body,
     post.poster.id
   );

   console.log("Now, the post is:");
   console.log(updatedPost);
   console.log("That's all, folks!");

   await posts.removePost(updatedPost._id);

   const db = await connection();
   await db.close();

   console.log("Done!");
 };

 main(); */