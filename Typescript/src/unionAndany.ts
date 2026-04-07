// let subs=10
let subs: number | string = '1m'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'
// apiRequestStatus='success'

let airLineSeat:'aisle'|'window'|'middle'='aisle'
airLineSeat='window'


const orders=['12','11','42']
let currentorder:string | undefined;

for(let order of orders){
    if(order === "12"){
        currentorder=order;
        break;
    }
    currentorder='11'
}

console.log(currentorder);

//1 ; 
