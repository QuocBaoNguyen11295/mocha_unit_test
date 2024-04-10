const functionsJS = require('../function/deckRevealedIncreasingFeature');
const assert = require('assert');

describe('Unit test for deckRevealedIncreasing', () => {
    it('Test 1 should be passed', () => {
        assert.strictEqual(functionsJS.deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]).toString(), [
            2,
            13,
            3,
            11,
            5,
            17,
            7
        ].toString());
    })

    it('Test 2 should be passed', () => {
        assert.strictEqual(functionsJS.deckRevealedIncreasing([1, 1000]).toString(), [
            1,
            1000
        ].toString());
    })
})