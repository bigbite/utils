# innerBlockRange
You may have innerBlocks which uses a template to add some blocks to it, however if you want the user to adjust the inner blocks, the template can't be modified. This snippet allows you to add a slider that the user can control the quantity of items inside the innerBlocks.

Note: this assumes you want all the innerBlocks to be the same type, in this instance links-with-icons

## Example
```js
import innerBlockRange from '@bigbite/utils/dispatchers/inner-block-range';

const Component = () => {
  return (
    // ...
    <RangeControl
      label={__('Quantity', 'my-plugin')}
      value={quantity}
      onChange={(newQuantity) => updateIcons(newQuantity, 'my-plugin/block')}
      min={1}
      max={24}
    />
    // ...
  );
};

withDispatch((dispatch, ownProps, registry) => ({
  innerBlockRange(dispatch, ownProps,registry),
}))(DisplayComponent);
```

## Todo
* Check if blockName is fn() and handle as appropriate to allow for callbacks.
