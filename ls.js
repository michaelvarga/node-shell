const fs = require("fs");
const done = require("./bash");

module.exports = function () {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      done(files.join("\n"));
    }
  });
};
