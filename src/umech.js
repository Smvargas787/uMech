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
  const seperator = '\n============(*)_(*)============\n';

  const output = colors.data(seperator) + ' ' + colors.info(title) + ' ';

  const output2 = colors.verbose(obj) + ' ' + colors.debug(stamp) + ' ' + colors.debug(status);


  if (process.env.DEBUG) {
    console.log(output + output2);
    // I took out the route to the logging file that is catching the logs.
  } else {
    console.error(new Error('The debugging tool did not find this'));
  }
};


exports.bump = (currentV, certainSetUpdate) => {
  const major = currentV.major;
  const minor = currentV.minor;
  const patch = currentV.patch;

  if(certainOf certainSetUpdate){

    if (certainSetUpdate === 'major'){
      patch = 0;
      minor = 0;
      major += 1;
    }
    if (certainSetUpdate === 'minor'){
      minor += 1;
      patch = 0;

    }
    if (certainSetUpdate === 'patch'){
      patch += 1;
    }
  }
} else {
  console.warn('Second argument must be entered');
}
return 'Version: ' + major + '.' + minor + '.' + patch;
};
