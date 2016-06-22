exports.debug = (title, obj, status) => {
  const stamp = new Date();
  const colors = require('colors');
  colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
  });
  const seperator = '\n==================================\n';

  const output = colors.data(seperator) + ' ' + colors.info(title) + ' ';

  const output2 = colors.verbose(obj) + ' ' + colors.debug(stamp) + ' ' + colors.debug(status);

  // requiring the file system(fs) to create/ write logging files
  const fs = require('fs');

  if (process.env.DEBUG) {
// fs.appendFile(file, data[, options], callback)
    fs.appendFile('logs/eLog.log', output, (err) => {
      if (err) throw err;
      console.log(output + output2);
    });
  }
};
