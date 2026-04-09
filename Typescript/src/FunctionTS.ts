function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type} chai.`);
}

makeChai("Ginger", 2);


function getChaiPrice(): number {
    return 20;
}

function orderChai(type: string = "Mashala") {

}



function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "medium" | "large";
}): number {
    return 4
}