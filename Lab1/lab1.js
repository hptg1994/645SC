//Created By Pintaigao He
//CWID:10414806

// 1.sumOfSquares(num1, num2, num3)
function sumOfSquares(nums1, nums2, nums3) {
  if (typeof nums1 !== "number") {
    throw "num1 error";
  }
  if (typeof nums2 !== "number") {
    throw "num2 error";
  }
  if (typeof nums3 !== "number") {
    throw "num3 error";
  }

  return nums1 * nums1 + nums2 * nums2 + nums3 * nums3;
}
console.log(sumOfSquares(1, 2, 3));

//2.sayHelloTo(firstName, lastName, title)
function sayHelloTo(firstName, lastName, title) {
  if (firstName === undefined) throw "Please tell me your name";
  if (typeof firstName !== "string") throw "Input type error";
  else if (lastName === undefined) {
    console.log(`Hello,${firstName}!`);
  } else if (title === undefined) {
    console.log(
      `Hello,${firstName} ${lastName}.I hope you are having a good day`
    );
  } else {
    console.log(
      `Hello,${title} ${firstName} ${lastName}! Have a good evening!`
    );
  }
}

sayHelloTo("Phil","Barresi", "Mr.");

//3.cupsOfCoffee(howManyCups)
function cupsOfCoffee(num) {
  if (num === undefined) throw "No data input";
  if (num <= 0) throw "Please input a larger number";
  if (typeof num !== "number") throw "Input type error";
  let result = "";
  while (num > 1) {
    result =
      result +
      `${num} of coffee on the desk!${num} cups of coffee!\nPick one up,drink the cup,${num-- -
        1} cups of coffee on the desk\n\n`;
  }
  result += `${num} cups of coffee on the desk!${num} cup of coffee!\nPick it up, drink the cup, no more coffee left on the desk!\n`;
  return result;
}
console.log(cupsOfCoffee(5));

//4.occurrencesOfSubstring(fullString, substring)
function occurrencesOfSubstring(fullString, subString) {
  if (fullString === undefined) throw "Lacking fullString";
  if (subString === undefined) throw "Lacking subString";
  if (typeof fullString !== "string" || typeof subString !== "string")
    throw "Input type error";
  var count = 0;
  for (let i = 0; i < fullString.length; i++) {
    i = fullString.indexOf(subString, i);
    if (i == -1) break;
    count++;
  }
  return count;
}
console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));

//5.randomizeSentences(paragraph)
function randomizeSentences(paragraph) {
  if (paragraph === undefined) throw "No data";
  if (typeof paragraph !== "string") throw "Please input String";
  let sentences = [];
  let index = 0;
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] == "?" || paragraph[i] == "!" || paragraph[i] == ".") {
      sentences.push(paragraph.substring(index, i + 1));
      index = i + 1;
    }
  }
  for (var i = sentences.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = sentences[i];
    sentences[i] = sentences[j];
    sentences[j] = temp;
  }
  return sentences.join(" ");
}
var paragraph =
  "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";

console.log(randomizeSentences(paragraph));
