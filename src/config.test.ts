import { createConfig } from './config';

test('it returns immutatble object of config options', () => {
  const config = createConfig();
  expect(config).toBeInstanceOf(Object);
  expect(config).toHaveProperty(['apiUrl']);
  expect(Object.isFrozen(config)).toBe(true);
});
