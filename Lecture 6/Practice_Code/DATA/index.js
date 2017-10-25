const postData = require("./posts");

const userData = require("./users");


//把这个文件暴露出去
module.exports = {
    users:userData,
    posts:postData
};