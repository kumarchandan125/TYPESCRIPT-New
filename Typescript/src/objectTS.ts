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



type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}


//partial means that all properties of the type are optional, so we can update only a subset of the properties of the Chai type without needing to provide all of them.
const updateChai = (updates: Partial<Chai>) => {
    // This function can update any subset of the Chai properties
    console.log("Updating chai with", updates);
}

updateChai({ price: 25 }); // Update only the price
updateChai({ name: "Cardamom chai", isHot: false }); // Update name and isHot





type ChaiOrder = {
    name?: string;
    quantity?: number;
}

//Required means that all properties of the type are required, so we must provide all of them when creating an object of that type. This is useful when we want to ensure that all necessary information is provided for a chai order.

const placeOrder = (order: Required<ChaiOrder>) => {
    // This function requires all properties of ChaiOrder to be provided
    console.log("Placing order for", order);
}

placeOrder({ name: "Masala chai", quantity: 2 }); // This is valid
// placeOrder({name:"Masala chai"}); // This will cause a TypeScript error because quantity is missing




type Coffee = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

//pick allows us to create a new type by selecting specific properties from an existing type. This is useful when we want to create a simplified version of a type that only includes the properties we need.

type BasicChaiInfo = Pick<Chai, "name" | "price">; // This creates a new type that only includes the name and price properties from the Chai type

const basicChai: BasicChaiInfo = {
    name: "Masala chai",
    price: 20,
}



//omit allows us to create a new type by excluding specific properties from an existing type. This is useful when we want to create a version of a type that excludes certain properties that we don't need.

type ChaiWithoutIngredients = Omit<Chai, "ingredients">; // This creates a new type that includes all properties of Chai except for ingredients

const chaiWithoutIngredients: ChaiWithoutIngredients = {
    name: "Masala chai",
    price: 20,
    isHot: true,
}

