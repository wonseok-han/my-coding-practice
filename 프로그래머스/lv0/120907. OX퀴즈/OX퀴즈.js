function solution(quiz) {
    const results = quiz.reduce((acc, cur) => {
        const array = cur.trim().split(" ");
        const [operand1, operator, operand2, equal, answer] = array;
        let result = null;
        
        switch (operator) {
            case "+":
                result = Number(operand1) + Number(operand2);
                break;
            case "-":
                result = Number(operand1) - Number(operand2);
                break;
            case "*":
                result = Number(operand1) * Number(operand2);
                break;
            default:
                result = Number(operand1) / Number(operand2);
                break;
        }
        
        return [...acc, result == answer ? "O" : "X"]
    }, []);
    
    return results;
}