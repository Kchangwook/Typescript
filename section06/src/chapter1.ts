/**
 * 타입 스크립트의 클래스
 */

const employee = {
    name: "김창욱",
    age: 28,
    position: "개발자",
    work() {
        console.log("일을 합니다.");
    }
};

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일을 합니다.");
    }
}

const employeeB = new Employee("김창욱", 28, "개발자");
console.log(employeeB);

const employeeC: Employee = {
    name: "김창욱",
    age: 28,
    position: "개발자",
    work() {
        console.log("일을 합나요?");
    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}