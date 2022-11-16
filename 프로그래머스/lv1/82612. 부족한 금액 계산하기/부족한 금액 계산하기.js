function solution(price, money, count) {
    const total = [...new Array(count)].reduce((acc, cur, index) => acc + price * (index + 1), 0);
    
    return total - money < 1 ? 0 : total - money;
}