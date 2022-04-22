const done = require("./bash");
module.exports = function () {
  const dateString = new Date();
  let date = Date(dateString).split(" ");
  let temp = date[1];
  date[1] = date[2];
  date[2] = temp;
  date.splice(5, 1);
  let time = date[4].split(":");
  if (time[0] > 12) {
    time[0] -= 12;
    if (time[0] < 10) {
      time[0] = `0${time[0]}`;
    }
    date[4] = time.join(":");
    date.splice(5, 0, "PM");
  } else {
    date.splice(5, 0, "AM");
  }
  done(date.join(" "));
};
