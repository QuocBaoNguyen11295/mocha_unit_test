const functionsJS = require('../function/countStudentsFeature');
const assert = require('assert');
describe('Unit test for countStudents', () => {
    it('Test 1 should be passed', () => {
        assert.strictEqual(functionsJS.countStudents([1, 1, 0, 0], [0, 1, 0, 1]), 0);
    })

    it('Test 2 should be passed', () => {
        assert.strictEqual(functionsJS.countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]), 3);
    })
})