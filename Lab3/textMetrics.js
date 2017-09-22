module.exports = {
    simplify: (text) => {
        if (text === undefined || typeof text !== "string") {
            throw("Wrong input data in textMetrics.simplify");
            return;
        }
        text = text.toLowerCase();
        text = text.replace(/[^a-z0-9 ]/g, ''); //all except a~z 0~9 and " "
        text = text.replace(/\n\t/g, ' '); //all change line, tab
        return text;
    },

    createMetrics: (text) => {
        if (text === undefined || typeof text !== "string") {
            throw("Wrong text input in textMetrics.createMetrics");
        }

        let textInfo = {
            totalLetters: 0,
            totalWords: 0,
            uniqueWords: 0,
            longWords: 0, 
            averageWordLength: 0,
            wordOccurance: {}
        }

        text.split(" ").forEach(function (word) {
            textInfo.totalLetters += word.length;
            textInfo.totalWords += 1;
            if (word.length >= 6) {
                textInfo.longWords += 1;
            }
            if (textInfo.wordOccurance[word] === undefined) {
                textInfo.wordOccurance[word] = 1;
                textInfo.uniqueWords += 1;
            } else {
                textInfo.wordOccurance[word] += 1;
            }
        });
        textInfo.averageWordLength = textInfo.totalLetters / textInfo.totalWords;
        return textInfo;
    }
}