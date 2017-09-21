

module.exports = {
    printTriangle: function (nums) {
        if (nums === undefined || typeof nums !== "number") {
            throw "nums is not a number";
        }
        if (nums < 1) {
            throw "nums is not positive";
        }
        let space = " ",
            leftslash = "/",
            rightslash = "\\",
            line = "-";
        let result = "";

        printMiddlespace = (num) =>{
            let result = "";
            let index = num * 2;
            for (let i = 0; i < index; i++) {
                result += space;
            }
            return result;
        }

        function printStartSpace(num) {

            let result = "";
            for (let i = 0; i < num; i++) {
                result += space;
            }
            return result;
        }

        function printLine(num) {
            let result = "",
                index = num * 2;
            for (let i = 0; i < index; i++) {
                result += line;
            }
            return result;
        }
        for (let i = 0; i < nums; i++) {
            if (i === nums - 1) {
                result += printStartSpace(nums - i) + leftslash + printLine(i) + rightslash + "\n";
            } else {
                result += printStartSpace(nums - i) + leftslash + printMiddlespace(i) + rightslash + "\n";
            }

        }
        return result;
    },

    printSquare: function (nums) {

        if (nums === undefined || typeof nums !== "number") {
            throw "nums is not a number";
        }
        if (nums < 2) {
            throw "nums is smaller than 2";
        }

        let line = "-",
            side = "|",
            space = " ";
        let result = "";

        function printHoriz(num, flag) {
            let result = "";
            for (let i = 0; i < num; i++) {
                if (flag === 1)
                    result += line;
                else
                    result += space;
            }
            return result;
        }
        for (let i = 1; i <= nums; i++) {
            if (i === 1 || i === nums) {
                result += side + printHoriz(nums, 1) + side + "\n";
            } else {
                result += side + printHoriz(nums, 0) + side + "\n";
            }
        }
        return result;
    },
    printRhombus: function (nums) {
        if (nums === undefined || typeof nums !== "number") {
            throw "nums is not a number";
        }
        if (nums < 2) {
            throw "nums is smaller than 2";
        }
        if (nums % 2 !== 0) {
            throw "nums is not even number";
        }
        let slash1 = "/",
            slash2 = "\\",
            space = " ",
            line = "-";
        let result = "";

        function printHoriz(num) {
            let result = "";
            let index = 2 * num - 1;
            for (let i = 0; i < index; i++) {
                if (num === 1 || num === nums) {
                    result += line;
                } else {
                    result += space;
                }
            }
            return result;
        }

        function printStartSpace(num) {
            let result = "";
            for (let i = 0; i < num; i++) {
                result += space;
            }
            return result;
        }
        for (let i = 1; i <= nums; i++) {
            if (i <= nums / 2) {
                result += printStartSpace(nums - i) + slash1 + printHoriz(i) + slash2 + "\n";
            } else {
                result += printStartSpace(nums - (nums % i + 1)) + slash2 + printHoriz(nums % i + 1) + slash1 + "\n";
            }
        }
        return result;
    }
}