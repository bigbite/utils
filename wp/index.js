/**
 * Check for WordPress and throw error if not found.
 * @param {string} message Message to be used if WordPress not found.
 * @throws Error
 * @returns bool
 */
export const requireWP = (message = null) => {
  if (!window.wp) {
    const messageString = message ?? `This utility requires WordPress functionality to work.`;
    throw new Error(messageString);
  }

  return true;
};

export default {
  requireWP,
};
