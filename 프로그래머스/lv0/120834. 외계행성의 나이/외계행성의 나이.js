function solution(age) {
    let newAge = {
        0 : "a",
        1 : "b",
        2 : "c",
        3 : "d",
        4 : "e",
        5 : "f",
        6 : "g",
        7 : "h",
        8 : "i",
        9 : "j"
    }
    
    let result = age + "";
    
    return result.split("").map((el) => newAge[el]).join("");
}

// 0-9 -> a-j 1:1로 대응
// split -> map으로 newAge elements로 바꾸고 join
