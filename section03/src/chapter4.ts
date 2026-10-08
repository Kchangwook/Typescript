/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = "hello";
a = 10;

a = true;

let arr: (number | string | boolean)[] = [10, "hello", true];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    age: number;
}

type Union1 = Dog | Person;

let union1: Union1 = {
    name:"hello",
    color: ""
}

let union2: Union1 = {name: "hello", age: 10}
let union3: Union1 = {name: "hello", age: 10, color: "test"};
// let union4: Union1 = {name: "string"};

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;
// variable = 10;
// variable = "안녕";

type Intersection = Dog & Person;

let intersection: Intersection = {name: "hello", age: 10, color: "test"};