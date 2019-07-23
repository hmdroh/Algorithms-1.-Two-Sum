var twoSum = function(nums, target) {

    for(var i =0; i < nums.length; i++){
        //nums[i]
        for(var j=i; j<nums.length; j++){
            // nums[j]
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
    return null;
};

console.log(twoSum([3,1,42,12], 13));
