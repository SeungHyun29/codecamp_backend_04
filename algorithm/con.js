function boolean(input1, input2) {
    // 둘 중 하나라도 true면 "true"
    if(input1 === true || input2 === true) {
        return "true"
    // 둘 다 false라면 "false"
    } else if (input1 === false && input2 === false) {
        return "false"
    }
    
}

boolean(true,false)
boolean(false,true)
boolean(false,false)