
const fs = require('fs');

module.exports = {
    readJson : (filename)  => {
        return new Promise((fulfill,reject) => {
            if(!filename) throw "No file name provide";
            fs.readFile(filename,"utf-8",(error,data) =>{
                if(error){
                    reject(error);
                    return;
                }
                try{
                    let jsonData = JSON.parse(data);
                    fulfill(jsonData); //传给下一个then的参数，
                }catch(parsingError){
                    reject(parsingError);
                }
            });
        });
    },

    writeJson : (filename,data) => {
        return new Promise((fulfill,reject) => {
            if(!filename) throw "No file name provide";
            fs.writeFile(filename,JSON.stringify(data,null,4),(error,callback)=>{
                if(error){
                    reject(error);
                    return;
                }
                fulfill(data);                                    
            });
        });
    }
}