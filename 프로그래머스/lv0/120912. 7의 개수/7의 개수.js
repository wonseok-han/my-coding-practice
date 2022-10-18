function solution(array) {
    const replaced = array.join("").replace(/7/g, "");
    return array.join("").length - replaced.length;
}