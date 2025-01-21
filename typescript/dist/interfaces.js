"use strict";
// Run: tsc interfaces.ts && node interfaces.js
Object.defineProperty(exports, "__esModule", { value: true });
;
// Object
let user = {
    name: "Khashif",
    age: 25,
    email: "mohammedkhashif02@gmail.com",
    id: 1
};
// Object Destructuring
let { name, email } = {
    name: "Mohammed",
    age: 25,
    email: "",
    id: 2
};
;
// Object
let employee = {
    name: "Khashif",
    age: 25,
    email: "mohammedkhashif02@gmail.com",
    id: 1,
    salary: 100000
};
// Array Destruction
let [user1, user2, ...restusers] = [{
        name: "Khashif1",
        age: 25,
        email: "",
        id: 1
    }, {
        name: "Khashif2",
        age: 25,
        email: "",
        id: 2
    }, {
        name: "Khashif3",
        age: 25,
        email: "",
        id: 3
    }, {
        name: "Khashif4",
        age: 25,
        email: "",
        id: 4
    }];
console.log(user1);
console.log(user2);
console.log(restusers);
// Fliters
let users = restusers.filter(user => user.id > 3);
console.log(users);
// Decorators
//# sourceMappingURL=interfaces.js.map