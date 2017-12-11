import clearArray from '../src/clearArray';
import _ from '../src';

it('should clean the array and return the results', () => {
  const arr = ['a', 'b', 'c'];
  const newArr = clearArray(arr);

  expect(arr).toEqual([]);
  expect(newArr).toEqual([]);
});

test('function should be defined from the imports', () => {
  expect(_.clearArray).toBeDefined();
});
