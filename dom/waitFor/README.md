# waitFor
Waits for a DOM node to be available before executing the passed callback so you can ensure that a node is available before doing further logic.

## Example
```js
import waitFor from '@bigbite/utils/dom/wait-for';

waitFor('.some-target-element', (node) => {
	// Do a thing.
});
```
