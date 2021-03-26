const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let secretName = [];
    if (!Array.isArray(members)) {
        return false;
    }

    for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) === 'string') {
            secretName.push(members[i].trim().toUpperCase().split('')[0]);
        }
    }
    secretName.sort();
    return secretName.join('');
};