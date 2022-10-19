function solution(i, j, k) {
    const numbers = [];
    for (let index = i; index <= j; ++index) {
        numbers.push(index);
    }
    
    return numbers.join("").length - numbers.join("").replace(new RegExp(k, "gi"), "").length;
}