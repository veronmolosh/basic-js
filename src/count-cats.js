const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return 0;
    }
    let newArr;
    let count = 0;
    newArr = matrix.flat(Infinity);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === '^^') {
            count++;
        }
    }
    return count;
};