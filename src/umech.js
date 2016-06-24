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

if (status === null){
      const warningM = output + obj + output2 + ' Warning! Status is Null!';
      console.warn(colors.warn(warningM));

        }else{
        console.log(output + obj + output2 + status ' Loading Output')
    }

  if (process.env.DEBUG) {
        console.log(output + obj + output2 + title ' Loading Output')
      }else{
        const errM = output + obj + output2 + ' Failed to Load Output';
        console.error(colors.error(errM));
}
}
};
