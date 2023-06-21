const {add, subtract, multiply, divide} = require('./mathFunctions');
test('add(1, 2) adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
test('subtract(1, 2) subtracts 1 - 2 to equal -1', () => {
    expect(subtract(1, 2)).toBe(-1);
});
test('multiply(1, 2) multiplies 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
});
test('divide(1, 2) divides 1 / 2 to equal 0.5', () => {
    expect(divide(1, 0)).toBe(Infinity);
});