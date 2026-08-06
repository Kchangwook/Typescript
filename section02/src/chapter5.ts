// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

enum Language {
    koran = "ko",
    english = "en"
}

const user1 = {
    name: "김창욱",
    role: Role.ADMIN,
    language: Language.koran
}

const user2 = {
    name: "김영희",
    role: Role.USER,
    language: Language.koran
}

const user3 = {
    name: "김철수",
    role: Role.GUEST,
    language: Language.english
}

console.log(user1, user2, user3);