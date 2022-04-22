const done = require("./bash.js");

module.exports = function (url) {
  const request = require("request");
  request(url, function (error, response, body) {
    if (error) throw error; // Print the error if one occurred
    done(body); // Print the HTML for the Google homepage.
  });
};
