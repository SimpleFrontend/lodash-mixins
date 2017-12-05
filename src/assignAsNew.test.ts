import assignAsNew from './assignAsNew';

test('assignAsNew should return a new object without mutating the orginal one', () => {
  const object = { a: 'x', b: 'y' };
  const newObject = assignAsNew(object, { b: 'z' }, { d: 'k' });

  expect(object.b).toEqual('y');
  expect(newObject.b).toEqual('z');
  expect(newObject.d).toEqual('k');
});
