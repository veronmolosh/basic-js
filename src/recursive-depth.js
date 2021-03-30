const CustomError = require("../extensions/custom-error");
let depthCount = 0;

module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == Array) {
                depthCount = calculateDepth(arr[i], depth + 1);
            }
        }
        if (depthCount > depth) {
            return depthCount;
        } else {
            return depth;
        }
    }
};