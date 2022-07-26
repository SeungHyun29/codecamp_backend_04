import { UserService } from './services/user.service.js'

export class UserController {

    userSignup = async (req, res) => {
        const openGraph = await getOpenGraph(req.body.prefer)
        const change = await changeNumber(req.body.personal)
    
        // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            personal: change,
            prefer: req.body.prefer,
            pwd: req.body.pwd,
            phone: req.body.phone,
            og: openGraph
    
        })
    
        const result1 = await Token.findOne({phone: req.body.phone})
        const { email, name } = await req.body
    
        // 1. 이메일이 정상인지 확인 (1-존재여부, 2-"@"포함 여부")
        const userService = new UserService();
        const isValid = userService.checkValidationEmail(email)
        if(isValid === false) return
        
    
        // 2. 가입환영 템플릿 만들기
        const mytemplate = userService.getWelcomeTemplate({name})
    
    
        console.log(result1)
        if (result1 === null || result1.isAuth === false) {    
            res.status(422).send("에러!! 핸드폰 번호가 인증되지 않습니다.")
        } else {
            await Token.updateOne({phone: req.body.phone},{isAuth: true})
            // res.send(true)
            await user.save()
            // 3. 이메일에 가입 환영 템플릿 전송하기
            await userService.sendTemplateToEmail(email, mytemplate)
    
             // 2. 저장 결과 응답 주기
            const id = await User.findOne({phone: req.body.phone})
            res.send(id._id)
        }
    }
    
}