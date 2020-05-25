# Time Taken
This library is used for quickly measure and log time taken for a specific block of code.

## Installation
Using `npm`:
```npm install --save kopi-time```

## Usage
```
const KopiTime = require('kopi-time');

const printToConsole = true;
const handle = new KopiTime('Code Block A', printToConsole);

// Do something long processing here

const timeTakenInMs = handle.calculate();
```
