// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "my", "name"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들아가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
];

// 다차원의 배열 타입이 다양할 경우
let multiArr2: (string | number)[][] = [
    [1, 2, "test"],
    ["hello", 11]
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
    ["김창욱", 1],
    ["이아무개", 2],
    ["박아무개", 3],
    ["최아무개", 4]
];