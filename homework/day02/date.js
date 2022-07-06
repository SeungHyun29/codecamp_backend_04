function getToday() {
    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm = String(aaa.getMonth() +1).padStart(2,"0")
    const dd = String(aaa.getDate()).padStart(2,"0")
    const hour = aaa.getHours()
    const minutes = String(aaa.getMinutes()).padStart(2,"0")
    const mill = aaa.getMilliseconds(0-999)
    return `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${minutes}:${mill}입니다.`
}
    console.log(getToday())



