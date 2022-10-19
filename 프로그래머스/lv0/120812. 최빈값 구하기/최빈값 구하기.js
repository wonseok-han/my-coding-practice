function solution(array) {
    const map = array.reduce((acc, cur) => ({
            ...acc,
            [cur]: acc[cur] == undefined ? 1 : acc[cur] + 1,
    }), {})
    const maxKeys = Object.keys(map).filter((key) => map[key] === Math.max(...Object.values(map)));
    let answer = maxKeys.length > 1 ? -1 : Number(maxKeys[0]);
    
    return answer;
}