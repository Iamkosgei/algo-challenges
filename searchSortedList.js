function searchBST(numsArray, target) {
  if (numsArray.length === 0) {
    return -1;
  }
  let left = 0;
  let right = numsArray.length - 1;

  while (left <= right) {
    let midPoint = Math.floor((left + right) / 2);
    if (numsArray[midPoint] == target) {
      return midPoint;
    } else if (numsArray[midPoint] > target) {
      right = midPoint - 1;
    } else {
      left = midPoint + 1;
    }
  }
  return -1;
}

console.log(searchBST([1, 2, 3, 4, 5, 6, 7, 8], 2));
