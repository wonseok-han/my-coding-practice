function solution(n, lost, reserve) {
    const losted = lost.sort((a, b) => a - b).filter((item) => !reserve.includes(item));
    let reserved = reserve.sort((a, b) => a - b).filter((item) => !lost.includes(item));
    
    const rental = losted.reduce((acc, cur) => {
        let index = -1;
        
        if (reserved.indexOf(cur - 1) > -1) {
            index = reserved.indexOf(cur - 1);
        } else if (reserved.indexOf(cur + 1) > -1) {
            index = reserved.indexOf(cur + 1);
        }
        
        if (index > -1) {
            reserved = [
                ...reserved.slice(0, index),
                ...reserved.slice(index + 1, reserved.length),
            ];
        }

        return index > -1 ? [...acc, cur] : [...acc];
    }, []);
    
    return n - losted.length + rental.length;
}