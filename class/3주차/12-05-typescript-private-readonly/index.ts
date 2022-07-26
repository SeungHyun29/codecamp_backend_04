// public, private, protected, readonly

// // 1. public 모든 게 다 가능하다
// class Aaa1 {
//     constructor(public mypower) {
//         // this.mypower = mypower; // public,private,readonly 등 한 개만 포함되면 자동으로 세팅됨
//     }
//     ggg() {
//         console.log(this.mypower) // 안에서 접근 가능
//         this.mypower = 10 // 안에서 수정 가능
//     }
// }

// class Aaa2 extends Aaa1 {
//     ggg() {
//         console.log(this. mypower) // 안에서 자식이 접근 가능
//         this.mypower = 10 // 자식이 수정도 가능
//     }
// }

// const aaaa = new Aaa2(50)
// console.log(aaaa.mypower) // 밖에서도 접근 가능
// aaaa.mypower = 10 // 밖에서 수정도 가능

//
//
//
//
//
// //
// // 2. protected 밖에서는 접근, 수정 안 된다
// class Aaa1 {
//     constructor(protected mypower) {
//         // this.mypower = mypower; // public,protected,private,readonly 등 한 개만 포함되면 자동으로 세팅됨
//     }
//     ggg() {
//         console.log(this.mypower) // 안에서 접근 가능
//         this.mypower = 10 // 안에서 수정 가능
//     }
// }

// class Aaa2 extends Aaa1 {
//     ggg() {
//         console.log(this. mypower) // 안에서 자식이 접근 가능
//         this.mypower = 10 // 자식이 수정도 가능
//     }
// }

// const aaaa = new Aaa2(50)
// console.log(aaaa.mypower) // 밖에서 접근 불가능
// aaaa.mypower = 10 // 밖에서  수정 불가능

// //
// //
// //
// //
// //
// //
// // 3. private
// class Aaa1 {
//     constructor(private mypower) {
//         // this.mypower = mypower; // public,protected,private,readonly 등 한 개만 포함되면 자동으로 세팅됨
//     }
//     ggg() {
//         console.log(this.mypower) // 안에서 접근 가능
//         this.mypower = 10 // 안에서 수정 가능
//     }
// }

// class Aaa2 extends Aaa1 {
//     ggg() {
//         console.log(this. mypower) // 안에서 자식이 접근 불가능
//         this.mypower = 10 // 자식이 수정도 불가능
//     }
// }

// const aaaa = new Aaa2(50)
// console.log(aaaa.mypower) // 밖에서 접근 불가능
// aaaa.mypower = 10 // 밖에서  수정 불가능

//
//
//
//
//
//
// 4. readonly
class Aaa1 {
  constructor(readonly mypower) {
    // this.mypower = mypower; // public,protected,private,readonly 등 한 개만 포함되면 자동으로 세팅됨
  }
  ggg() {
    console.log(this.mypower); // 안에서 접근 가능
    this.mypower = 10; // 안에서 수정 불가능
  }
}

class Aaa2 extends Aaa1 {
  ggg() {
    console.log(this.mypower); // 안에서 자식이 접근 가능
    this.mypower = 10; // 자식이 수정도 불가능
  }
}

const aaaa = new Aaa2(50);
console.log(aaaa.mypower); // 밖에서 접근 가능
aaaa.mypower = 10; // 밖에서  수정 불가능
