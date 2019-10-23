'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let currentSingleJump = linkedlist.getNthNode(0);
    let currentDoubleJump = linkedlist.getNthNode(2); 
    while(currentSingleJump) {
        console.log(currentSingleJump.value)
        console.log(currentDoubleJump.value)
        if (currentSingleJump === currentDoubleJump) {
            console.log(currentSingleJump.value);
            return true;
        } else {
            currentSingleJump = currentSingleJump.next;
            if (currentDoubleJump) {
                currentDoubleJump = currentDoubleJump.next.next;
            }
        }
    }
    return false;
};

const findLoop = (linkedlist) => {
    let currentSingleJump = linkedlist.getNthNode(0);
    let currentDoubleJump = linkedlist.getNthNode(2); 
    let count = 0;
    while (currentSingleJump) {
        count++;
        console.log(currentSingleJump.value)
        console.log(currentDoubleJump.value)
        if (currentSingleJump === currentDoubleJump) {
            console.log("This is where they meet: ", currentSingleJump.value);
            return count;
        } else {
            currentSingleJump = currentSingleJump.next;
            if (currentDoubleJump) {
                currentDoubleJump = currentDoubleJump.next.next;
            }
        }
    }
    return false;
};




/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = {isLoop, findLoop}