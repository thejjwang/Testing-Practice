const twoSum = require('./twoSum');
test('twoSum(arr, target) Given an array of integers nums and a target integer target, return indices of the two numbers such that they add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);});