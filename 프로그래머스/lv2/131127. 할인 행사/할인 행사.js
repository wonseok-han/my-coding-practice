function solution(want, number, discount) {
    const goal = {};
    const days = 10;
    let count = 0;
    
    for (let i = 0; i < want.length; ++i) {
        goal[want[i]] = number[i];
    }
    
    for (let index = 0; index <= discount.length - days; ++index) {
        const buy = {};
        
        for (let i = index; i < index + days; ++i) {
            let key = discount[i];
            if (!key) continue;

            buy[key] = !buy[key] ? 1 : buy[key] + 1;    
        }
        
        count = isMatched(goal, buy) ? count + 1 : count;
    }
    
    return count;
}

const isMatched = (goal, buy) => {
    let count = 0;
    for (key of Object.keys(goal)) {
        if (goal[key] === (buy[key] ?? 0)) {
            count++;
        }
    }
    
    return count === Object.keys(goal).length;
}