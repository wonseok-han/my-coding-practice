function solution(my_string) {
    return my_string.replace(new RegExp("[A-Za-z]", "gi"), "|").split("|").filter((item) => item).reduce((acc, cur) => acc + Number(cur), 0);   
}