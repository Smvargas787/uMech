const pajson = require('../package.json');
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

  if (process.env.DEBUG) {
// fs.appendFile(file, data[, options], callback)
    console.log(output + output2);
  }
};

exports.bump = (thisVersion, semVersion) => {
  let patches = thisVersion.patch;
  let minor = thisVersion.minor;
  let major = thisVersion.major;
  if (typeof semVersion) {
    if (semVersion === 'patches') {
      patches += 1;
    }
    if (semVersion === 'minor') {
      minor += 1;
    }
    if (semVersion === 'major') {
      patches = 0;
      minor = 0;
      major += 1;
    }
  }
};

console.log(pajson.version);
