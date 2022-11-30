function solution(dartResult) {
    const stack = [];
    return dartResult.split("").reduce((acc, cur, index) => {
        let number = 0;
        
        if (stack.length < 1 && !isNaN(cur)) {
            stack.push(cur);
            return [...acc];
        } else {
            if (!isNaN(cur)) {
                stack.push(Number(String(stack.pop()) + cur));
                return [...acc];
            }
            
            switch (cur) {
                case "S":
                    number = Math.pow(stack.pop(), 1);
                    break;
                case "D":
                    number = Math.pow(stack.pop(), 2);
                    break;
                case "T":
                    number = Math.pow(stack.pop(), 3);
                    break;
                case "*":
                    if (acc.length > 1) {
                        acc[acc.length - 2] = acc[acc.length - 2] * 2;
                    }
                    number = acc.pop() * 2;
                    break;
                case "#":
                    number = acc.pop() * -1;
                    break;
                default:
                    break;
            }
        }
        
        return [
            ...acc,
            number
        ];
    }, []).reduce((acc, cur) => acc + cur, 0);
}