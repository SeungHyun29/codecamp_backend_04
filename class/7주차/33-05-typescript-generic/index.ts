// 1. 문자
function getString(arg: string): string {
  return arg;
}
const result1 = getString("철수");

// 2. 숫자
function getNumber(arg: number): number {
  return arg;
}
const result2 = getNumber(8);

// 3. any 타입
function getAny(arg: any): any {
  // 이거 쓰면 타입스크립트 쓰는 의미가 없어짐
  return arg;
}
const result31 = getAny("철수");
const result32 = getAny(8);
const result33 = getAny(true);

function getAnyReverse(arg1: any, arg2: any, arg3: any): [any, any, any] {
  return [arg3, arg2, arg1];
}
const result34 = getAnyReverse("철수", "다람쥐초등학교", 8);

// 4. generic 타입
function getGeneric<Mytype>(arg: Mytype): Mytype {
  return arg;
}
const result41 = getGeneric("철수");
const result42 = getGeneric(8);
const result43 = getGeneric(true);

// prettier-ignore
function getGenericReverse<Mytype1,Mytype2,Mytype3>(arg: Mytype1,arg2: Mytype2,arg3: Mytype3): [Mytype3, Mytype2, Mytype1] {
  return [arg3, arg2, arg];
}
const result44 = getGenericReverse("철수", "다람쥐초등학교", 8);

// prettier-ignore
function getGenericReverseT<T1,T2,T3>(arg: T1,arg2: T2,arg3: T3): [T3, T2, T1] {
    return [arg3, arg2, arg];
  }
const result45 = getGenericReverseT("철수", "다람쥐초등학교", 8);

// prettier-ignore
function getGenericReverseTUV<T,U,V>(arg: T,arg2: U,arg3: V): [V, U, T] {
    return [arg3, arg2, arg];
  }
// const result46 = getGenericReverseTUV<string,string,number>("철수", "다람쥐초등학교", 8);
