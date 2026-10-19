/**
 * 접근 제어자
 */

class Employee {
    // 필드
    // private name: string;
    // protected age: number;
    // public position: string;

    // 생성자
    constructor(private name: string, protected age: number, public position: string) {
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }

    // 메서드
    work() {
        console.log("일을 합니다.");
    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    func() {
        // this.name;
        this.age;
    }
}

const employee: Employee = new Employee("John", 30, "Developer");
// employee.name = "Jane";
// employee.age = 3;
employee.position = "Manager";

console.log(employee);