// const fs = require('fs');
const jsonFile = require("./jsonFileMod");

//err is normally the first argument in the call back function
console.log("start of code");

let numVowelsInName = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];
let name = [];


let readTeamFile = (file,callback) =>{
    jsonFile.readJson(file,callback)
}

/*处理error的方式
readTeamFile("the-c-team2.json",(error,data)=>{
    if(error){
        readTeamFile("the-c-team2.json",(error,data) => {
            //do he work
        });
        return;
    }
    // do the work 
});
*/

//重写 readJson
jsonFile.readJson("the-c-team.json", (error, asObject) => {
    if (error) throw error;

    // var asObject = JSON.parse(data);

    asObject.forEach((person) => {
        name.push(person.name.toLowerCase());
    });


    let nameData = {};
    for (let i = 0; i < name.length; i++) {
        let currentName = name[i];
        let currentNameVowels = 0;
        for (let i = 0; i < currentName.length; i++) {
            if (vowels.indexOf(currentName[i]) >= 0) {
                numVowelsInName++;
                currentNameVowels++;
            }
        }
        nameData[currentName] = currentNameVowels;
    }
    console.log(nameData);

    jsonFile.writeJson("name-data.json",nameData,(error,data)=>{
        if(error) throw error;

        jsonFile.readJson("name-data.json",(error,data)=>{
            //do more work!
                //on
                    //and 
                        //on
        });
        console.log(nameData);
    });
    console.log(`we have ${numVowelsInName} vowels in their names`);
    // console.log(asObject[0]);
    // console.log(typeof asObject)
});
  
console.log("end of code");

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
},);
*/

