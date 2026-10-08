/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "김창욱",
    profile: {
        nickname: "kchangwook"
    },
    urls: ["https://www.google.com", "https://www.naver.com"]
}

let {id, name, profile, urls} = c;
let [one, two, three] = [1, "hello", true];

function func(message = 40) {
    return "hello";
}

let d;
d = 10;
d.toFixed();
d = "hello";
d = true;
d = { nickname: "kchangwook" }
