'use strict';

// Complete this algo
const minJumps = arr => {
    console.log( "Arr curr>>>>>>", arr)
    let i = 0;
    let jumps = 0; 
    while (i < arr.length) {
        let currElem = arr[i];
        console.log("curr Elem: ", currElem, "on i:", i,"and subarray: ", arr.slice(i+1, i + currElem + 1))
        if (i + currElem === arr.length - 1) {
            return ++jumps;
        }
        i = lastMaxIndex(arr, i + 1, i + currElem);
        console.log("i after lastmax is: ", i)
        jumps++;
    }

    return jumps;
};

const lastMaxIndex = (arr, start, end) => {
    console.log("start is: ", start, "end is: ", end)
    if (end > arr.length - 1) {
        return end;
    }
    let max = arr[start];
    let maxIdx;
    for (let i = start; i <= end; i++) {
        if (arr[i] >= max) {
            max = arr[i];
            maxIdx = i;
            console.log("new max: ", max, "max index: ", maxIdx)
        }
    }
    return maxIdx;

}

module.exports = minJumps