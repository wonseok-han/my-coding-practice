const MOVES = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0]
}

function solution(keyinput, board) {
    let position = [0, 0];
    const range = [(board[0] - 1) / 2, (board[1] - 1) / 2];
    
    for (input of keyinput) {
        const addHorizen = position[0] + MOVES[input][0];
        const addVertical = position[1] + MOVES[input][1];
        
        let x = addHorizen < -range[0] ? -range[0]
                : addHorizen > range[0] ? range[0]
                : addHorizen;
        let y = addVertical < -range[1] ? -range[1]
                : addVertical > range[1] ? range[1]
                : addVertical;
        
        position = [x, y];
    }
    
    return position;
}