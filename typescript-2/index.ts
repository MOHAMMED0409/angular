type pizza = {
    id : number
    name: string
    price: number
}

type order = {
    id: number
    pizza: pizza
    status: "ordered" | "completed"
}

let cashinregister: number = 100;
let nextorderid: number = 1;
let nextpizzaid: number = 1;

const menu: pizza[] = [
    { id:nextpizzaid++, name: "Margherita", price: 8 },
    { id:nextpizzaid++, name: "Pepperoni", price: 7 },
    { id:nextpizzaid++, name: "Hawaiian", price: 6 },
    { id:nextpizzaid++, name: "Veggie", price: 5 },
]

const orderqueue: order[] = [];


function addnewpizza(pizzaobj: Omit<pizza, "id">): pizza {
    const newpizza: pizza ={
        id: nextpizzaid++, ...pizzaobj
    }
    menu.push(newpizza);
    return newpizza;
}

function placeorder(pizzaname: string) {
    const selectpizza = menu.find(pizzaobj => pizzaobj.name === pizzaname);
    if (!selectpizza) {
        console.error(`${pizzaname} is not on the menu`);
        return;
    }
    cashinregister += selectpizza.price;
    const neworder:order = { id: nextorderid++, pizza: selectpizza, status: "ordered" };
    orderqueue.push(neworder);
    return neworder;
}

function addtoarray<T>(array:T[], item: T): T[] {
    array.push(item);
    return array;
}

//example usage:
addtoarray(menu, { id: nextpizzaid++, name: "Meat Feast", price: 9 });
addtoarray<order>(orderqueue, { id:nextorderid++, pizza: menu[2], status: "completed" });

console.log(menu);
console.log(orderqueue)

function completeorder(orderid: number) {
    const order = orderqueue.find(order => order.id === orderid);
    if (!order) {
        console.error(`${orderid} not found`);
        return;
    }
    order.status = "completed";
    return order;
}

function getpizzadetail(identifier: string | order): pizza | undefined {
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
