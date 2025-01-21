"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
// Normal Classes
class Employee {
    // Constructor
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getaddresswithname() {
        return `${this.name} lives in ${this.address}`;
    }
    // static properties
    static EmployeeCount() {
        return 10;
    }
    // Getters and Setters
    get empid() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empid(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    login() {
        return {
            name: 'Khashif',
            age: 25,
            email: "mohammedkhashif02@gmail.com",
            id: 1
        };
    }
}
_Employee_id = new WeakMap();
// Inheritance
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getaddresswithname() {
        return `${this.name} lives in ${this.address} and he is a Manager`;
    }
}
let khashif = new Employee(1, "Khashif", "Karachi");
let mohammed = new Manager(2, "Mohammed", "Lahore");
// khashif.id = 1;
// khashif.name = "Khashif";
// khashif.address = "Karachi";
let address = khashif.getaddresswithname();
console.log(khashif); // { id: 1, name: 'Khashif', address: 'Karachi' }
console.log(address);
console.log(mohammed.getaddresswithname()); // Mohammed lives in Lahore and he is a Manager
Employee.EmployeeCount(); // 10
khashif.empid = 2;
console.log(khashif.empid); // 2
//# sourceMappingURL=classes.js.map