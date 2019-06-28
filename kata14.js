const squareCode = function(message) {
  // Put your solution here
  message = message.split(" ").join("");
  let msgLength = message.length;
  let charsPerLine = Math.ceil(Math.sqrt(msgLength));
  let result = "";
  let jumbledWords = [];

  let regex = new RegExp(`.{1,${charsPerLine}}`, "g");
  jumbledWords = message.match(regex);
  // console.log(jumbledWords);
  for (let i = 0; i < charsPerLine; i++) {
    jumbledWords.forEach(function(word) {
      if (word[i] !== undefined) {
        result += word[i];
      }
    });
    result += " ";
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
