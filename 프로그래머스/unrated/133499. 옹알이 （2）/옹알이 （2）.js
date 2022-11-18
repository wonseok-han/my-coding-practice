function solution(babbling) {
    return babbling.reduce((acc, cur) => {
        const replaced = cur.replace(/(ayaaya|yeye|woowoo|mama)/g, "ㅌㅌ")
                            .replace(/^(aya|ye|woo|ma)+$/g, "");
        
        return acc + (replaced.length > 0 ? 0 : 1);
    }, 0)
}