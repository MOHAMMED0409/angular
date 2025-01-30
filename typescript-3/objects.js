"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "Khashif",
    email: "Khashif@lco.dev",
    isAvtive: true
};
function createUser({ name: string, isPaid: boolean }) { }
let newUser = { name: "Khashif", isPaid: false, email: "h@h.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
let myUser = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.email = "h@gmail.com";
