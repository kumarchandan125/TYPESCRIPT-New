interface Chai {
    flavor: string;
    price: number;
    milk?: boolean;
}

const masala: Chai = {
    flavor: "Masala",
    price: 30
}

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {
    id: 1,
    name: "Tea Shop"
}


interface DiscountCalculator {
    (price: number): number;
}
const apply50: DiscountCalculator = (price) => price * 0.5;


interface TeaMachine {
    start(price: number): void;
    stop(): void;
}

const machine: TeaMachine = {
    start() {
        console.log("Machine Started");
    },
    stop() {
        console.log("Machine Stopped");
    }
}


//index signature

interface ChaiRating{
    [flavor: string]: number;
}

const ratings: ChaiRating = {
    masala:4.5,
    ginger:4.0,
    lemon:3.5
}


interface User{
    name:string;
}

interface User{
    age:number;
}

const u:User={
    name:"Chandan",
    age:30
}