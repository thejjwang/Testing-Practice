// return the index of the 2 numbers that add up to the target
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            } else {
                console.log('no two numbers in the array ad up to the target')
            }
        }
    }
}
module.exports = twoSum;