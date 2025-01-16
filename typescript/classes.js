"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getaddresswithname() {
        return `${this.name} lives in ${this.address}`;
    }
}
let khashif = new Employee(1, "Khashif", "Karachi");
// khashif.id = 1;
// khashif.name = "Khashif";
// khashif.address = "Karachi";
let address = khashif.getaddresswithname();
console.log(khashif); // { id: 1, name: 'Khashif', address: 'Karachi' }
console.log(address);
