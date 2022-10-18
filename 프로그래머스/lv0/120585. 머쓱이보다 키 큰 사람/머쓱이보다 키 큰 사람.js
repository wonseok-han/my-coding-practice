function solution(array, height) {
    let count = 0;
    for (item of array) {
        if (item > height) {
            count++;
        }
    }
    
    return count;
}