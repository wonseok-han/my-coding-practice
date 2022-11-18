function solution(nums) {
    const arr = [];
    
    for (let i = 0; i < nums.length - 2; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            for (let k = j + 1; k < nums.length; ++k) {
                arr.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    return arr.reduce((acc, cur) => {
        let cnt = 0;
        for (let i = 1; i <= cur; ++i) {
            if (cur % i === 0) {
                cnt++;
            }
            
            if (cnt > 2) break;
        }
        
        return cnt > 2 ? acc : acc + 1;
    }, 0);
}