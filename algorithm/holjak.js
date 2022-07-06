function evenOdd(num) {
    if(num === 0) {
      // 0이면 "Zero"
    return "Zero"
    } else if(num % 2 === 0) {
      // 짝수면 "Even"
    return "Even"
    } else if(num % 2 === 1) {
      // 홀수면 "Odd"
    return "Odd"
    }
}

evenOdd(12)
evenOdd(5)
evenOdd(0)