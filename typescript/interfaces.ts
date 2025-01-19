// Run: tsc interfaces.ts && node interfaces.js

export interface User {
    name: string;
    age: number;
    email: string;
    id: number;
};

// Object
let user: User = {
    name: "Khashif",
    age: 25,
    email: "mohammedkhashif02@gmail.com",
    id: 1
};

// Object Destructuring
let { name, email }: User = {
    name: "Mohammed",
    age: 25,
    email: "",
    id: 2
};

// Interface Inheritance
interface Employees extends User {
    salary: number;
};

// Object
let employee: Employees = {
    name: "Khashif",
    age: 25,
    email: "mohammedkhashif02@gmail.com",
    id: 1,
    salary: 100000
};

// Interface with Functions
export interface login {
    login(): User;
}

// Array Destruction
let [user1, user2, ...restusers]: User[] = [{
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