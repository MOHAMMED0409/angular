// Normal Classes
class Employee{
    #id! : number;
    protected name! : string;
    address! : string;

    // Constructor
    constructor(id: number, name: string, address: string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getaddresswithname(){
        return `${this.name} lives in ${this.address}`;
    }

    // static properties
    static EmployeeCount(): number {
        return 10;
    }

    // Getters and Setters
    get empid():number{
        return this.#id;
    }

    set empid(id: number){
        this.#id = id;
    }
}

// Inheritance
class Manager extends Employee{
    constructor(id: number, name: string, address: string){
        super(id, name, address);
    }

    getaddresswithname(){
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