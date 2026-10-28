/**
 * 제네릭
 */
// 제네릭 함수
function func<T>(value: T): T {
    return value;
}

let num = func(10);
// num.toUpperCase();
num.toFixed();

let bool = func(true);
// num.toUpperCase();

let str = func("hello");

let arr = func<[number, number, number]>([1, 2, 3]);