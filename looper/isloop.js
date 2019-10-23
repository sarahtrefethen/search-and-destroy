'use strict';

//Complete this algo
const isLoop = (linkedlist) => {

    let current = linkedlist.getNthNode(0);
    let checked = new Set();
    while(current) {
        if (checked.has(current)) {
            return true;
        } else {
            checked.add(current);
        }

        current = current.next;
    }

    return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop