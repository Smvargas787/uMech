#uMech

[ ![codeship status for seanedw1/uMech](https://codeship.com/projects/eb9aa840-1b07-0134-0f10-0e8ad2af7d49/status?branch=master)](https://codeship.com/projects/159540)

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
