const removeSpacesAndCapitalize = function(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === " ") {
      result += input[i].toUpperCase();
    } else if (input[i] !== " ") {
      result += input[i];
    }
  }
  return result;
}

const makeCase = function(input, theCase) {
  let finalResult = input;
  if (typeof(theCase) === 'object') {
    theCase.forEach(function(item) {
      finalResult = makeCase(finalResult, item);
    });
  } else {
    let result = "";
    let temp;
    switch (theCase) {
      case 'camel':
        result = removeSpacesAndCapitalize(input);
        return result;
        break;
      case 'pascal':
        temp = removeSpacesAndCapitalize(input);
        result += temp[0].toUpperCase();
        result += temp.substring(1);
        return result;
        break;
      case 'snake':
        result = input.replace(/ /g, "_")
        return result;
        break;
      case 'kebab':
        result = input.replace(/ /g, "-")
        return result;
        break;
      case 'title':
        temp = input;
        result += temp[0].toUpperCase();
        for (let i = 1; i < temp.length; i++) {
          if (temp[i - 1] === " ") {
            result += temp[i].toUpperCase();
          } else {
            result += temp[i];
          }
        }
        return result;

        break;
      case 'vowel':
        for (let i = 0; i < input.length; i++) {
          if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
            result += input[i].toUpperCase();
          } else {
            result += input[i];
          }
        }
        return result;
        break;
      case 'consonant':
        for (let i = 0; i < input.length; i++) {
          if (!(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u")) {
            result += input[i].toUpperCase();
          } else {
            result += input[i];
          }
        }
        return result;

        break;
      case 'lower':
        return input.toLowerCase();
        break;
      case 'upper':
        return input.toUpperCase();
        break;
      default:

    }
  }
  return finalResult;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "title"]));
