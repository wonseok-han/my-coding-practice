function solution(a, b, n) {
    let acc = 0;
    let empty = n;
    
    while (true) {
        let kola = Math.floor(empty / a) * b;
        acc += kola;
        empty = kola + (empty % a);
        
        if (empty < a) break;
    }
    
    return acc;
}