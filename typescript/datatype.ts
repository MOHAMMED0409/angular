let fname = 'Mohammed';

let captial_name = fname.toUpperCase();

let age: number;
age = 22;

let a = "22";

let b = parseInt(a);

let isValid: boolean = true;

let emplist:string[];
emplist = ["Mohammed","Khashif"];

let numlist:Array<number>;
numlist = [1,2,3,4,5];
let result = numlist.filter((num)=> num>2);

const enum Color{
    red,
    blue,
    green
}

let g:Color = Color.green

let swapnum: [fnum:number,snum:number];
function swapnumbers(num1:number,num2:number):[number,number]{
    return [num2,num1]
}

swapnum= swapnumbers(10,20);

console.log(swapnum[0])
console.log(result);
console.log(isValid);
console.log(captial_name);