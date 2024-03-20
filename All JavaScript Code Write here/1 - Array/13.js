/* 

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

*/


// function moveZeroes(nums) {
//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== 0) {
//         [nums[i], nums[j]] = [nums[j], nums[i]]; // Destructuring assignment for swap
//         j++;
//       }
//     }
//   }
  
// // Example usage:
// //   const nums = [0, 1, 0, 3, 12];
// //   const nums = [1, 0, 1];
//   const nums = [0, 1, 0];
//   moveZeroes(nums);
//   console.log(nums); // Output: [1, 3, 12, 0, 0]
  



function moveZeroes(nums) {
    let nonZeroIndex = 0; // Pointer to keep track of the position where the next non-zero element should be placed
    
    
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] !== 0) {
            
            let temp = nums[i];
            nums[i] = nums[nonZeroIndex];
            nums[nonZeroIndex] = temp;
            nonZeroIndex++; // Move the nonZeroIndex pointer forward
        }
    }
}

// Example usage:
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

let nums2 = [1, 0, 1];
moveZeroes(nums2);
console.log(nums2); // Output: [0]
