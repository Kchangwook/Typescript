/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
}

const person: Person = {
    name: 'John',
    age: 30,
    sayHi: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.sayHi();
person.sayHi(1, 2);
