import axios from 'axios'

// 1. 비동기 방식
function fetchPost() {
    const result = axios.get("http://koreanjson.com/posts/1")
    console.log('비동기 방식: ', result) // Promise { <pending> }
} 

fetchPost()

// 2. 동기 방식
async function fetchPost2() {
    const result = await axios.get("http://koreanjson.com/posts/1")
                        // fetch("http://koreanjson.com/posts/1")
    console.log('동기방식: ', result.data) // 정상적인 데이터
}

fetchPost2()