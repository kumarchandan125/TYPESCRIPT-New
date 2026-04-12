"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["Mashala", "Ginger", "Cardamom", "Lemon"];
const chaiPrices = [20, 15, 25, 10];
const chaiMenu = [
    { name: "Mashala", price: 20 },
    { name: "Ginger", price: 15 },
    { name: "Cardamom", price: 25 },
    { name: "Lemon", price: 10 }
];
let chaiTuple;
chaiTuple = ["Ginger", 15];
chaiTuple = ["Cardamom", 25];
let userInfo;
userInfo = ["Alice", 30, true];
userInfo = ["hitesh", 100];
const location = [40.78, -74.60];
//enum means enumerated type, it is a way to define a set of named constants. It allows us to create a collection of related values that can be used in our code with meaningful names instead of just numbers or strings.
var ChaiSize;
(function (ChaiSize) {
    ChaiSize[ChaiSize["SMALL"] = 0] = "SMALL";
    ChaiSize[ChaiSize["MEDIUM"] = 1] = "MEDIUM";
    ChaiSize[ChaiSize["LARGE"] = 2] = "LARGE";
})(ChaiSize || (ChaiSize = {}));
const size = ChaiSize.MEDIUM;
//By default, enums in TypeScript are assigned numeric values starting from 0. So, in the above example, ChaiSize.SMALL is 0, ChaiSize.MEDIUM is 1, and ChaiSize.LARGE is 2. We can also assign specific values to the enum members if we want. For example:
var ChaiFlavour;
(function (ChaiFlavour) {
    ChaiFlavour[ChaiFlavour["MASHALA"] = 0] = "MASHALA";
    ChaiFlavour[ChaiFlavour["GINGER"] = 1] = "GINGER";
    ChaiFlavour[ChaiFlavour["CARDAMOM"] = 2] = "CARDAMOM";
    ChaiFlavour[ChaiFlavour["LEMON"] = 3] = "LEMON";
})(ChaiFlavour || (ChaiFlavour = {}));
function makeChai(type) {
    console.log(`Making ${ChaiFlavour[type]} chai.`);
}
makeChai(ChaiFlavour.LEMON);
//# sourceMappingURL=ArrayTs.js.map