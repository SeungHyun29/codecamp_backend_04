// 여기어때 크롤링 위법 사례: https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/

import puppeteer from 'puppeteer'

async function startCrawling() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720 }) //다 시간이 걸리는 작업들이라 await 해 줘야 됨
    await page.goto("https://finance.naver.com/item/sise.naver?code=005930") //페이지로 이동
    await page.waitForTimeout(1000) //html 코드가 페이지에 저장됨
    const framPage = await page.frames().find((el) => el.url().includes("/item/sise_day.naver?code=005930"))

    for(let i = 3; i<=7; i++) {
        const date = await framPage.$eval(
            `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`, 
            (el) => el.textContent
        )
    
        const price = await framPage.$eval(
            `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,
            (el) => el.textContent
        )
    
        console.log(`날짜: ${date}, 가격: ${price}`)

    }

    

    await browser.close()

    
}

startCrawling()