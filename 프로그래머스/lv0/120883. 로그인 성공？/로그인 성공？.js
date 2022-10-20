function solution(id_pw, db) {
    const dbObj = db.reduce((acc, cur) => ({
        ...acc,
        [cur[0]]: cur[1],
    }), {})
    const [inputId, inputPw] = id_pw;
    
    return dbObj[inputId] == null ? "fail"
            : dbObj[inputId] !== inputPw ? "wrong pw"
            : "login";
}