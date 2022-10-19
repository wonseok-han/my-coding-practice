function solution(spell, dic) {
    const found = dic.find((word) => word.split("").sort().join("").includes(spell.sort().join("")));
    
    return found ? 1 : 2;
}