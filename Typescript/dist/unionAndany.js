"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let subs=10
let subs = '1m';
let apiRequestStatus = 'pending';
// apiRequestStatus='success'
let airLineSeat = 'aisle';
airLineSeat = 'window';
const orders = ['12', '11', '42'];
let currentorder;
for (let order of orders) {
    if (order === "12") {
        currentorder = order;
        break;
    }
    currentorder = '11';
}
console.log(currentorder);
//1 ; 
//# sourceMappingURL=unionAndany.js.map