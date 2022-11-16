function solution(nums) {
    const choiceCnt = nums.length / 2;
    const remoceDupl = Math.floor([...new Set(nums)].length);
    
    return remoceDupl < choiceCnt ? remoceDupl : choiceCnt;
}