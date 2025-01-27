// Lesson -2 
const menu = [
    {name :"Margherita", price : 8},
    {name :"Pepperoni", price : 7},
    {name :"Hawaiian", price : 6},
    {name :"Veggie", price : 5}
]

const cashinregister = 100;
const nextorderid = 1;
const orderqueue = [];

function addnewpizza(pizzaobj){
    menu.push(pizzaobj);
}

function placeorder(pizzaname){
    const selectpizza = menu.find(pizzaobj => pizzaobj.name === pizzaname);
    cashinregister += selectpizza.price;
    const neworder = {id :nextorderid++, pizza : selectpizza, status : "ordered"};
    orderqueue.push(neworder);
    return neworder;
}

function completeorder(orderid){
    const order = orderqueue.find(order => order.id === orderid);
    order.status = "completed";
    return order;
}

addnewpizza({name :"Meat Feast", price : 9});
addnewpizza({name :"Vegan", price : 10});
addnewpizza({name :"BBQ Chicken", price : 11});

placeorder("Margherita");
completeorder("1");

console.log("Menu:", menu);
console.log("Cash in register:", cashinregister);
console.log("order queue:", orderqueue);