process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const newcmd = require(`./${cmd}.js`)
  newcmd();
});

