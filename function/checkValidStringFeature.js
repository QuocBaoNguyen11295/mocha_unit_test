var checkValidString = function (s) {
    var low = 0
    var high = 0
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            low++
        } else {
            low--
        }
        if (s[i] !== ')') {
            high++
        } else {
            high--
        }

        if (high < 0) {
            return false
        }
        low = Math.max(low, 0)
    }
    return low === 0
};

const functionsJS = {
    checkValidString
}

module.exports = functionsJS;