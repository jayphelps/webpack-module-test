import { test } from 'test';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const result = from(test()).pipe(
  map(d => 9001)
);

console.log(result);
