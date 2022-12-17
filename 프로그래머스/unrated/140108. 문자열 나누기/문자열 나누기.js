function solution(s) {
    const result = [];
    
    let first = 0;
    let other = 0;
    let index = 0;
    let firstCh = null;
    for (let i = 0; i < s.length; ++i) {
        firstCh = firstCh ?? s[i];
        firstCh === s[i] ? first++ : other++;
        
        if (first === other || i == s.length - 1) {
            result.push(s.slice(index, i + 1));
            first = 0;
            other = 0;
            index = i + 1;
            firstCh = null;
        }
    }
    
    return result.length;
}