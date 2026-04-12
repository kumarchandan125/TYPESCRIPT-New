//Generic means that it can work with any data type. It is a way to create reusable components that can work with any data type. It is a way to create a function or a class that can work with any data type.

function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray(1); // [1]
wrapInArray("Hello");
wrapInArray(true); // [true]
wrapInArray({ name: "John", age: 30 }); // [{name:"John", age:30}]


function pair<A, B>(first: A, second: B): [A, B] {
    return [first, second];
}

pair(1, "Hello"); // [1, "Hello"]
pair(true, { name: "John", age: 30 }); // [true, {name:"John", age:30}]



//Generic With Interface


interface Box<T> {
    content: T;

}

const numberBox: Box<number> = { content: 5 };
const numberBoxCup: Box<string> = { content: "5" };




interface ApiPromise<T> {
    status: number;
    data: T;
}


const userApiResponse: ApiPromise<{ name: string; }> = {
    status: 200,
    data: { name: "John" }
};