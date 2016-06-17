exports.debug = (title, obj, status) => {
  const seperator = '\n==================================\n';
  const output = seperator + title + status + obj + seperator; // + stamp;

  // requiring the file system(fs) to create/ write logging files
  const fs = require('fs');

  // node logging requires a time stamp formatting to be sets
  // const stamp =

  // if debug equALS == 1 true run this block
  if (process.env.DEBUG) {
    // console.log(output, obj, status);

// fs.appendFile(file, data[, options], callback)
// Asynchronously append data to a file, creating the file if it does not yet exist.
    fs.appendFile('logs/eLog.log', output, 'utf8', (err) => {
      if (err) {
//  console.log('The data was appended to file!');
      }
    });
  }
};
