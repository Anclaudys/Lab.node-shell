const pwdCmd = (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    process.stdout.write(process.execPath);
  }
};

module.exports = { pwdCmd };
