let repeatNumbers = function(data) {
  let result = "";
  for (let row = 0; row < data.length; row++) {
    let num = data[row][0];
    for (let count = 0; count < data[row][1]; count++) {
      result += num;
    }
    if (data[row + 1] !== undefined) {
      result += ", ";
    }
  }
  return result;
};
console.log(repeatNumbers([
  [1, 10]
]));
console.log(repeatNumbers([
  [1, 2],
  [2, 3]
]));
console.log(repeatNumbers([
  [10, 4],
  [34, 6],
  [92, 2]
]));
