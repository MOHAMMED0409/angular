"use strict";
let cashinregister = 100;
let nextorderid = 1;
let nextpizzaid = 1;
const menu = [
    { id: nextpizzaid++, name: "Margherita", price: 8 },
    { id: nextpizzaid++, name: "Pepperoni", price: 7 },
    { id: nextpizzaid++, name: "Hawaiian", price: 6 },
    { id: nextpizzaid++, name: "Veggie", price: 5 },
];
const orderqueue = [];
function addnewpizza(pizzaobj) {
    const newpizza = Object.assign({ id: nextpizzaid++ }, pizzaobj);
    menu.push(newpizza);
    return newpizza;
}
function placeorder(pizzaname) {
    const selectpizza = menu.find(pizzaobj => pizzaobj.name === pizzaname);
    if (!selectpizza) {
        console.error(`${pizzaname} is not on the menu`);
        return;
    }
    cashinregister += selectpizza.price;
    const neworder = { id: nextorderid++, pizza: selectpizza, status: "ordered" };
    orderqueue.push(neworder);
    return neworder;
}
function addtoarray(array, item) {
    array.push(item);
    return array;
}
//example usage:
addtoarray(menu, { id: nextpizzaid++, name: "Meat Feast", price: 9 });
addtoarray(orderqueue, { id: nextorderid++, pizza: menu[2], status: "done" });
console.log(menu);
console.log(orderqueue);
function completeorder(orderid) {
    const order = orderqueue.find(order => order.id === orderid);
    if (!order) {
        console.error(`${orderid} not found`);
        return;
    }
    order.status = "completed";
    return order;
}
function getpizzadetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    }
    else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    }
    else {
        throw new TypeError("Parameter 'indentifier' must be a string or number");
    }
}
addnewpizza({ name: "Meat Feast", price: 9 });
addnewpizza({ name: "Vegan", price: 10 });
addnewpizza({ name: "BBQ Chicken", price: 11 });
placeorder("Margherita");
completeorder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashinregister);
console.log("order queue:", orderqueue);
