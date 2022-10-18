function solution(clothes) {
    const clothesDict = clothes.reduce((acc, cur) => {
        acc[cur[1]] = (acc[cur[1]] || 0) + 1;
        return acc;
    }, {});
    
    let mul = 1;
    const clothesKeys = Object.keys(clothesDict);
    
    for (cloth of clothesKeys) {
        mul = mul * (clothesDict[cloth] + 1);
    }
    
    return mul - 1;
}