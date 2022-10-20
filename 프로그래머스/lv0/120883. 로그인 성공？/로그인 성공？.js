function solution(id_pw, db) {
    const dbObj = db.reduce((acc, cur) => ({
        ...acc,
        [cur[0]]: cur[1],
    }), {})
    const inputId = id_pw[0];
    const inputPw = id_pw[1];
    
    return dbObj[inputId] == null ? "fail"
            : dbObj[inputId] !== inputPw ? "wrong pw"
            : "login";
}