const bluebird = require('bluebird');
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

module.exports = {

    getFileAsString: async(path) => {
        if (!path) {
            throw "No file found";
            return;
        }
        let result = await fs.readFileAsync(path, "utf-8").then((data) => {
            return data;
        });
        return result;
    },
    getFileAsJSON: async(path) => {
        if (!path) {
            throw "No file found";
            return;
        }
        let result = await fs.readFileAsync(path, "utf-8").then((data) => {
            try {
                let jsonData = JSON.parse(data);
                return jsonData;
            } catch (parsingError) {
                throw (parsingError);
            }
        });
        return result;
    },
    saveStringToFile: async(path, text) => {
        if (!path) {
            throw ("No path provided");
            return;
        }
        let result = await fs.writeFileAsync(path, text).then((data) => {
            return data;
        });
        return result;
    },
    saveJSONToFile: async(path, obj) => {
        if (!path) {
            throw ("No path provided");
            return;
        }
        let result = await fs.writeFileAsync(path, JSON.stringify(obj, null, 4)).then((data) => {
            return data;
        });
        return result;
    }
}