const getCoupon = (benefits, chance, other) => {
    const nextChance = Math.floor(chance / 10) + (other == null ? 0 : Math.floor(other / 10));
    const otherChicken = chance % 10 + (other == null ? 0 : Math.floor(other % 10));
    const benifit = benefits + nextChance;
    
    return chance + other < 10 ? benifit : getCoupon(benifit, nextChance, otherChicken);
}

function solution(chicken) {
    return getCoupon(0, chicken);
}