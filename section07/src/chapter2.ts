/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (item) => item + "s");
map(['hi', 'hello'], (item) => item.length);

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(arr, (item) => console.log(item));