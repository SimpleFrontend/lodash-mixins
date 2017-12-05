import clearArray from '../src/clearArray';

it('should return a new empty array', () => {
  const arr = ['a', 'b', 'c'];
  const newArr = clearArray(arr);

  expect(arr).toEqual(['a', 'b', 'c']);
  expect(newArr).toEqual([]);
});
