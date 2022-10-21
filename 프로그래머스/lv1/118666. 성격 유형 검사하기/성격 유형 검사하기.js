const CATEGORIES = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"]    
];

const CHOICES = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3
};

function solution(survey, choices) {
    const results = survey.reduce((acc, cur, index) => {
        const [negative, positive] = cur.split("");
        const key = choices[index];
        
        if (key < 4) {
            return {
                ...acc,
                [negative]: acc[negative] == undefined ? CHOICES[key] : acc[negative] + CHOICES[key]
            };
        }
        else if (key > 4) {
            return {
                ...acc,
                [positive]: acc[positive] == undefined ? CHOICES[key] : acc[positive] + CHOICES[key]
            };
        }
        else {
            return {...acc};
        }
    }, []);
    
    const finalCategories = CATEGORIES.reduce((acc, cur) => {
        const [a, b] = cur.sort();
        const scoreA = results[a] == undefined ? 0 : results[a];
        const scoreB = results[b] == undefined ? 0 : results[b];
        
        return [
            ...acc,
            scoreA >= scoreB ? a : b
        ];
    }, []);
    
    return finalCategories.join("");
}