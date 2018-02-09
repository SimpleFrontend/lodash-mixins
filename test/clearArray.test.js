import clearArray from '../src/clearArray';

it('should clean the array and return the results', () => {
    const arr = ['a', 'b', 'c'];
    const newArr = clearArray(arr);

    expect(arr).toEqual([]);
    expect(newArr).toEqual([]);
});
