function grade(score) {
    if(100 < score || 0 > score) {
        return "잘못된 점수입니다"
    }
    let answer = '';
    if(90 <= score) {
      // 100, 99, ..., 90
        answer = "A"
    } else if(80 <= score) {
      // 89,88 ..., 80
        answer = "B"
    } else if(770 <= score) {
        answer = "C"
    } else if(60 <= score) {
        answer = "D"
    } else {
        answer = "F"
    }
    return answer
}

grade(105)
grade(-1)
grade(100)
grade(58)