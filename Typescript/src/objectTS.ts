const chai = {
    name: "Mashala chai",
    price: 20,
    isHot: true,
}


//declaring objett type

let tea: {
    name: string;
    price: number;
    isHot: boolean;
}


tea = {
    name: "Ginger tea",
    price: 15,
    isHot: true,
}


//type alias for object

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const gingerTea: Tea = {
    name: "Ginger tea",
    price: 15,
    ingredients: ["ginger", "water", "milk", "sugar"]
}


//duck typing

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", color: "red" };

smallCup = bigCup; // This is allowed because bigCup has at least the properties of Cup