import convert from '../convertArrayToNested';

describe('convertArrayToNested.ts', () => {
  it('converts from array to nested correctly', () => {
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

    expect(convert(array, 'id')).toEqual(nested);
  });

  it('convert empty array to empty object', () => {
    expect(convert([], 'id')).toEqual({});
  });

});
  