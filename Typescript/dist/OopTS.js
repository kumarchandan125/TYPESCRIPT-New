"use strict";
// class Chai{
//     flavor: string;
//     price: number;
Object.defineProperty(exports, "__esModule", { value: true });
//     //  constructor(flavor: string,price:number){
//     //     this.flavor=flavor;
//     //     this.price=price;
//     // }
//     constructor(flavor:string){
//         this.flavor=flavor;
//         console.log(this)
//     }
// }
// const masalaChai=new Chai("Ginger",20);
// masalaChai.flavor="Masala";
//access modifiers
class Chai {
    flavor;
    secetIngredient;
    reveal() {
        return this.secetIngredient;
    }
}
class Shop {
    shopName;
}
class Branch extends Shop {
    getShopName() {
        return this.shopName; //ok
    }
}
new Branch().getShopName(); //ok
const masalaChai = new Chai();
masalaChai.reveal();
//getters and setters
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too much sugar");
        this._sugar = value;
    }
}
const chai = new ModernChai();
chai.sugar = 3; //ok
console.log(chai.sugar); //3
//# sourceMappingURL=OopTS.js.map