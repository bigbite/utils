import delegate from '../index';

describe('delegate functionality.', () => {
  beforeEach(() => {
    const childElement = document.createElement('span');
    childElement.classList.add('child-item');

    const parentElement = document.createElement('button');
    parentElement.classList.add('parent-item');
    parentElement.appendChild(childElement);

    document.body.appendChild(parentElement);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('parent exists to delegate to.', () => {
    expect.assertions(1);

    const clickEvent = (event) => {
      if (delegate(event.target, '.child-item')) {
        expect(true).toBe(true);
      }

      // Remove event listener for next test.
      document.documentElement.removeEventListener('click', clickEvent, false);
    };

    document.documentElement.addEventListener('click', clickEvent);

    const mEvent = new MouseEvent('click', { bubbles: true });
    document.querySelector('.child-item').dispatchEvent(mEvent);
  });

  test('grandparent does not exist.', () => {
    expect.assertions(1);

    const clickEvent = (event) => {
      if (delegate(event.target, '.child-item')) {
        expect(true).toBe(true);
      }

      // Remove event listener for next test.
      document.documentElement.removeEventListener('click', clickEvent, false);
    };

    document.documentElement.addEventListener('click', clickEvent);

    const mEvent = new MouseEvent('click', { bubbles: true });
    document.querySelector('.child-item').dispatchEvent(mEvent);
  });

  test('child is the current clicked item.', () => {
    expect.assertions(1);

    const clickEvent = (event) => {
      if (delegate(event.target, '.child-item')) {
        expect(true).toBe(true);
      }

      // Remove event listener for next test.
      document.documentElement.removeEventListener('click', clickEvent, false);
    };

    document.documentElement.addEventListener('click', clickEvent);

    const mEvent = new MouseEvent('click', { bubbles: true });
    document.querySelector('.child-item').dispatchEvent(mEvent);
  });
});
