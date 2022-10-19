function solution(my_str, n) {
    const answer = [];
    
    for (let i = 0; i < my_str.length; i += n) {
        if (my_str.length - i < n) {
            answer.push(my_str.slice(i));
        }
        else {
            answer.push(my_str.substr(i, n));
        }
    }
    
    return answer;
}