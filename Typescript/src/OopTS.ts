// class Chai{
//     flavor: string;
//     price: number;

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
    public flavor: string;

    private secetIngredient: string;



    reveal() {
        return this.secetIngredient;
    }


}


class Shop {
    protected shopName: "Chai Corner";

}

class Branch extends Shop {
    getShopName() {
        return this.shopName;//ok
    }
}


new Branch().getShopName();//ok

const masalaChai = new Chai();
masalaChai.reveal()




//getters and setters


class ModernChai{
    private _sugar=2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value:number){
        if(value > 5) throw new Error("Too much sugar");
        this._sugar=value;
    }
}

const chai=new ModernChai();
chai.sugar=3;//ok
console.log(chai.sugar);//3


//composition

class Heater{
    heat(){}

}

class ChaiMaker{
    constructor(private heater: Heater){
        
    }
    make(){
        this.heater.heat();
    }
}