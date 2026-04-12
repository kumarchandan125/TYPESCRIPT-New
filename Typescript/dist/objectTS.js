"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "Mashala chai",
    price: 20,
    isHot: true,
};
//declaring objett type
let tea;
tea = {
    name: "Ginger tea",
    price: 15,
    isHot: true,
};
const gingerTea = {
    name: "Ginger tea",
    price: 15,
    ingredients: ["ginger", "water", "milk", "sugar"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", color: "red" };
smallCup = bigCup; // This is allowed because bigCup has at least the properties of Cup
//partial means that all properties of the type are optional, so we can update only a subset of the properties of the Chai type without needing to provide all of them.
const updateChai = (updates) => {
    // This function can update any subset of the Chai properties
    console.log("Updating chai with", updates);
};
updateChai({ price: 25 }); // Update only the price
updateChai({ name: "Cardamom chai", isHot: false }); // Update name and isHot
//Required means that all properties of the type are required, so we must provide all of them when creating an object of that type. This is useful when we want to ensure that all necessary information is provided for a chai order.
const placeOrder = (order) => {
    // This function requires all properties of ChaiOrder to be provided
    console.log("Placing order for", order);
};
placeOrder({ name: "Masala chai", quantity: 2 }); // This is valid
const basicChai = {
    name: "Masala chai",
    price: 20,
};
const chaiWithoutIngredients = {
    name: "Masala chai",
    price: 20,
    isHot: true,
};
//# sourceMappingURL=objectTS.js.map