// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const number1 = document.getElementById("PhoneNumber01").value
  const number2 = document.getElementById("PhoneNumber02").value
  const number3 = document.getElementById("PhoneNumber03").value
  const myphone = number1 + number2 + number3

  await axios.post ('http://localhost:3000/tokens/phone',{
    myphone : myphone
}).then((res)=>{
  console.log(res)
})
  
  console.log('인증 번호 전송')
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value
  const prefer = document.getElementById("SignupPrefer").value
  const email = document.getElementById("SignupEmail").value

  await axios.post ('http://localhost:3000/users', {
    myuser : {
      name: name,
      prefer: prefer,
      email: email
    }
  }).then((res) => {
    console.log(res)
  })
  console.log('회원 가입 이메일 전송')
}
