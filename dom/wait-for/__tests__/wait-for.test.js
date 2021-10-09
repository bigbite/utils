import waitFor from './../index';
describe('waitFor functionality.', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('waitFor callback does not execute until after node creation.', () => {
    const mockFn = jest.fn((node) => {
      expect(node.getAttribute('class')).toBe('test-item');
    });

    waitFor('.test-item', mockFn);

    const testElement = document.createElement('div');
    testElement.classList.add('test-item');
    document.body.appendChild(testElement);
  });

  test('waitFor callback executes if the node exists before call.', () => {
    const mockFn = jest.fn((node) => {
      expect(node.getAttribute('class')).toBe('test-item');
    });

    const testElement = document.createElement('div');
    testElement.classList.add('test-item');
    document.body.appendChild(testElement);

    waitFor('.test-item', mockFn);
  });

  test('waitFor callback executes for subsequent calls.', async () => {
    expect.assertions(2);

    const mockFn = jest.fn((node) => {
      expect(node).toEqual(expect.any(HTMLDivElement));
    });

    waitFor('.test-item-sub', mockFn, false);

    const testElement = document.createElement('div');
    testElement.classList.add('test-item-sub');
    testElement.textContent = 'New test item element';
    document.body.appendChild(testElement);

    // Hack to prevent jest running through all test content before
    // assertion or callback hit is to set a timeout with 0ms.
    await new Promise((res) => setTimeout(res, 0));

    const anotherElement = document.createElement('span');
    anotherElement.classList.add('inner-element-test');
    anotherElement.textContent = 'with inner html.';
    testElement.appendChild(anotherElement);
  });
});
