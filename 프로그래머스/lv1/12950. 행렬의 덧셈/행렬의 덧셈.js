function solution(arr1, arr2) {
    return arr1.reduce((acc, cur, index) => {
        const arr = [];
        for (let i = 0; i < cur.length; ++i) {
            arr.push(cur[i] + arr2[index][i])
        }
        
        return [
            ...acc,
            arr
        ];
    }, []);
}