/**
 * 클래스
 */

let studentA = {
    name: 'John',
    grade: "A",
    age: 27,
    study() {
        console.log("공부를 합니다.");
    },
    introduce() {
        console.log(`안녕하세요. 저는 ${this.name}입니다.`);
    }
};

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("공부를 합니다.");
    }

    introduce() {
        console.log(`안녕하세요. 저는 ${this.name}입니다.`);
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
const studentB = new Student('Ten', 'B', 44);
studentB.introduce();
studentB.study();

class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming() {
        console.log(`내가 좋아하는 프로그래밍 언어는 ${this.favoriteSkill}입니다.`);
    }
}

const studentDeveloper = new StudentDeveloper('John', 'A', 27, 'JavaScript');
studentDeveloper.programming();