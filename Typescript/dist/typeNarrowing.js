"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making a cup of ${kind} tea`;
    }
    return `chai order: ${kind}`;
}
//console.log(getChai('green'))
//console.log(getChai(1))
function serveChai(msg) {
    if (msg) {
        console.log(`Serving ${msg}`);
    }
    else {
        console.log('Serving plain chai');
    }
}
serveChai('Ye mashala chai hai and sayad ye apko pasand aaye');
serveChai();
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai...`;
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`;
    }
    return `chai order: ${size}`;
}
console.log(orderChai("small"));
console.log(orderChai("medium"));
console.log(orderChai("large"));
console.log(orderChai(1));
//# sourceMappingURL=typeNarrowing.js.map