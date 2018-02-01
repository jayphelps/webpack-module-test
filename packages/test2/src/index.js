const { test1 } = require('../../test1');

exports.test2 = function test2() {
  console.log('test2 called');

  test1();
};

exports.test2_unused = function test2_unused() {
  console.log('wont be tree shaken off because not ESM');
};
