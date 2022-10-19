function solution(num_list, n) {
    const answer = [];
    let item = [];
    
    for (let i = 0; i < num_list.length; ++i) {
        if ((i+1) % n === 0) {
            answer.push([...item, num_list[i]]);
            item = [];
        }
        else {
            item.push(num_list[i])
        }
    }

    return answer;
}