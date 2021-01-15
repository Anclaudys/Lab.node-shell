const { pwd } = require(`./pwd`);

//Prompt
process.stdout.write(`prompt >`);

//events firinging after user types in a line

process.stdin.on(`data`, (data) => {
  const cmd = data.toString().trim();

  // if (cmd === 'pwd') {
  //   process.stdout.write(process.execPath);
  // }
  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
