class Employee{
    #id! : number;
    name! : string;
    address! : string;
    
    constructor(id: number, name: string, address: string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getaddresswithname(){
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