function solution(box, n) {
    const width = box[0];
    const vertical = box[1];
    const height = box[2];
    
    return Math.floor(width / n) * Math.floor(vertical / n) * Math.floor(height / n);
}