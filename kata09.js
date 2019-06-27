let talkingCalendar = function(date) {
  let day = "",
    month = "",
    year = "";
  for (let index = 0; index < date.length; index++) {
    if (index < 4) {
      year += date[index];
    } else if (index > 4 && index < 7) {
      month += date[index];
    } else if (index > 7) {
      day += date[index];
    }
  }
  if (day < 10) {
    day = day.substr(1);
  }
  switch (day) {
    case "1":
      day += "st, ";
      break;
    case "2":
      day += "nd, ";
      break;
    case "3":
      day += "rd, ";
      break;
    default:
      day += "th, "
      break;
  }
  let months = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "Septempber ", "October ", "November ", "December "];
  let result = months[month - 1] + day + year;
  return result;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
