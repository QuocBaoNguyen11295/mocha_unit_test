const functionsJS = require('../function/checkValidStringFeature');
const assert = require('assert');
describe('Unit test for checkValidString', () => {
    it('Test 1 should be passed', () => {
        assert.strictEqual(functionsJS.checkValidString("()"), true);
    })

    it('Test 2 should be passed', () => {
        assert.strictEqual(functionsJS.checkValidString("(*)"), true);
    })

    it('Test 3 should be passed', () => {
        assert.strictEqual(functionsJS.checkValidString("(*))"), true);
    })
})