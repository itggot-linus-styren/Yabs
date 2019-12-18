import convert from '../convertNestedToArray';

describe('convertNestedToArray.ts', () => {
  it('converts from nested to array correctly', () => {
    const nested = {
      '1': {id: '1', name: 'Harry Potter'},
      '2': {id: '2', name: 'The hunger games'},
      '3': {id: '3', name: 'Lord of the rings'},
    };

    const array = [
      {id: '1', name: 'Harry Potter'},
      {id: '2', name: 'The hunger games'},
      {id: '3', name: 'Lord of the rings'},
    ];

    expect(convert(nested)).toEqual(array);
  });
});
  