interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// interface IProfile {
//   apple: number;
// }
// // interface는 선언 병합이 가능함

// type AAA = {
//   name: string;
//   age: number;
//   school: string;
//   hobby?: string;
// };

//
//
// 1. Partial 타입 다 있어도 되고 없어도 되는 애들이라고 하는 거
type Mytype = Partial<IProfile>;
// 2. Required 타입 다 있어야 되는 애들이야
type Mytype2 = Required<IProfile>;
// 3. Pick 타입 고르고 싶은 거 고르는 거임
type Mytype3 = Pick<IProfile, "name" | "age">;
// 4. Qmit 타입 IProfile에서 빼고 싶은 것만 빼는 거
type Mytype4 = Omit<IProfile, "school">;
// 5. Record 타입
type ZZZ = "aaa" | "qqq" | "rrr"; // union 타입
// 유니온 각각에 대해서 타입을 대응하는 거
type Mytype5 = Record<ZZZ, string>;

// 만약, union 타입을 만드려면...??
let zzz: ZZZ; // "aaa" | "qqq" | "rrr"
zzz === "";

let qqq: keyof IProfile; // "name" | "age" | "school" | "hobby"
qqq === "";
