function solution(A, B) {
    let copyA = [...A];
    let answer = 0;
    
    for (let i = 0; i < A.length; ++i) {
        if (copyA.join("") === B) break;
        
        copyA = [
            ...copyA.slice(copyA.length - 1, copyA.length),
            ...copyA.slice(0, copyA.length - 1)
        ];
        answer++;
    }
    
    return answer === A.length ? -1 : answer;
}