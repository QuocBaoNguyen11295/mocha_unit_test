var countStudents = function (students, sandwiches) {
    var unabled = 0
    while (students.length !== 0) {
        if (students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
            unabled = 0
        } else {
            students.push(students[0])
            students.shift()
            unabled++
            if (unabled === students.length)
                break
        }
    }

    return students.length;
};

const functionsJS = {
    countStudents
}

module.exports = functionsJS;