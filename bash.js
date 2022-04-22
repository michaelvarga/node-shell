process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");
  if (cmd.length === 1) {
    const newcmd = require(`./${cmd[0]}.js`);
    newcmd();
  } else {
    const command = cmd[0];
    const fileName = cmd[1];
    const newcmd = require(`./${command}.js`);
    newcmd(fileName);
  }
});

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

module.exports = done;
