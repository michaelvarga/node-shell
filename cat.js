const done = require("./bash.js");
module.exports = function (path) {
  const fs = require("fs");
  fs.readFile(path, "utf8", (err, data) => {
    if (err) throw err;
    done(data);
  });
};
