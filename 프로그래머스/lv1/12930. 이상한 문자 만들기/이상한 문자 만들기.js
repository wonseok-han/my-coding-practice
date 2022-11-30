function solution(s) {
    return s.toLowerCase().split(" ").reduce((acc, cur) => {
        const str = [];
        
        if (!cur) {
            return [
                ...acc,
                ""
            ];
        }
        
        for (let i = 0; i < cur.length; ++i) {
            str.push(i % 2 === 0 ? cur[i].toUpperCase() : cur[i]);    
        }
        
        return [
            ...acc,
            [...str].join("")
        ]
    }, []).join(" ");
}