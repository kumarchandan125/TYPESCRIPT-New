let response: any = "42"


//type assertion 
//means we are telling typescript that we know the type of this variable and we want to treat it as that type
//we can use type assertion to tell typescript that we know the type of this variable and we want to treat it as that type
let numericLength: number = (response as string).length


type Book = {
    name: string;
}


let bookString = '{"name":"Bhagwat Gita"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject)



