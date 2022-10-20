function solution(board) {
    const copyBoard = [...board];
    
    const areaSet = (row, leftCellIndex, rightCellIndex) => {
        for (let cell = 0; cell < board[row].length; ++cell) {
            if (cell >= leftCellIndex && cell <= rightCellIndex) {
                if (copyBoard[row][cell] !== 1) {
                    copyBoard[row][cell] = 2;    
                }
            }
        }
    }
    
    for (let row = 0; row < copyBoard.length; ++row) {
        const boomCells = copyBoard[row].map((value, index) => ({value, index})).filter((item) => item.value === 1);
        
        for (let i = 0; i < boomCells.length; ++i) {
            const boomCellIndex = boomCells[i].index;
            const rightCellIndex = boomCellIndex === copyBoard[row].length - 1 ? copyBoard[row].length - 1 : boomCellIndex + 1;
            const leftCellIndex = boomCellIndex === 0 ? 0 : boomCellIndex - 1;
            const topRow = row > 0 ? row - 1 : row;
            const bottomRow = row === copyBoard.length - 1 ? row : row + 1;

            if (boomCellIndex > -1) {
                areaSet(row, leftCellIndex, rightCellIndex);
                areaSet(topRow, leftCellIndex, rightCellIndex);
                areaSet(bottomRow, leftCellIndex, rightCellIndex);
            }            
        }
    }
    
    return copyBoard.reduce((acc, cur) => acc.concat(cur)).filter((item) => item === 0).length;
}