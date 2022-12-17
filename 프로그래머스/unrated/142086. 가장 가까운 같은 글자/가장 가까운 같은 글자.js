function solution(s) {
    return s.split("").reduce((acc, cur, index) => {
        const [positions, string] = acc;
        
        return [
            [
                ...positions,
                string.lastIndexOf(cur) == -1 ? -1 : (index - string.lastIndexOf(cur))
            ],
            [...string, cur]
        ]
    }, [[], []])[0];
}