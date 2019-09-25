const pass = require('./pass');

describe('pass Travis', () => {
  it('pass', () => {
    const num = 1;
    const num2 = 2;

    expect(pass.testing(num, num2)).toBe(3);
  });
});