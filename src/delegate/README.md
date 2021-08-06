# delegate
A way to find out if the event actually ran on the desired element. This is useful when applying a single click event to the document and there are child elements in the Node that could cause issues with the handler.

## Example
```js
import delegate from '@bigbite/utils/delegate';

document.documentElement.addEventListener('click', (event) => {
	if (delegate(event.target, '.some-selector') {
		event.preventDefault();
		// Do stuff here.
	}
});
```
