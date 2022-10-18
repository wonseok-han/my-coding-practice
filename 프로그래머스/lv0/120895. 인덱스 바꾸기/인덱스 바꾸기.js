function solution(my_string, num1, num2) {
    const splited = my_string.split("");
    
    return [
        ...splited.slice(0, num1),
        splited[num2],
        ...splited.slice(num1+1, num2),
        my_string[num1],
        ...splited.slice(num2 + 1),
    ].join("");
}