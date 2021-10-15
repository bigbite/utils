import { requireWP } from '../index';

describe('requireWP functionality.', () => {
  test('requireWP throws an error when window.wp not available.', () => {
    expect(requireWP).toThrow(Error);
  });

  test('requireWP throws error with custom message.', () => {
    expect.assertions(1);

    try {
      requireWP('This is required.');
    } catch (e) {
      expect(e.message).toBe('This is required.');
    }
  });

  test('requireWP should not throw an error when window.wp found.', () => {
    window.wp = {};

    expect(requireWP).not.toThrow(Error);

    delete window.wp;
  });
});
