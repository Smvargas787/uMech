#uMech

## Install packages

In terminal run commands below to install package

```
npm i -g nodemon

npm i uMech
```

### Getting started

Create a logs directory in root level of your project.
Inside create a eLog.log file to create a file to log errors

logs/eLog.log

### Usage

In command line run

```
DEBUG=true nodemon [server path goes here]

```

### implementing in your file

const umech = require('uMech');

umech.debug('title goes here', obj, status);


###Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)

###Contributors
[View Contributors](https://github.com/seanedw1/uTool/graphs/contributors)
