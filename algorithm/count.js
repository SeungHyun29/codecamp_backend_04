function countLetter(str) {
    let count = 0;
  //  str = str.toLowerCase() //모든 요소를 소문자로 변경
  //  str = str.toUpperCase() //모든 요소를 대문자로 변경
    for ( let i = 0; i <= str.length -1; i++){
    if(str[i] === "a" || str[i] === "A") {
        count++
    }
    }
    
    return count;
}

countLetter("I am from Korea");
countLetter("A day without laughter is a day wasted.")


















