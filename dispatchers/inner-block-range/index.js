import { requireWP } from '../../wp';

const InnerBlockRange = (dispatch, ownProps, registry) => (quantity, targetBlock) => {
  requireWP();

  const { setAttributes, clientId, attributes } = ownProps;
  const { getBlocks } = registry.select('core/block-editor');
  const innerBlocks = getBlocks(clientId);

  const { replaceInnerBlocks } = dispatch('core/block-editor');

  setAttributes({ quantity });

  const { quantity: prevQuantity } = attributes;

  // Create new blocks
  if (quantity > prevQuantity) {
    const blocksToAdd = quantity - prevQuantity;
    for (let i = 0; i < blocksToAdd; i += 1) {
      // @TODO: Check if targetBlock is fn() and handle as appropriate to allow for callbacks.
      const newBlock = createBlock(targetBlock);
      innerBlocks.push(newBlock);
    }
  }

  // Remove old block
  if (quantity < prevQuantity) {
    const buttonsToRemove = prevQuantity - quantity;
    for (let i = 0; i < buttonsToRemove; i += 1) {
      innerBlocks.pop();
    }
  }

  replaceInnerBlocks(clientId, innerBlocks, false);
};

export default InnerBlockRange;
