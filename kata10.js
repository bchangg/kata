let calculateChange = function(total, cash) {
  let difference = cash - total;
  let change = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };

  let result = new Object();
  while (difference > 0) {
    if (difference / 2000 >= 1) {
      change.twentyDollar += Math.floor(difference / 2000);
      result.twentyDollar = change.twentyDollar;
      difference -= (Math.floor(difference / 2000) * 2000);
    } else if (difference / 1000 >= 1) {
      change.tenDollar += Math.floor(difference / 1000);
      result.tenDollar = change.tenDollar;
      difference -= (Math.floor(difference / 1000) * 1000);
    } else if (difference / 500 >= 1) {
      change.fiveDollar += Math.floor(difference / 500);
      result.fiveDollar = change.fiveDollar;
      difference -= (Math.floor(difference / 500) * 500);
    } else if (difference / 200 >= 1) {
      change.twoDollar += Math.floor(difference / 200);
      result.twoDollar = change.twoDollar;
      difference -= (Math.floor(difference / 200) * 200);
    } else if (difference / 100 >= 1) {
      change.oneDollar += Math.floor(difference / 100);
      result.oneDollar = change.oneDollar;
      difference -= (Math.floor(difference / 100) * 100);
    } else if (difference / 25 >= 1) {
      change.quarter += Math.floor(difference / 25);
      result.quarter = change.quarter;
      difference -= (Math.floor(difference / 25) * 25);
    } else if (difference / 10 >= 1) {
      change.dime += Math.floor(difference / 10);
      result.dime = change.dime;
      difference -= (Math.floor(difference / 10) * 10);
    } else if (difference / 5 >= 1) {
      change.nickel += Math.floor(difference / 5);
      result.nickel = change.nickel;
      difference -= (Math.floor(difference / 5) * 5);
    } else {
      change.penny += Math.floor(difference);
      result.penny = change.penny;
      difference = 0;
    }
  }
  return result;
};
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
