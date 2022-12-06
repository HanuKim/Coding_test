function solution(phone_number) {
    const arr = phone_number.length - 4;
    return "*".repeat(arr) + phone_number.slice(-4);
    return answer;
}

// 문자열에서 뒷 4자리를 분리하고
// 앞 자리는 전부 *로 변환

