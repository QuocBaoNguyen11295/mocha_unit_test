var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ""
    } else {
        var first = strs[0]
        if (first.length === 0) {
            return ""
        } else {
            for (let i = 0; i < first.length; i++) {
                for (let j = 1; j < strs.length; j++) {
                    if (first[i] !== strs[j][i]) {
                        return first.substring(0, i)
                    }
                }
            }
            return first
        }
    }
};
const functionsJS = {
    longestCommonPrefix
}

module.exports = functionsJS;