function solution(number, limit, power) {
    return [...new Array(number)].reduce((acc, cur, index) => {
        const knight = index + 1;
        let cnt = 0;
        
        for (let i = 1; i <= Math.sqrt(knight); ++i) {
            if (knight % i === 0) {
                cnt++;
                if (knight / i != i) {
                    cnt++;
                }
            }
        }
        
        return acc + (cnt > limit ? power : cnt)
    }, 0);
}