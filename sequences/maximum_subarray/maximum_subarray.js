/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }

    let currentMax = nums[0];
    let globalMax = nums[0];

    for (i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], nums[i] + currentMax)
        if (currentMax > globalMax) {
            globalMax = currentMax;
        }
    } return globalMax;
}