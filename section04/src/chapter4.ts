/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return "isBark" in animal;
}

function isCat(animal: Animal): animal is Cat {
    return "isScratch" in animal;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        console.log("강아지입니다.");
    } else if (isCat(animal)) {
        
        console.log("고양이입니다.");
    }
}