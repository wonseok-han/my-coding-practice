function solution(food) {
    const foods = food.reduce((acc, cur, index) => {
        let str = "";
        let floorFood = cur;
        const halfLength = acc.length - acc.length / 2;
        
        if (cur % 2 !== 0) {
            floorFood -= 1;
        }
        for (let i = 0; i < floorFood; ++i) {
            str += index;
        }
        
        return acc.slice(0, halfLength) + str + acc.slice(halfLength, acc.length);
    }, "");
    const halfLength = foods.length - foods.length / 2;
    
    return [
        ...foods.slice(0, halfLength),
        0,
        ...foods.slice(halfLength, foods.length)
    ].join("");
}