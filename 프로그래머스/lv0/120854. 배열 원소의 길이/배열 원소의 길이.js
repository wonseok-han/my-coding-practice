function solution(strlist) {
    return strlist.reduce((acc, cur) => [...acc, cur.length], []);
}