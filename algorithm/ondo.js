function temperature(num) {
    if(num >= 24) {
    return "조금 덥습니다"
    } else if(num >= 19 && num<=23) {
    return "날씨가 좋네요"
    } else if(num <= 18) {
    return "조금 춥네여"
    }
}

temperature(25)
temperature(22)
temperature(18)
