/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = { key: 'key', value: 1 };

let keyPair2: KeyPair<number, string> = { key: 1, value: 'value' };

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string]: number;
}

let numberMap: NumberMap = { key1: 1, key2: 2 };

interface Map<V> {
    [key: string]: V;
}

let numberMap2: Map<number> = { key1: 1, key2: 2 };
let stringMap: Map<string> = { key1: 'value1', key2: 'value2' };
let booleanMap: Map<boolean> = { key1: true, key2: false };

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
    [key: string]: V;
};

const stringMap2: Map2<string> = { key1: 'value1', key2: 'value2' };

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 유저 / 개발자 유저
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    console.log(`${user.name} is going to ${user.profile.school} school`);
}

const developerUser: User<Developer> = {
    name: 'developer',
    profile: {
        type: 'developer',
        skill: 'typescript'
    }
};

const studentUser: User<Student> = {
    name: 'student',
    profile: {
        type: 'student',
        school: 'school'
    }
};
