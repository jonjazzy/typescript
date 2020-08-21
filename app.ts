// Function as Types

function add(n1: number, n2: number)
{
    return n1 + n2;
}

function takeNothingReturnSomething()
{
    return Math.random() * 1000;
}

// Function
let combineValues = add;

console.log("Function");
console.log(combineValues(3,6));

// () => number (i.e. return)
let combineValues2: () => number;
combineValues2 = takeNothingReturnSomething;
console.log("combineValues2: () => number;");
console.log(combineValues2());

// (a: number, b: number) => number
let combineValues3: (a:number, b:number) => number = add;
console.log("(a: number, b: number) => number");
console.log(combineValues3(1,2));


// Function Types and Callbacks
