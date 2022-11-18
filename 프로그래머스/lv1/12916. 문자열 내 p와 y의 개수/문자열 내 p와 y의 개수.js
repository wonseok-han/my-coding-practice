function solution(s){
    return s.replace(/[p]/gi, "").length === s.replace(/[y]/gi, "").length;
}