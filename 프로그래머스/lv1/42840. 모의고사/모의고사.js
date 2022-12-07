const PICKS = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
];

const getStringNumber = (answer, number) => {
    return answer.length > number.length ? number.join("").repeat(Math.ceil(answer.length / number.length))
                    : number.join("").slice(0, answer.length);
}

function solution(answers) {
    const [one, two, three] = PICKS;
    const strOne = getStringNumber(answers, one);
    const strTwo = getStringNumber(answers, two);
    const strThree = getStringNumber(answers, three);
    const answer = {
        1: 0,
        2: 0,
        3: 0
    }
    
    for (let i = 0; i < answers.length; ++i) {
        if (answers[i] == strOne[i]) {
            answer[1]++;
        }
        if (answers[i] == strTwo[i]) {
            answer[2]++;
        }
        if (answers[i] == strThree[i]) {
            answer[3]++;
        }
    }
    
    const max = Math.max(...Object.values(answer));
    return Object.keys(answer).reduce((acc, cur) => answer[cur] !== 0 && answer[cur] === max ? [...acc, Number(cur)] : [...acc], []).sort((a, b) => a - b);
}