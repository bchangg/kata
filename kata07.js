let camelCase = function(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {

    } else if (input[i - 1] === " ") {
      result += input.charAt(i).toUpperCase();
    } else {
      result += input[i];
    }
  }
  return result;
};
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
