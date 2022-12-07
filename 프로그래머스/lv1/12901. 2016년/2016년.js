const DAYS = ["SAT", "SUN", "MON" ,"TUE" ,"WED" ,"THU" ,"FRI"];

function solution(a, b) {
    return DAYS[new Date("2016", a - 1, b + 1).getDay()];
}