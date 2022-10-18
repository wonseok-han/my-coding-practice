function solution(cipher, code) {
    const list = [];
    
    for (let i = code; i <= cipher.length; i += code) {
        list.push(cipher[i - 1]);
    }
    
    return list.join("");
}