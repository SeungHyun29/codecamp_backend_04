import puppeteer from 'puppeteer'

async function startCrawling() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720 }) //다 시간이 걸리는 작업들이라 await 해 줘야 됨
    await page.goto("https://www.goodchoice.kr/product/search/2") //페이지로 이동
    await page.waitForTimeout(1000) //html 코드가 페이지에 저장됨
    
    const stage = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
        (el) => (el.textContent)) //저장된 페이지에 있는 html 코드에 있는 거를 $eval로 뽑아낼 수 있음

    const location = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
        (el) => (el.textContent))

    const price = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
        (el) => (el.textContent))
    
    console.log(stage)
    console.log(location.trim())
    console.log(price)

    await browser.close()
    
}

startCrawling()