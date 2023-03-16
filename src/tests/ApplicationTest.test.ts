import addUtil from '../utils/addUtil';

describe('addNumber', () => {
  it('should add two numbers', () => {
    expect(addUtil(1, 2)).toBe(3);
  });
});
