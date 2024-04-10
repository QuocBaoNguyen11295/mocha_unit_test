var timeRequiredToBuy = function (tickets, k) {
    //If K is over total tickets elements -> this is not unrealistic, so there is no time
    if (tickets.length < k) {
        return 0;
    } else {//in the realistic cases
        var time = 0
        var i = 0
        /**
            We will taken one second from each of elements
            In each of subtraction one second from one element, total time will be increased one second
            Until the target element time is 0
         */
        while (1) {
            if (i === tickets.length)
                i = 0
            if (tickets[i] !== 0) {
                tickets[i]--
                time++
            }
            if (tickets[k] === 0)
                break
            i++
        }
        return time
    }
};

const functionsJS = {
    timeRequiredToBuy
}

module.exports = functionsJS;