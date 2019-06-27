const sumLargestNumbers = function(data) {
  if (data.length === 2) {
    return data[0] + data[1];
  } else {
    let largest = data[0];
    let secondLargest = data[0];
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i + 1] > data[i]) {
        secondLargest = largest;
        largest = data[i + 1];
      }
    }
    return largest + secondLargest;
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
