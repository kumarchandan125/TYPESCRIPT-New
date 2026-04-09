const chaiFlavours: string[] = ["Mashala", "Ginger", "Cardamom", "Lemon"];


const chaiPrices: number[] = [20, 15, 25, 10];

type Chai = {
    name: string;
    price: number;
}

const chaiMenu: Chai[] = [
    { name: "Mashala", price: 20 },
    { name: "Ginger", price: 15 },
    { name: "Cardamom", price: 25 },
    { name: "Lemon", price: 10 }
];

let chaiTuple: [string, number];
chaiTuple = ["Ginger", 15];
chaiTuple = ["Cardamom", 25];


let userInfo: [string, number, boolean?];
userInfo = ["Alice", 30, true];
userInfo = ["hitesh", 100]



const location: readonly [number, number] = [40.78, -74.60];




//enum means enumerated type, it is a way to define a set of named constants. It allows us to create a collection of related values that can be used in our code with meaningful names instead of just numbers or strings.

enum ChaiSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = ChaiSize.MEDIUM;





//By default, enums in TypeScript are assigned numeric values starting from 0. So, in the above example, ChaiSize.SMALL is 0, ChaiSize.MEDIUM is 1, and ChaiSize.LARGE is 2. We can also assign specific values to the enum members if we want. For example:
enum ChaiFlavour {
    MASHALA,
    GINGER,
    CARDAMOM,
    LEMON
}

function makeChai(type: ChaiFlavour) {
    console.log(`Making ${ChaiFlavour[type]} chai.`);
}
makeChai(ChaiFlavour.LEMON);