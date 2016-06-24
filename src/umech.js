const pajson = require('../package.json');
let newVersion;
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


  if (process.env.DEBUG) {
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
      console.warn('You have made a patch');
    }
    if (semVersion === 'minor') {
      minor += 1;
      console.warn('You have made a minor change');
    }
    if (semVersion === 'major') {
      patches = 0;
      minor = 0;
      major += 1;
      console.warn('This is a very serious change please be sure that this is working');
    }
  }
};


console.log(pajson.version);
