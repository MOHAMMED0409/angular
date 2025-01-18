export interface User{
    name: string;
    age: number;
    email: string;
    id: number;
};

let user: User = {
    name: "Khashif",
    age: 25,
    email: "mohammedkhashif02@gmail.com",
    id: 1
};

interface Employees extends User{
    salary: number;
};

let employee: Employees = {
    name: "Khashif",
    age: 25,
    email: "mohammedkhashif02@gmail.com",
    id: 1,
    salary: 100000
};

export interface login{
    login(): User;
}