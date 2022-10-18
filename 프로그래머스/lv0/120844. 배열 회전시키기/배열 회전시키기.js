function solution(numbers, direction) {
    if (direction === "right") {
        return [
            ...numbers.slice(-1),
            ...numbers.slice(0, numbers.length - 1),
        ];
    }
    else {
        return [
            ...numbers.slice(1, numbers.length),
            ...numbers.slice(0, 1),
        ];
    }
}