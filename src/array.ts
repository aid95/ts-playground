const nums: number[] = [];

nums[0] = 1;
nums[1] = 2;
nums[2] = 3;

// O(1)
nums.push(4);
nums.push(5);

// O(n)
nums.unshift(0);
nums.unshift(-1);

// O(n)
nums.splice(4, 1);

console.log(nums);
