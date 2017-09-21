const fs = require('fs');// 读取写入文件的一个基本包

//err is normally the first argument in the call back function
console.log("start of code");

let numVowelsInName = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];
let name = [];

/*
readFile方法的第一个参数是文件的路径，可以是绝对路径，也可以是相对路径。注意，如果是相对路径，是相对于当前进程所在的路径（process.cwd()），而不是相对于当前脚本所在的路径。
readFile方法的第三个参数是读取完成后的回调函数。该函数的第一个参数是发生错误时的错误对象，第二个参数是代表文件内容的Buffer实例。
(error, data) =>{}  和  function(error,data) {}，通用写法 ：(error,data) => {};
*/

fs.readFile("the-c-team.json", "utf-8", (error, data) => {
    
    if (error) throw error;
    // console.log(data);
    // console.log(typeof data);

    //没有读完code之前，直接跳过
    console.log("reading file");
    var asObject = JSON.parse(data);

    // console.log(typeof asObject);
    // array.forEach(function(currentValue, index, arr), thisValue)
    asObject.forEach((person) => {
        name.push(person.name.toLowerCase());
    });

    console.log(name.length);
    
    //读取完数据后要干的东西,上面已经把
    for (let i = 0; i < name.length; i++) {
        let currentName = name[i];
        for (let i = 0; i < currentName.length; i++) {
            if (vowels.indexOf(currentName[i]) >= 0) {
                numVowelsInName++;
                console.log(`Found a vowel ${currentName[i]}`);
            }
        }
    }
    console.log(`we have ${numVowelsInName} vowels in their names`);
    // console.log(asObject[0]);
    // console.log(typeof asObject)
});

/*我的理解：程序是按order来运行的，但当运行到这个readfile的时候，慢了，所以先跳过，让那些马上可以运行的function先运行，所以直到“end fo code”都是one pass，当这些都运行完了，才开始readfile,把readfile该运行的都运行完
当setTimeout()设置为2ms的时候，readfile根本就没有运行完，所以输出的'we have ${numVowelsInName} vowels in their names'当然也不会有内容。
setTimeout(() => {
    console.log(name.length);
    for (let i = 0; i < name.length; i++) {
        let currentName = name[i];
        for (let i = 0; i < currentName.length; i++) {
            if (vowels.indexOf(currentName[i]) >= 0) {
                numVowelsInName++;
                console.log(`Found a vowel ${currentName[i]}`);
            }
        }
    }
    console.log(`we have ${numVowelsInName} vowels in their names`);
},2000);
*/

console.log("end of code");