type pizza = {
    name: string
    price: number
}

type order = {
    id: number
    pizza: pizza
    status: string
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 7 },
    { name: "Hawaiian", price: 6 },
    { name: "Veggie", price: 5 },
]

let cashinregister: number = 100;
let nextorderid: number = 1;
const orderqueue: order[] = [];

function addnewpizza(pizzaobj: pizza) {
    menu.push(pizzaobj);
}

function placeorder(pizzaname: string) {
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

function completeorder(orderid: number) {
    const order = orderqueue.find(order => order.id === orderid);
    if (!order) {
        console.error(`${orderid} not found`);
        return;
    }
    order.status = "completed";
    return order;
}

addnewpizza({ name: "Meat Feast", price: 9 });
addnewpizza({ name: "Vegan", price: 10 });
addnewpizza({ name: "BBQ Chicken", price: 11 });

placeorder("Margherita");
completeorder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashinregister);
console.log("order queue:", orderqueue);
