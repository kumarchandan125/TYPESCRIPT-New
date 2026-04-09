type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder) {
    console.log(order)
}

function serveChai(order: ChaiOrder) {
    console.log("Serving chai with order", order)
}





type TeaRecipe={
    water: number;
    milk: number;
}

