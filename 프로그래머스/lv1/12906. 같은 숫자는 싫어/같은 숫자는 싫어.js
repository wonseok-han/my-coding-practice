function solution(arr)
{
    const answer = [];
    
    for (item of arr) {
        if (answer.length === 0) {
            answer.push(item);
        }
        else {
            const pop = answer.pop();
            answer.push(pop);
            if (pop !== item) {
                answer.push(item);
            }
        }
        
    }
    
    return answer;
}