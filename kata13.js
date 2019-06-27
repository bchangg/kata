const urlDecode = function(text) {
  // Put your solution here
  let result = new Object();
  let valueKeyPairs = text.split("&");
  valueKeyPairs.forEach(function(encodedPair, index, array) {
    let pairs = encodedPair.split("=");
    result[pairs[0]] = pairs[1].split("%20").join(" ")
  });
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
