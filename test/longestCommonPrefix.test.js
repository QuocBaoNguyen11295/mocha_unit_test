const functionsJS = require('../function/longestCommonPrefixFeature');
const assert = require('assert');

describe('Unit test for longestCommonPrefix', () => {
    it('Test 1 should be passed', () => {
        assert.strictEqual(functionsJS.longestCommonPrefix(["flower", "flow", "flight"]), 'fl');
    })

    it('Test 2 should be passed', () => {
        assert.strictEqual(functionsJS.longestCommonPrefix(["dog", "racecar", "car"]), '');
    })
})