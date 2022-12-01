function solution(num, k) {
  var answer = 0; 
    const kIndex = String(num).indexOf(String(k))
    if (kIndex === -1){
        answer = kIndex
        return answer
    }
    answer = kIndex + 1;
    return answer;
}
 
// 정수 num을 문자열로 변환 -> 자릿수 인식 
// findIndex 함수 