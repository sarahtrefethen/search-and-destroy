'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	console.log("start array: ", array);
	console.log("target: ", target)

	if (array.length === 0) return false;
	if (array.length === 1) return target === array[0];

	const middleIndex = Math.floor(array.length / 2);
	const middle = array[middleIndex];

	if (middle === target) return true;

	if (middle < target) {
		// console.log(array.slice(middleIndex+1))
		return binarySearch(array.slice(middleIndex+1), target);
	} else {
		// console.log(array.slice(0, middleIndex));
		return binarySearch(array.slice(0, middleIndex), target)
	}
	
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch