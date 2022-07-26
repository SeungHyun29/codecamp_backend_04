// 타입 추론
//우리가 안 알려 줘도 지가 추론할 수 있는 범위에서는
//타입 지정을 자동으로 해 줌
let aaa = "안녕하세요";
aaa = 3;

//타입 명시
let bbb: string = "반갑습니다";
bbb = 10;

// 타입 명시가 필요한 상황
let ccc: number | string = 1000;
ccc = "1000원";

// 숫자 타입
let ddd: number = 10;
ddd = "철수";

// 불린 타입
let eee: boolean = true;
eee = false;
eee = "false"; // 타입 지정 안 해 주면 true로 작동함

// 배열 타입
let fff: number[] = [1, 2, 3, 4, 5];
let ggg: string[] = ["철수", "영희"];
let hhh: (number | string)[] = ["2000", 2000];

// 객체 타입
interface Iprofile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string; // 앞에 물음표 붙여 주면 객체 안에 있을 수도 있고 없을 수도 있고 모르겠어~
}
const profile: Iprofile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};
profile.age = "8살";
profile.hobby = "수영";

// 함수 타입
const add = (money1: any, money2: number, unit: string): string => {
  return money1 + money2 + unit;
};
const result = add(1000, 2000, "원");

// any를 쓰면 타입을 뭘 써도 돼서 정확히 지정해 줘야 됨
