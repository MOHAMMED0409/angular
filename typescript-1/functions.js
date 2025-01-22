"use strict";
// Named function
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
;
console.log(add(2, 3));
console.log(add(2, 3, 4));
// Arrow function
const sub = (num1, num2, num3 = 20) => num1 - num2 - num3;
console.log(sub(3, 2));
console.log(sub(3, 2, 5));
//Function Expression
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(3, 2));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
;
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
// Generic Function
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
