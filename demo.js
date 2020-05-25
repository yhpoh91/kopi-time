const KopiTime = require('./index');

const handle = new KopiTime('test block', true);

setTimeout(() => {
  handle.calculate();
}, 5000);