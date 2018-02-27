import data from '../../data/courses.json';


// Numbers
describe('Number tests', () => {
  const numItems = data.length;
  test('Number of items = 12', () => {
    expect(numItems).toBe(12);
  });

  test('Number of items to be greater than 11', () => {
    expect(numItems).toBeGreaterThan(11);
  });
});

// Strings
describe('Strings tests', () => {
  const dataTest = data[0].title;

  test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });
});

// Arrays
describe('Array tests', () => {
  const data2 = ['React Native', 'MeteorJS'];

  test('The list of courses mentions React native and MeteorJS', () => {
    expect(['React Native', 'MeteorJS', 'React']).toEqual(expect.arrayContaining(data2));
  });
});

// Objects
describe('Object tests', () => {
  test('The first course to have a property of Title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course to have a property of Views and 31,266 views', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});

