function solution(n) {
    const list = [];
    let answer = 0;
    
    for (index of Array(n).keys()) {
        const number = index + 1;
        const list = [];
        
        for (subIndex of Array(number).keys()) {
            const subNumber = subIndex + 1;
            if (number % subNumber === 0) {
                list.push(subNumber);
            }
        }
        
        if (list.length >= 3) {
            answer++;
        }
    }
    
    return answer;
}