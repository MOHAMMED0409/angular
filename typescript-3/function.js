"use strict";
function addTwo(num) {
    return num + 2;
    //return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid = false) => { };
let myValue = addTwo(5);
getUpper("hitesh");
signUpUser("hitesh", "hitesh@lco.dev", false);
loginUser("h", "h@h.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
const heros = [1, 2, 3];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
