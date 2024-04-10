var deckRevealedIncreasing = function (deck) {
    let stack = deck.sort((a, b) => b - a)
    let queue = [stack.shift()]
    while (stack.length > 0) {
        var last_element_of_queue = queue.pop()//remove last element
        queue.unshift(last_element_of_queue)//add to head queue
        var first_element_of_stack = stack.shift()//remove first element of stack
        queue.unshift(first_element_of_stack)//add first to head of stack
    }

    return queue
}

const functionsJS = {
    deckRevealedIncreasing
}

module.exports = functionsJS;