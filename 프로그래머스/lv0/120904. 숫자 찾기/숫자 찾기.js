function solution(num, k) {
    const position = String(num).indexOf(k);
    return position > -1 ? position + 1 : -1;
}