import data from '../../data/courses.json';

const numItems = data.length;

test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items to be greater than 11', () => {
  expect(numItems).toBeGreaterThan(11);
});

const dataTest = data[0].title;

test('There is a JS in this title', () => {
  expect(dataTest).toMatch(/JS/);
});

test('The title contains React', () => {
  expect(dataTest).toContain('React');
});