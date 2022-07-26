const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]

function myPage(category) {
let count = 0;
let amount = 0;
let grade = '';
for (let i = 0; i < myShopping.length; i++) {
if(myShopping[i].category === category) {
    count++;
    amount += myShopping[i].price;
}
}
if(5 <= count) {
    grade = "Gold"
} else if (3<= count) {
    grade = "Silver"
} else {
    grade = "Bronze"
}

console.log(count, amount, grade)
return `${category}를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다`
}

myPage("의류")