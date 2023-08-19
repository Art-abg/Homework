const arrMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [6, 7, 8]
];
const arrMatrix1 = [
  [4, 6, 9],
  [66, 3456, 856],
  [568568, 54367, 4356],
  [457457, 58687, 5757, 45656, 347777]
];

const findLargestSumIndex = (arr) => {
  let largestSum = -Infinity; // initialize the largest sum to a very small number
  let largestSumIndex = -1; // initialize the index to an invalid value
  arr.forEach((element, index) => {
    // loop over the arrays using forEach
    let currentSum = element.reduce((acc, ele) => acc + ele, 0); // calculate the sum of the current array
    if (currentSum > largestSum) {
      // compare the current sum with the largest sum
      largestSum = currentSum; // update the largest sum if the current sum is larger
      largestSumIndex = index; // update the index accordingly
    }
  });
  return `Index of the Array with largest sum is ${largestSumIndex}`; // return the final result
};

console.log(findLargestSumIndex(arrMatrix));
console.log(findLargestSumIndex(arrMatrix1));
