/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
    let seenMap = {};
    let result = [];
    console.log(seenMap);
    for(let i = 0; i < nums.length; i++){
        let need = target-nums[i];
        if (seenMap[need] !== undefined) {
            result.push(seenMap[need], i)
            return result;
        } seenMap[nums[i]] = i;
    }
}