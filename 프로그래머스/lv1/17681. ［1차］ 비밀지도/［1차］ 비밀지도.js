function solution(n, arr1, arr2) {
    return arr1.reduce((acc, cur, index) => {
        return [
            ...acc,
            [...arr2[index].toString(2).padStart(n, "0")].reduce((subAcc, subCur, subIndex) => {
                return subAcc + (subCur === "1" || cur.toString(2).padStart(n, "0")[subIndex] === "1" ? "#" : " ");
            }, "")
        ];
    }, [])
}