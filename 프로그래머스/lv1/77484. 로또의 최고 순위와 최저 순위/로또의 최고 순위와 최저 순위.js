const WIN = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5
}

function solution(lottos, win_nums) {
    const sameCnt = lottos.filter((number) => win_nums.includes(number)).length;
    const zeroCnt = lottos.filter((number) => number === 0).length;
    
    return [WIN[sameCnt + zeroCnt] ?? 6, WIN[sameCnt] ?? 6];
}