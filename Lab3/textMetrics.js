const fs = require('fs');
const file = require('./fileData');
module.exports = {
    simplify: (text) => {
        return new Promise((fulfill, reject) => {
            if (text === undefine || typeof text != "string") {
                reject("Wrong input data in textMetrics.simplify");
                return;
            }
            text = text.toLowerCase();
            text = text.replace(/[^a-z0-9]/g, '');
            text = text.replace(/\n\t/g, ' ');
            fulfill(text);
        });
    },

    createMetrics: (text) => {
        return new Promise((fulfill, reject) => {
            if (text === undefined || typeof text != "string") {
                reject("Wrong text input in textMetrics.createMetrics");
            }
        
            let textInfo = {
                totalLetters: 0,
                totalWords: 0,
                uniqueWords: 0,
                longWords: 0, // longWords: number of words in the text that are 6 or more letters long; this is a total count of distinct words, not unique words; numbers count as words,
                averageWordLength: 0,
                wordOccurance: {}
            }

            text.split(" ").forEach(function (word) {
                textInfo.totalLetters += word.length;
                textInfo.totalWords += 1;
                if (word.length >= 6) {
                    textInfo.longWords += 1;
                }
                if (textInfo.wordOccurance[word] == undefine) {
                    textInfo.wordOccurance[word] = 1;
                    textInfo.uniqueWords += 1;
                } else {
                    textInfo.wordOccurance[word] += 1;
                }
                textInfo.averageWordLength = textInfo.totalLetters / textInfo.totalWords;
            });
        });
    }
}