function solution(cards) {
    const visited = {};
    
    const result = cards.reduce((acc, cur, index, array) => {
        const box = [];
        let number = cur;
        
        while (!visited[number]) {
            visited[number] = 1;
            box.push(number);
            number = array[number - 1];
        }
        
        return box.length > 0 ? [...acc, box] : [...acc];
    }, []).sort((a, b) => b.length - a.length);
    
   return result.length <= 1 ? 0 : result[0].length * result[1].length;
}