// 여기어때 크롤링 위법 사례: https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/

import axios from 'axios'
import cheerio from 'cheerio'

async function createMessage() {
    // 1. 메시지에서 http로 시작하는 문장이 있는지 먼저 찾기

    // 2. 해당 문장에서 문장을 axios.get 요청해서 html 코드 받아오기 => 스크래핑
    const result= await axios.get("http://www.naver.com")

    // 3. 스크래핑 결과에서 OG(오픈그래프) 코드 골라내서 변수에 저장하기
    const $ = cheerio.load(result.data)
    $('meta').each((_, el) => {
        if( $(el).attr("property")?.includes("og:")) {  // ?는 앞에 거가 있으면 includes 해라 ? -> optional changing
            const key = $(el).attr("property") // og:title, og:description
            const value = $(el).attr("content")
            console.log(key,value)
        } //attr 속성 meta.name 같이 메타 뒤에 있는 애들 property인 애들 중에 og:인 애들

    }) //$('meta')데이터들 중에서 메타태그들만 골라 줘 .each는 치어리오에서 만든 함수 el 메타태그를 찍어서
}

createMessage()