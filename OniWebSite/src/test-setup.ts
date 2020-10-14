import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import 'jest-styled-components';
import 'unfetch/polyfill';

beforeAll(() => {
  Object.defineProperty(window, 'location', {
    value: {
      reload: jest.fn(),
      href: '',
    },
  });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 10000,
  });
});
