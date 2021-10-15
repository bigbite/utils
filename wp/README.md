# WordPress
A number of utilities for work against WordPress.

## `requireWP()`
Check for the existance of WordPress in the DOM and throw an error if it is not found.

```js
import { requireWP } from '@bigbite/utils/wp';

try {
    requireWP();

    // Your WP specific code...
} catch(e) {
    // Handle thrown error when WP is not available.
}
```
