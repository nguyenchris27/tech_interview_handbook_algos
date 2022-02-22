/**
 * @param {number[]} nums
 * @return {boolean}
 */

// USING HASHMAP //

//  const containsDuplicate = function(nums) {
//     let hashmap = {};
//     for(let i = 0; i < nums.length; i++) {
//         if(hashmap[nums[i]]) {
//             return true;
//         } hashmap[nums[i]] = 1;
//     } return false;
// };

// USING SORT
const containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            return true;
        }
    } return false;
};