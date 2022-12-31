function solution(t, p) {
    return [...t].reduce((acc, cur, index) => {
        let number = Number(t.slice(index, index + p.length));
        
        if (index <= t.length - p.length && number <= Number(p)) {
            return [
                ...acc,
                number
            ];
        } else {
            return [
                ...acc,
            ];           
        }
    }, []).length;
}