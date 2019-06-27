const multiplicationTable = function(maxValue) {
  let result = "";
  for (let multiplier = 1; multiplier <= maxValue; multiplier++) {
    for (let currentNum = 1; currentNum <= maxValue; currentNum++) {
      result += multiplier * currentNum;
      if (maxValue > 1) {
        result += " ";
      }
    }
    result += "\n";
  }
  return result;
};
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
