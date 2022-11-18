const FIX = {
    left: [1, 4, 7],
    right: [3, 6, 9 ]
};
const NUMBERS = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"]
];

const getDistance = (a, b) => {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function solution(numbers, hand) {
    const currentPosition = {
        left: [4, 1],
        right: [4, 3]
    };
    
    return numbers.reduce((acc, cur) => {
        let finger = "";
        const next = NUMBERS.reduce((positionAcc, positionCur, positionIndex) => {
            const foundIndex = positionCur.indexOf(cur);
            return foundIndex > -1 ? [positionIndex + 1, foundIndex + 1] : positionAcc
        }, []);
        
        if (FIX.left.includes(cur)) {
            finger = "L";
            currentPosition["left"] = [...next];
        } else if (FIX.right.includes(cur)) {
            finger = "R";
            currentPosition["right"] = [...next];
        } else {
            const distanceLeft = getDistance(next, currentPosition.left);
            const distanceRight = getDistance(next, currentPosition.right);
            
            if (distanceLeft < distanceRight) {
                finger = "L";
                currentPosition["left"] = [...next];
            } else if (distanceLeft > distanceRight) {
                finger = "R";
                currentPosition["right"] = [...next];
            } else {
                finger = hand.slice(0, 1).toUpperCase();
                currentPosition[hand] = [...next];
            }
        }
        
        return acc + finger;
    }, []);
}