"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
//type assertion 
//means we are telling typescript that we know the type of this variable and we want to treat it as that type
//we can use type assertion to tell typescript that we know the type of this variable and we want to treat it as that type
let numericLength = response.length;
let bookString = '{"name":"Bhagwat Gita"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
//# sourceMappingURL=moreTypes.js.map