"use strict";
let score = 33;
score = 44;
score = "55";
let Khashif = { name: "Khashif", id: 334 };
Khashif = { username: "hc", id: 334 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array 
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", 3, true];
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
