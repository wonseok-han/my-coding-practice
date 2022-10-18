function solution(order) {
    return String(order).length - String(order).replace(/3|6|9/g, "").length;
}