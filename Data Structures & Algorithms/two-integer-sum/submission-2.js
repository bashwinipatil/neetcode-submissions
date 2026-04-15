class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //Brute Force O(n²) — Not Optimal
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if((nums[i] + nums[j]) == target){
                    return [i,j];
                }
            }
        }

        // Two Pointer - Time O(n) 
        /*nums.sort((a,b) => a-b); //Two pointers ONLY works if array is sorted
        let left = 0;
        let right = nums.length-1;
        while(left < right){
            let sum = nums[left]+nums[right];
            if(sum == target){
                return [left, right];
            } else if(sum < target){
                left++;
            } else {
                right--;
            }
        }*/
    }
}
