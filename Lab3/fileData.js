const fs = require('fs');

module.exports = {
    getFileAsString: (path) => {
        return new Promise((fulfill, reject) => {
            if (!path) reject("No file found");
            fs.readFile(path, (error, data) => {
                if (error) {
                    reject(error);
                    return;
                }
                console.log(data);
                fulfill(data);
            });
        });
    },
    getFileAsJSON: (path) => {
        return new Promise((fulfill, reject) => {
            if (!path) reject("No path founf");
            fs.readFile(path, (error, data) => {
                if (error) {
                    reject(error);
                    return;
                }
                try {
                    let jsonData = JSON.parse(data);
                    fulfill(jsonData);
                } catch (parsingError) {
                    reject(parsingError);
                }
            });
        });
    },
    saveStringToFile: (path, text) => {
        return new Promise((fufill, reject) => {
            if (!path) throw "No path provided";
            fs.writeFile(path, text, (error, data) => {
                if (error) {
                    reject(error);
                    return;
                }
                fulfill(data);
            });
        });
    },
    saveJSONToFile: (path, obj) => {
        return new Promise((fulfill, reject) => {
            if (!path) throw "No Path Provided";
            if (typeof obj != 'object') throw "Type of object wrong";
            try {
                let jsonData = JSON.stringify(obj, null, 4);
                fs.writeFile(path, jsonData, (error, data) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    fulfill(jsonData);
                });
            } catch (parsingError) {
                reject(parsingError);
            }
        });
    },
    saveStringToFile: (path, text) => {
        return new Promise((fulfill, reject) => {
            if (!path) throw "No path Provide";
            if (typeof obj != 'string') throw "Type of object is not String";
            FS.writeFile(path, text, (error, data) => {
                if (error) reject(error);
                fufill(data);
            });
        });
    }
}
