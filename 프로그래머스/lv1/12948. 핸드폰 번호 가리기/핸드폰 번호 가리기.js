function solution(phone_number) {
    let prefix = phone_number.slice(0, phone_number.length - 4).replace(/[0-9]/g, "*");
    const postfix = phone_number.slice(phone_number.length - 4, phone_number.length);
    return prefix + postfix;
}