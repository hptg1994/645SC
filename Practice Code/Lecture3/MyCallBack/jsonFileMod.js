//basic things like protocol 
// fs 像一个读取和写入的包

const fs = require('fs');

/*
//因为这是个对外的包，所以要exports{ },同时某种意义上也是面向对象
// let jsonFileMod = exports = module.exports  //因为module.exports = {},js已经定义好了的
let jsonFileMod = module.exports  //因为module.exports = {},js已经定义好了的
//
jsonFileMod.readJson = (filename,callback) => {
    fs.readFile(filename,"utf-8",(error,data)=>{
        callback(error,JSON.parse(data));
    });
}; //相当于直接往module里面塞内容

jsonFileMod.writeJson = (filename,data,callback) => {
    fs.writeFile(filename,JSON.stringify(data,null,4),callback);
};
*/

//运用新学到的构造方法：
module.exports = {
    readJson : (filename, callback) => {
        fs.readFile(filename, "utf-8", (error, data) => {
            callback(error, JSON.parse(data));
        });
    },

    writeJson : (filename,data, callback) => {
        fs.writeFile(filename,JSON.stringify(data,null,4),callback);
    }
}