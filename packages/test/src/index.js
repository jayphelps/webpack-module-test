// This package just uses CJS and knows nothing about treeshaking
const { of } = require('rxjs');
const { map } = require('rxjs/operators');

exports.test2 = () => of(1, 2, 3).pipe(
  map(d => d * 10)
);
