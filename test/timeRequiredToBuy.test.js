const functionsJS = require('../function/timeRequiredToBuyFeature');
const assert = require('assert');
describe('Unit test for timeRequiredToBuy', () => {
    it('Test 1 should be passed', () => {
        assert.strictEqual(functionsJS.timeRequiredToBuy([2, 3, 2], 2), 6);
    })

    it('Test 2 should be passed', () => {
        assert.strictEqual(functionsJS.timeRequiredToBuy([5, 1, 1, 1], 0), 8);
    })

    it('Test 3 should be passed', () => {
        assert.strictEqual(functionsJS.timeRequiredToBuy([5, 1, 1, 1], 8), 0);
    })
})