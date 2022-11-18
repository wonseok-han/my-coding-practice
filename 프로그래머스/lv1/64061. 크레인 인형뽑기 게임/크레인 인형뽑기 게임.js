function solution(board, moves) {
    const basket = [];
    let copyBoard = [...board];
    let boomCnt = 0;
    
    for (move of moves) {
        let isPick = false;
        copyBoard = [...copyBoard.reduce((acc, cur) => {
            let copyCur = [...cur];
            let pickIndex = move - 1;
            
            if (!isPick && copyCur[pickIndex] !== 0) {
                if (basket.length > 0
                    && basket[basket.length - 1] === copyCur[pickIndex]) {
                    basket.pop();
                    boomCnt++;
                } else {
                    basket.push(copyCur[pickIndex]);
                }
                copyCur[pickIndex] = 0;
                isPick = true;
            }
            
            return [
                ...acc,
                copyCur
            ]
        }, [])];
    }
    
    return boomCnt * 2;
}