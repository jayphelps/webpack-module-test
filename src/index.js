import { test1 } from 'test1';
// if you removed this dependency webpack will use "module" instead of "main"
// for test1 and will tree shake off the test1_unused function it exports.
// But because test2 also depends on test1, but itself doesn't support "module"
// webpack is smart enough to basically deopt to "main", so only one copy of
// test1 is imported and no tree shaking is done
import { test2 } from 'test2';

test1();
test2();
