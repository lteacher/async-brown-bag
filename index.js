import withAwait from './lib/with-await';
import withPromise from './lib/with-promise';

// Examaple with promises
withPromise().catch(console.log);

// Example using async / await
// withAwait().catch(console.log);
